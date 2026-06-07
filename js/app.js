/* ============================================================
   Senna's English Quest — main app
   A single-page app. No backend. Progress is saved in the
   browser (localStorage), so it remembers Senna between days.
   ============================================================ */

/* ---------------- game state (saved in the browser) ---------------- */
const State = (() => {
  const KEY = "senna_quest_v1";
  const today = () => new Date().toISOString().slice(0, 10);

  const fresh = () => ({
    xp: 0, coins: 0, streak: 0,
    lastQuestDate: null,
    learned: {},          // { "win": true, ... }
    questsDone: 0,
    seenWelcome: false    // first-time hello + mic reminder shown?
  });

  let s = load();
  function load() {
    try { return Object.assign(fresh(), JSON.parse(localStorage.getItem(KEY)) || {}); }
    catch { return fresh(); }
  }
  function save() { localStorage.setItem(KEY, JSON.stringify(s)); }

  const level = () => Math.floor(s.xp / 100) + 1;
  const levelProgress = () => s.xp % 100;          // 0-99 toward next level

  function addXp(n)   { s.xp += n; save(); }
  function addCoins(n){ s.coins += n; save(); }
  function markLearned(word) { s.learned[word] = true; save(); }

  // Call when a full daily quest finishes. Handles the streak.
  function completeQuest() {
    const t = today();
    if (s.lastQuestDate !== t) {
      const yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
      s.streak = (s.lastQuestDate === yesterday) ? s.streak + 1 : 1;
      s.lastQuestDate = t;
      s.questsDone += 1;
    }
    save();
  }
  const questDoneToday = () => s.lastQuestDate === today();

  return {
    get data(){ return s; }, save, level, levelProgress,
    addXp, addCoins, markLearned, completeQuest, questDoneToday,
    markWelcomeSeen(){ s.seenWelcome = true; save(); },
    reset(){ s = fresh(); save(); }
  };
})();

/* ---------------- tiny DOM helpers ---------------- */
const app = document.getElementById("app");
const h = (strings, ...vals) => strings.map((str, i) => str + (vals[i] ?? "")).join("");
function setHTML(html) { app.innerHTML = topbar() + html; }
function pickRandom(arr, n) {
  const c = [...arr];
  for (let i = c.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [c[i], c[j]] = [c[j], c[i]]; }
  return c.slice(0, n);
}
function flash(msg) { /* small celebratory toast could go here */ }

/* ---------------- top bar (stats) ---------------- */
function topbar() {
  const d = State.data;
  return h`
    <div class="topbar">
      <div class="logo">English Quest <small>SENNA</small></div>
      <div class="spacer"></div>
      <div class="stat level"><span>⭐</span><span class="num">Lv ${State.level()}</span></div>
      <div class="stat streak"><span>🔥</span><span class="num">${d.streak}</span></div>
      <div class="stat coins"><span>🪙</span><span class="num">${d.coins}</span></div>
    </div>
    <div class="xpwrap">
      <div class="xpbar"><span style="width:${State.levelProgress()}%"></span></div>
      <div class="xplabel">${State.levelProgress()} / 100 XP to level ${State.level() + 1}</div>
    </div>`;
}

/* ============================================================
   WELCOME — shown once, the very first time Senna opens the app.
   Tells him the one thing he needs: turn on sound + allow the mic.
   ============================================================ */
function Welcome() {
  setHTML(h`
    <div class="card celebrate">
      <div class="big">🎮</div>
      <h1>Welcome, Senna!</h1>
      <p class="sub" style="max-width:480px;margin:0 auto 18px">
        This is your English Quest. Learn words, talk to your buddy <b>Pixel</b>,
        and win XP every day. 🔥
      </p>
      <div class="warnbox" style="text-align:left;max-width:460px;margin:0 auto 22px">
        🔊 <b>Turn your sound on</b> — Pixel talks out loud.<br>
        🎤 When the browser asks <b>"Use your microphone?"</b>, click <b>Allow</b>
        so Pixel can hear you speak.
      </div>
      <button class="btn big good" id="go">Let's go! →</button>
    </div>
  `);
  document.getElementById("go").onclick = () => { State.markWelcomeSeen(); Home(); };
}

