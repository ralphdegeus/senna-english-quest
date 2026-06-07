# 🎮 Senna's English Quest

A small, fun web app to help Senna build **English vocabulary** and **pronunciation** — built around gaming, streamers and YouTube, with light points-and-streaks for motivation.

100% free. No accounts, no monthly cost, no internet login required. Works best in **Google Chrome**.

---

## ▶️ How to start it (the easy way)

1. Double-click **`Start Senna's English.command`**.
2. A black Terminal window opens (that's normal) and Chrome opens the app.
3. The first time Senna taps the 🎤 microphone, Chrome asks for mic permission — click **Allow**.
4. When he's done, just close the black Terminal window.

> The little local server is only there so the microphone is allowed to work. Nothing is sent over the internet — everything runs on your Mac.

If double-click doesn't work, open Terminal in this folder and run:
```
python3 -m http.server 8000
```
then go to **http://localhost:8000** in Chrome.

---

## 🎯 What Senna does each day

Tap **"Start Today's Quest"** — it walks him through one short session (~10–15 min):

1. **Learn Words** – flashcards with sound 🔊 and a 🇳🇱 Dutch button when he's stuck.
2. **Say It** – he says the sentence into the mic and gets a friendly score.
3. **Talk to Pixel** – a chat with his AI buddy Pixel, who *talks out loud*. Senna can tap an answer or speak it.
4. **Quiz** – quick multiple-choice review.
5. **🏆 Quest Complete** – XP, coins, and his daily 🔥 streak goes up.

He can also use **Free Play** to repeat any part. To fill a full hour, just do the quest, then free-play the parts he likes (great for short attention spans — each piece is bite-sized).

The app **remembers his level, streak and coins** in the browser between days.

---

## ✏️ How to add more words (no coding needed)

Open **`js/data/content.js`** in any text editor. Copy one line, change the values:

```js
{ en: "win", nl: "winnen", icon: "🏆", ex: "We can win this match!", exNl: "We kunnen deze match winnen!" },
```

- `en` = English word
- `nl` = Dutch translation (the hint button)
- `icon` = any emoji
- `ex` = example sentence in English
- `exNl` = the Dutch version of that sentence

Save, refresh the page. Done. You can add whole new topic packs the same way.

To add a new **conversation** with Pixel, scroll to the `CONVERSATIONS` section in the same file — each one is a simple "Pixel says X → Senna can reply A or B" tree.

---

## 💡 Tips for getting the level right

- It's set for "understands a lot but behind peers". If it feels **too easy**, add longer sentences; **too hard**, shorten the `ex` sentences.
- The mic scoring is **forgiving on purpose** — the goal is confidence, not perfection.
- Aim for the daily quest + a bit of free play. A 🔥 streak is the strongest motivator, so try not to miss weekdays.

---

## 🚀 Want a *smarter* AI buddy later?

Right now Pixel uses friendly scripted conversations (free). If you ever want Pixel to chat about *anything* Senna types or says — a real AI brain — that's a small upgrade: add an API key and swap one function. Just ask and I'll wire it up.

---

## 🛠️ What's inside (for the curious)

```
index.html              the page
css/styles.css          the look
js/speech.js            free browser voice + microphone + scoring
js/app.js               the game logic and screens
js/data/content.js      ← the words & conversations you edit
```

Built to be simple on purpose, so it's easy to grow with Senna.
