/* ============================================================
   SPEECH — wraps the browser's free built-in voice tools.
     speak(text)      -> Pixel / the app says something out loud
     listen(onResult) -> turns on the mic and hears Senna speak
   No API key, no cost. Works best in Google Chrome.
   ============================================================ */

const Speech = (() => {
  const synth = window.speechSynthesis;
  let englishVoice = null;

  // Pick a clear English voice once the browser has loaded its voices.
  function pickVoice() {
    const voices = synth ? synth.getVoices() : [];
    // Prefer a natural-sounding English (UK or US) voice.
    englishVoice =
      voices.find(v => /en-GB/i.test(v.lang) && /female|google|natural/i.test(v.name)) ||
      voices.find(v => /en-US/i.test(v.lang) && /google|natural/i.test(v.name)) ||
      voices.find(v => /^en/i.test(v.lang)) ||
      voices[0] || null;
  }
  if (synth) {
    pickVoice();
    synth.onvoiceschanged = pickVoice;
  }

  // --- Speaking out loud (always works in modern browsers) ---
  function speak(text, { rate = 0.9, onEnd } = {}) {
    if (!synth) { if (onEnd) onEnd(); return; }
    synth.cancel(); // stop anything already talking
    const u = new SpeechSynthesisUtterance(text);
    if (englishVoice) u.voice = englishVoice;
    u.lang = englishVoice ? englishVoice.lang : "en-US";
    u.rate = rate;      // a little slower than normal = easier to follow
    u.pitch = 1;
    if (onEnd) u.onend = onEnd;
    synth.speak(u);
  }

  function stopSpeaking() { if (synth) synth.cancel(); }

  // --- Listening (mic). Only in Chrome / Edge. ---
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const canListen = !!Recognition;

  let recognizer = null;

  // listen() returns a "stop" function. It calls handlers as things happen.
  function listen({ onResult, onError, onStart, onEnd } = {}) {
    if (!canListen) {
      if (onError) onError("no-support");
      return () => {};
    }
    recognizer = new Recognition();
    recognizer.lang = "en-US";
    recognizer.interimResults = false;
    recognizer.maxAlternatives = 3;
    recognizer.continuous = false;

    recognizer.onstart  = () => onStart && onStart();
    recognizer.onerror  = (e) => onError && onError(e.error || "error");
    recognizer.onend    = () => onEnd && onEnd();
    recognizer.onresult = (e) => {
      const alternatives = [];
      const res = e.results[0];
      for (let i = 0; i < res.length; i++) alternatives.push(res[i].transcript);
      if (onResult) onResult(alternatives[0], alternatives);
    };

    try { recognizer.start(); } catch (_) { /* already started */ }
    return () => { try { recognizer.stop(); } catch (_) {} };
  }

  return { speak, stopSpeaking, listen, canListen, get isSpeaking() { return synth && synth.speaking; } };
})();

/* ============================================================
   SCORING — compares what Senna SAID to the TARGET phrase and
   returns a friendly 0-100 score plus a short message.
   It is forgiving on purpose: the goal is confidence, not perfection.
   ============================================================ */

const Score = (() => {
  function clean(s) {
    return (s || "")
      .toLowerCase()
      .replace(/[^a-z0-9'\s]/g, " ")   // drop punctuation
      .replace(/\s+/g, " ")
      .trim();
  }

  // Levenshtein distance between two strings (character edits).
  function distance(a, b) {
    const m = a.length, n = b.length;
    if (!m) return n; if (!n) return m;
    const dp = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
      }
    }
    return dp[m][n];
  }

  // Compare against any of several heard alternatives; take the best match.
  function rate(target, heardAlternatives) {
    const t = clean(target);
    let best = 0;
    (heardAlternatives || []).forEach(h => {
      const c = clean(h);
      if (!c) return;
      const d = distance(t, c);
      const sim = 1 - d / Math.max(t.length, c.length);
      best = Math.max(best, sim);
    });
    const pct = Math.round(best * 100);
    let msg, tier;
    if (pct >= 80)      { msg = "Perfect! 🔥";        tier = "great"; }
    else if (pct >= 55) { msg = "Almost! Try again."; tier = "ok"; }
    else                { msg = "Good try — listen and repeat."; tier = "retry"; }
    return { pct, msg, tier };
  }

  return { rate, clean };
})();