/* ============================================================
   HOME SCREEN
   ============================================================ */
function Home() {
  // First time ever: a friendly hello + the one thing he needs to know (mic).
  if (!State.data.seenWelcome) return Welcome();

  const done = State.questDoneToday();
  setHTML(h`
    <h1>Hey Senna! 👋</h1>
    <p class="sub">${done
      ? "You finished today's quest — awesome! Play more if you want. 🔥"
      : "Ready for today's quest? It only takes a few minutes."}</p>

    <button class="btn big ${done ? "good" : ""}" id="startQuest">
      ${done ? "✅ Quest done — play again" : "▶️ Start Today's Quest"}
    </button>

    <h2 style="margin-top:30px">Free play</h2>
    <div class="tiles">
      <button class="tile" data-go="learnMenu">
        <span class="ic">🗂️</span><span class="t">Learn Words</span>
        <span class="d">New words with sound + Dutch</span>
      </button>
      <button class="tile" data-go="speakMenu">
        <span class="ic">🎤</span><span class="t">Say It</span>
        <span class="d">Practice your pronunciation</span>
      </button>
      <button class="tile" data-go="chatMenu">
        <span class="ic">💬</span><span class="t">Talk to Pixel</span>
        <span class="d">Chat with your AI buddy</span>
      </button>
      <button class="tile" data-go="quizMenu">
        <span class="ic">🎯</span><span class="t">Quiz</span>
        <span class="d">Test what you know</span>
      </button>
    </div>
    ${Speech.canListen ? "" : `<p class="note">💡 Tip: open this in <b>Google Chrome</b> to use the talking microphone features.</p>`}
  `);

  document.getElementById("startQuest").onclick = startDailyQuest;
  app.querySelectorAll("[data-go]").forEach(b => b.onclick = () => {
    const map = { learnMenu: () => packMenu("learn"), speakMenu: () => packMenu("speak"),
                  chatMenu: chatMenu, quizMenu: () => packMenu("quiz") };
    map[b.dataset.go]();
  });
}

/* ---------------- pack chooser (for free play) ---------------- */
function packMenu(mode) {
  const titles = { learn: "Pick words to learn 🗂️", speak: "Pick words to say 🎤", quiz: "Pick a quiz 🎯" };
  setHTML(h`
    <button class="back" id="back">← Back</button>
    <h1>${titles[mode]}</h1>
    <div class="tiles">
      ${WORD_PACKS.map(p => h`
        <button class="tile" data-pack="${p.id}">
          <span class="ic">${p.icon}</span><span class="t">${p.title}</span>
          <span class="d">${p.blurb}</span>
        </button>`).join("")}
    </div>`);
  document.getElementById("back").onclick = Home;
  app.querySelectorAll("[data-pack]").forEach(b => b.onclick = () => {
    const pack = WORD_PACKS.find(p => p.id === b.dataset.pack);
    if (mode === "learn") Learn(pack.words, Home, pack.title);
    if (mode === "speak") Speak(pack.words, Home, pack.title);
    if (mode === "quiz")  Quiz(pickRandom(pack.words, Math.min(6, pack.words.length)), Home, pack.title);
  });
}

function chatMenu() {
  setHTML(h`
    <button class="back" id="back">← Back</button>
    <h1>Talk to Pixel 💬</h1>
    <p class="sub">Pixel is your AI buddy. He talks out loud — you can tap an answer or say it with the mic.</p>
    <div class="tiles">
      ${CONVERSATIONS.map(c => h`
        <button class="tile" data-conv="${c.id}">
          <span class="ic">${c.icon}</span><span class="t">${c.title}</span>
          <span class="d">${c.blurb}</span>
        </button>`).join("")}
    </div>`);
  document.getElementById("back").onclick = Home;
  app.querySelectorAll("[data-conv]").forEach(b => b.onclick = () =>
    Chat(b.dataset.conv, Home));
}

/* ============================================================
   ACTIVITY 1 — LEARN (flashcards with sound + Dutch on tap)
   ============================================================ */
function Learn(words, onDone, title = "Learn Words") {
  let i = 0;
  function card() {
    const w = words[i];
    setHTML(h`
      <button class="back" id="back">← Back</button>
      <div class="dots">${words.map((_, k) =>
        `<span class="dot ${k < i ? "done" : k === i ? "active" : ""}"></span>`).join("")}</div>
      <h2 class="center">${title}</h2>
      <div class="card flash">
        <div class="icon">${w.icon}</div>
        <div class="word">${w.en}</div>
        <div class="nl" id="nl"></div>
        <div class="ex">"${w.ex}"</div>
        <div class="exNl" id="exNl"></div>
        <div class="row">
          <button class="btn cyan" id="say">🔊 Hear it</button>
          <button class="btn ghost" id="nlBtn">🇳🇱 Dutch</button>
        </div>
        <div class="row">
          <button class="btn good" id="next">${i === words.length - 1 ? "Finish ✅" : "Next →"}</button>
        </div>
      </div>
    `);
    State.markLearned(w.en);
    Speech.speak(w.en);                              // say the word on arrival

    document.getElementById("back").onclick = onDone;
    document.getElementById("say").onclick = () => Speech.speak(w.en + ". " + w.ex);
    document.getElementById("nlBtn").onclick = () => {
      document.getElementById("nl").textContent = "🇳🇱 " + w.nl;
      document.getElementById("exNl").textContent = w.exNl;
    };
    document.getElementById("next").onclick = () => {
      State.addXp(5);
      if (i < words.length - 1) { i++; card(); }
      else onDone();
    };
  }
  card();
}

/* ============================================================
   ACTIVITY 2 — SPEAK (say the word, mic listens, get a score)
   ============================================================ */
function Speak(words, onDone, title = "Say It") {
  let i = 0;
  function card() {
    const w = words[i];
    const targetPhrase = w.ex;        // practice the full example sentence
    setHTML(h`
      <button class="back" id="back">← Back</button>
      <div class="dots">${words.map((_, k) =>
        `<span class="dot ${k < i ? "done" : k === i ? "active" : ""}"></span>`).join("")}</div>
      <h2 class="center">${title}</h2>
      ${Speech.canListen ? "" : `<div class="warnbox">The microphone needs <b>Google Chrome</b>. You can still listen and repeat out loud!</div>`}
      <div class="card center">
        <div style="font-size:3rem">${w.icon}</div>
        <div class="word" style="font-size:2rem;font-weight:900;margin:10px 0">${w.en}</div>
        <p style="font-size:1.2rem;margin-bottom:6px">Say: <b>"${targetPhrase}"</b></p>
        <button class="nl-pill" id="nlBtn">🇳🇱 Dutch</button>
        <div id="nl" class="note"></div>

        <div class="mic-btn" id="mic">🎤</div>
        <div class="note">Tap the mic, then say it out loud</div>
        <div class="heard" id="heard"></div>
        <div class="scorebadge" id="score"></div>

        <div class="row">
          <button class="btn cyan" id="hear">🔊 Hear it first</button>
          <button class="btn good hidden" id="next">${i === words.length - 1 ? "Finish ✅" : "Next →"}</button>
        </div>
        <button class="btn ghost small" id="skip" style="margin-top:14px">Skip this one</button>
      </div>
    `);

    const mic = document.getElementById("mic");
    const heardEl = document.getElementById("heard");
    const scoreEl = document.getElementById("score");
    const nextBtn = document.getElementById("next");

    document.getElementById("back").onclick = onDone;
    document.getElementById("hear").onclick = () => Speech.speak(targetPhrase);
    document.getElementById("nlBtn").onclick = () =>
      document.getElementById("nl").textContent = "🇳🇱 " + w.exNl;
    document.getElementById("skip").onclick = goNext;
    nextBtn.onclick = goNext;

    function goNext() {
      Speech.stopSpeaking();
      if (i < words.length - 1) { i++; card(); } else onDone();
    }

    mic.onclick = () => {
      if (!Speech.canListen) { Speech.speak(targetPhrase); return; }
      scoreEl.textContent = ""; heardEl.textContent = "Listening...";
      mic.classList.add("listening");
      Speech.listen({
        onResult: (best, alts) => {
          heardEl.textContent = `You said: "${best}"`;
          const r = Score.rate(targetPhrase, alts);
          scoreEl.textContent = `${r.pct}% — ${r.msg}`;
          scoreEl.className = "scorebadge " + r.tier;
          if (r.pct >= 55) {
            State.addXp(10); State.addCoins(2);
            nextBtn.classList.remove("hidden");
            Speech.speak(r.pct >= 80 ? "Perfect!" : "Good job!");
          }
        },
        onError: (e) => {
          heardEl.textContent = e === "no-speech" ? "I didn't hear you — try again." :
            e === "not-allowed" ? "Please allow the microphone in your browser." : "Try again.";
        },
        onStart: () => {},
        onEnd:   () => mic.classList.remove("listening")
      });
    };
  }
  card();
}

/* ============================================================
   ACTIVITY 3 — CHAT with Pixel (speaks + listens, branching)
   ============================================================ */
function Chat(convId, onDone) {
  const conv = CONVERSATIONS.find(c => c.id === convId);
  let stepId = conv.start;
  const history = [];

  function render() {
    const step = conv.steps[stepId];
    setHTML(h`
      <button class="back" id="back">← Back</button>
      <h2 class="center">${conv.icon} ${conv.title}</h2>
      <div class="card">
        <div class="chat" id="chat">
          ${history.map(m => h`
            <div class="bubble ${m.who}">
              <div class="who">${m.who === "bot" ? "PIXEL 🤖" : "YOU"}</div>${m.text}
            </div>`).join("")}
          <div class="bubble bot">
            <div class="who">PIXEL 🤖</div>${step.bot}
            <div style="margin-top:8px">
              <button class="btn ghost small" id="repeat">🔊 Again</button>
              <button class="btn ghost small" id="botNl">🇳🇱</button>
              <span id="botNlText" class="note"></span>
            </div>
          </div>
        </div>
        <div class="options" id="opts">
          ${step.options.map((o, k) => h`
            <button class="opt" data-k="${k}">
              <span>💬 ${o.say}</span><span class="mini-nl">${o.nl}</span>
            </button>`).join("")}
        </div>
        ${Speech.canListen ? h`
          <div class="center" style="margin-top:14px">
            <button class="btn cyan" id="micBtn">🎤 Say your answer</button>
            <div class="heard" id="heard"></div>
          </div>` : ""}
      </div>
    `);

    Speech.speak(step.bot);   // Pixel talks out loud

    document.getElementById("back").onclick = () => { Speech.stopSpeaking(); onDone(); };
    document.getElementById("repeat").onclick = () => Speech.speak(step.bot);
    document.getElementById("botNl").onclick = () =>
      document.getElementById("botNlText").textContent = step.botNl;

    function choose(k) {
      const opt = step.options[k];
      history.push({ who: "bot", text: step.bot });
      history.push({ who: "me",  text: opt.say });
      State.addXp(8); State.addCoins(1);
      if (opt.next === "end") { finish(); } else { stepId = opt.next; render(); }
    }

    app.querySelectorAll(".opt").forEach(b => b.onclick = () => choose(+b.dataset.k));

    const micBtn = document.getElementById("micBtn");
    if (micBtn) micBtn.onclick = () => {
      const heardEl = document.getElementById("heard");
      heardEl.textContent = "Listening...";
      micBtn.textContent = "🔴 Listening...";
      Speech.listen({
        onResult: (best, alts) => {
          heardEl.textContent = `You said: "${best}"`;
          // match what he said to the closest option
          let bestK = 0, bestScore = -1;
          step.options.forEach((o, k) => {
            const r = Score.rate(o.say, alts);
            if (r.pct > bestScore) { bestScore = r.pct; bestK = k; }
          });
          if (bestScore >= 45) { State.addCoins(1); choose(bestK); }
          else heardEl.textContent = `Hmm, I didn't catch that. Try tapping an answer.`;
        },
        onError: () => { document.getElementById("heard").textContent = "Try again, or tap an answer."; },
        onEnd: () => { micBtn.textContent = "🎤 Say your answer"; }
      });
    };
  }

  function finish() {
    Speech.stopSpeaking();
    Celebrate({ title: "Great conversation!", emoji: "💬", xp: 15, onDone });
  }

  render();
}

/* ============================================================
   ACTIVITY 4 — QUIZ (multiple choice, English ↔ meaning)
   ============================================================ */
function Quiz(words, onDone, title = "Quiz") {
  let i = 0, correct = 0;
  const pool = WORD_PACKS.flatMap(p => p.words);

  function question() {
    const w = words[i];
    // build 3 wrong Dutch answers + the right one
    const wrongs = pickRandom(pool.filter(x => x.nl !== w.nl), 3).map(x => x.nl);
    const opts = pickRandom([w.nl, ...wrongs], 4);
    setHTML(h`
      <button class="back" id="back">← Back</button>
      <div class="dots">${words.map((_, k) =>
        `<span class="dot ${k < i ? "done" : k === i ? "active" : ""}"></span>`).join("")}</div>
      <h2 class="center">${title}</h2>
      <div class="card">
        <p class="center note">What does this word mean?</p>
        <div class="quiz-q">${w.icon} ${w.en}</div>
        <button class="nl-pill" id="hear" style="display:block;margin:0 auto 18px">🔊 Hear it</button>
        <div class="quiz-grid" id="grid">
          ${opts.map(o => `<button class="quiz-opt" data-v="${o}">${o}</button>`).join("")}
        </div>
      </div>
    `);
    Speech.speak(w.en);
    document.getElementById("back").onclick = onDone;
    document.getElementById("hear").onclick = () => Speech.speak(w.en);

    app.querySelectorAll(".quiz-opt").forEach(b => b.onclick = () => {
      app.querySelectorAll(".quiz-opt").forEach(x => x.disabled = true);
      if (b.dataset.v === w.nl) {
        b.classList.add("correct"); correct++; State.addXp(10); State.addCoins(2);
        Speech.speak("Correct!");
      } else {
        b.classList.add("wrong");
        app.querySelectorAll(".quiz-opt").forEach(x => { if (x.dataset.v === w.nl) x.classList.add("correct"); });
      }
      setTimeout(() => {
        if (i < words.length - 1) { i++; question(); }
        else Celebrate({ title: `You got ${correct}/${words.length}!`, emoji: "🎯", xp: 10, onDone });
      }, 1100);
    });
  }
  question();
}

/* ============================================================
   CELEBRATE — reward screen between activities
   ============================================================ */
function Celebrate({ title, emoji = "🎉", xp = 0, coins = 0, onDone }) {
  if (xp) State.addXp(xp);
  if (coins) State.addCoins(coins);
  setHTML(h`
    <div class="card celebrate">
      <div class="big">${emoji}</div>
      <h1>${title}</h1>
      <div class="reward">+${xp} XP${coins ? `  ·  +${coins} 🪙` : ""}</div>
      <button class="btn big good" id="cont">Continue →</button>
    </div>`);
  Speech.speak("Well done!");
  document.getElementById("cont").onclick = onDone;
}

/* ============================================================
   DAILY QUEST — chains the activities into one short session
   Learn 5 words → Say them → Chat with Pixel → Quiz → reward
   ============================================================ */
function startDailyQuest() {
  // rotate the pack by day so it varies
  const dayIndex = new Date().getDate() % WORD_PACKS.length;
  const pack = WORD_PACKS[dayIndex];
  const words = pickRandom(pack.words, 5);
  const conv = CONVERSATIONS[new Date().getDate() % CONVERSATIONS.length];

  const steps = [
    (done) => Learn(words, done, "Today: " + pack.title),
    (done) => Celebrate({ title: "Words learned!", emoji: "🗂️", xp: 5, onDone: done }),
    (done) => Speak(words, done, "Now say them!"),
    (done) => Chat(conv.id, done),
    (done) => Quiz(words, done, "Quick quiz"),
    (done) => { State.completeQuest(); State.addCoins(10);
                Celebrate({ title: "QUEST COMPLETE! 🔥", emoji: "🏆", xp: 25, coins: 10,
                  onDone: () => { Speech.speak("Quest complete! Amazing work!"); Home(); } }); }
  ];

  let s = 0;
  const run = () => { if (s < steps.length) steps[s++](run); };
  run();
}

/* ---------------- boot ---------------- */
window.addEventListener("DOMContentLoaded", Home);
