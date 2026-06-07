/* ============================================================
   CONTENT — words, sentences and conversations for Senna
   ------------------------------------------------------------
   This is the file Ralph (or anyone) edits to add more words.
   Every word has:
     en   = English word
     nl   = Dutch translation (the "Dutch on tap" hint)
     icon = an emoji shown on the card (no image files needed)
     ex   = an example sentence in simple English
     exNl = the Dutch translation of that sentence
   To add a word: copy a line, change the values, done.
   ============================================================ */

const WORD_PACKS = [
  {
    id: "gaming",
    title: "Gaming Words",
    icon: "🎮",
    blurb: "The words you see every time you play.",
    words: [
      { en: "win",        nl: "winnen",         icon: "🏆", ex: "We can win this match!",            exNl: "We kunnen deze match winnen!" },
      { en: "lose",       nl: "verliezen",      icon: "💀", ex: "I don't want to lose again.",        exNl: "Ik wil niet weer verliezen." },
      { en: "team",       nl: "team",           icon: "👥", ex: "My team is really good today.",      exNl: "Mijn team is vandaag erg goed." },
      { en: "weapon",     nl: "wapen",          icon: "🔫", ex: "Pick up that weapon!",               exNl: "Pak dat wapen op!" },
      { en: "build",      nl: "bouwen",         icon: "🧱", ex: "I will build a wall here.",          exNl: "Ik ga hier een muur bouwen." },
      { en: "loot",       nl: "buit",           icon: "💰", ex: "There is good loot in that house.",  exNl: "Er is goede buit in dat huis." },
      { en: "health",     nl: "gezondheid",     icon: "❤️", ex: "My health is low, I need a potion.", exNl: "Mijn gezondheid is laag, ik heb een drankje nodig." },
      { en: "map",        nl: "kaart",          icon: "🗺️", ex: "Look at the map to find them.",      exNl: "Kijk op de kaart om ze te vinden." },
      { en: "upgrade",    nl: "verbeteren",     icon: "⬆️", ex: "I want to upgrade my gun.",          exNl: "Ik wil mijn wapen verbeteren." },
      { en: "victory",    nl: "overwinning",    icon: "🥇", ex: "Victory! We did it!",                exNl: "Overwinning! We hebben het gedaan!" },
      { en: "squad",      nl: "groep",          icon: "🛡️", ex: "Stay close to the squad.",           exNl: "Blijf dicht bij de groep." },
      { en: "respawn",    nl: "herleven",       icon: "🔁", ex: "Wait for me to respawn.",            exNl: "Wacht tot ik herleef." }
    ]
  },
  {
    id: "streamers",
    title: "Streamers & YouTube",
    icon: "📺",
    blurb: "The words your favourite streamers use.",
    words: [
      { en: "subscribe",  nl: "abonneren",      icon: "🔔", ex: "Don't forget to subscribe!",         exNl: "Vergeet niet te abonneren!" },
      { en: "channel",    nl: "kanaal",         icon: "📡", ex: "His channel is really funny.",        exNl: "Zijn kanaal is echt grappig." },
      { en: "stream",     nl: "uitzending",     icon: "🎥", ex: "The stream starts at eight.",         exNl: "De uitzending begint om acht uur." },
      { en: "viewer",     nl: "kijker",         icon: "👀", ex: "He has a lot of viewers tonight.",    exNl: "Hij heeft vanavond veel kijkers." },
      { en: "comment",    nl: "reactie",        icon: "💬", ex: "I left a comment on the video.",      exNl: "Ik heb een reactie achtergelaten bij de video." },
      { en: "upload",     nl: "uploaden",       icon: "⬆️", ex: "She will upload a new video soon.",   exNl: "Ze gaat binnenkort een nieuwe video uploaden." },
      { en: "clip",       nl: "fragment",       icon: "✂️", ex: "That clip was so funny.",             exNl: "Dat fragment was zo grappig." },
      { en: "follower",   nl: "volger",         icon: "➕", ex: "He got a thousand new followers.",    exNl: "Hij kreeg duizend nieuwe volgers." },
      { en: "live",       nl: "live",           icon: "🔴", ex: "She is live right now.",              exNl: "Ze is nu live." },
      { en: "react",      nl: "reageren",       icon: "😮", ex: "Let's react to this video.",          exNl: "Laten we op deze video reageren." },
      { en: "edit",       nl: "bewerken",       icon: "🖥️", ex: "He edits his videos himself.",        exNl: "Hij bewerkt zijn video's zelf." },
      { en: "gameplay",   nl: "gameplay",       icon: "🕹️", ex: "The gameplay looks amazing.",         exNl: "De gameplay ziet er geweldig uit." }
    ]
  },
  {
    id: "online",
    title: "Talking Online",
    icon: "🎧",
    blurb: "Things you say to friends while playing.",
    words: [
      { en: "good game",   nl: "goed gespeeld",   icon: "🤝", ex: "Good game, that was close!",        exNl: "Goed gespeeld, dat was spannend!" },
      { en: "nice shot",   nl: "mooi schot",      icon: "🎯", ex: "Nice shot, how did you do that?",   exNl: "Mooi schot, hoe deed je dat?" },
      { en: "let's go",    nl: "kom op",          icon: "🚀", ex: "Let's go, we can win!",              exNl: "Kom op, we kunnen winnen!" },
      { en: "behind you",  nl: "achter je",       icon: "↩️", ex: "Behind you, turn around!",          exNl: "Achter je, draai je om!" },
      { en: "I'm low",     nl: "ik ben bijna dood", icon: "🩹", ex: "I'm low, I need help.",            exNl: "Ik ben bijna dood, ik heb hulp nodig." },
      { en: "cover me",    nl: "dek me",          icon: "🛡️", ex: "Cover me while I heal.",            exNl: "Dek me terwijl ik genees." },
      { en: "my bad",      nl: "mijn fout",       icon: "🙈", ex: "My bad, that was my mistake.",      exNl: "Mijn fout, dat was mijn fout." },
      { en: "wait for me", nl: "wacht op mij",    icon: "⏳", ex: "Wait for me, I'm coming!",           exNl: "Wacht op mij, ik kom eraan!" },
      { en: "watch out",   nl: "pas op",          icon: "⚠️", ex: "Watch out, enemy on the left!",     exNl: "Pas op, vijand aan de linkerkant!" },
      { en: "good job",    nl: "goed gedaan",     icon: "👏", ex: "Good job, you carried the team!",   exNl: "Goed gedaan, je droeg het team!" }
    ]
  },
  {
    id: "everyday",
    title: "Everyday English",
    icon: "🌍",
    blurb: "Useful words for school and Dubai life.",
    words: [
      { en: "tired",       nl: "moe",            icon: "😴", ex: "I am tired after school.",          exNl: "Ik ben moe na school." },
      { en: "hungry",      nl: "honger",         icon: "🍔", ex: "I am hungry, let's get food.",      exNl: "Ik heb honger, laten we eten halen." },
      { en: "tomorrow",    nl: "morgen",         icon: "📅", ex: "I will see you tomorrow.",          exNl: "Ik zie je morgen." },
      { en: "homework",    nl: "huiswerk",       icon: "📚", ex: "I finished my homework already.",   exNl: "Ik heb mijn huiswerk al af." },
      { en: "weather",     nl: "weer",           icon: "☀️", ex: "The weather is hot today.",         exNl: "Het weer is warm vandaag." },
      { en: "friend",      nl: "vriend",         icon: "🧑‍🤝‍🧑", ex: "He is my best friend.",          exNl: "Hij is mijn beste vriend." },
      { en: "money",       nl: "geld",           icon: "💵", ex: "How much money is that?",           exNl: "Hoeveel geld is dat?" },
      { en: "buy",         nl: "kopen",          icon: "🛒", ex: "I want to buy a new game.",         exNl: "Ik wil een nieuw spel kopen." },
      { en: "tomorrow",    nl: "morgen",         icon: "🌅", ex: "Let's play again tomorrow.",        exNl: "Laten we morgen weer spelen." },
      { en: "favourite",   nl: "favoriet",       icon: "⭐", ex: "Fortnite is my favourite game.",     exNl: "Fortnite is mijn favoriete spel." }
    ]
  }
];

/* ============================================================
   CONVERSATIONS — the AI buddy "Pixel" talks with Senna.
   Each step:
     bot      = what Pixel says (also spoken out loud)
     botNl    = Dutch hint for that line
     options  = things Senna can say back. He can TAP one, or
                SPEAK it out loud (the app listens with the mic).
     each option has: say (English), nl (Dutch hint), next (step id)
   Set next to "end" to finish the chat.
   ============================================================ */

const CONVERSATIONS = [
  {
    id: "match",
    title: "Talk about your match",
    icon: "🎮",
    blurb: "Tell Pixel how your last game went.",
    start: "s1",
    steps: {
      s1: {
        bot: "Hey Senna! Did you win your last match?",
        botNl: "Hoi Senna! Heb je je laatste match gewonnen?",
        options: [
          { say: "Yes, we won!",        nl: "Ja, we hebben gewonnen!",  next: "win" },
          { say: "No, we lost.",        nl: "Nee, we hebben verloren.", next: "lose" }
        ]
      },
      win: {
        bot: "Nice! How many players did you beat?",
        botNl: "Mooi! Hoeveel spelers heb je verslagen?",
        options: [
          { say: "I got five kills.",   nl: "Ik had vijf kills.",       next: "good" },
          { say: "My team helped me.",  nl: "Mijn team hielp mij.",     next: "good" }
        ]
      },
      lose: {
        bot: "That's okay, it happens. Was it a close game?",
        botNl: "Dat is oké, dat gebeurt. Was het spannend?",
        options: [
          { say: "Yes, it was close.",  nl: "Ja, het was spannend.",    next: "good" },
          { say: "No, we were bad.",    nl: "Nee, we waren slecht.",    next: "good" }
        ]
      },
      good: {
        bot: "Cool! What weapon do you like the most?",
        botNl: "Cool! Welk wapen vind je het leukst?",
        options: [
          { say: "I like the sniper.",  nl: "Ik vind de sniper leuk.",  next: "bye" },
          { say: "I like to build.",    nl: "Ik bouw graag.",           next: "bye" }
        ]
      },
      bye: {
        bot: "Awesome. Great talking with you. Let's play again soon!",
        botNl: "Geweldig. Leuk om met je te praten. Tot snel!",
        options: [
          { say: "See you later!",      nl: "Tot later!",               next: "end" }
        ]
      }
    }
  },
  {
    id: "intro",
    title: "Introduce yourself",
    icon: "👋",
    blurb: "Practice saying who you are.",
    start: "s1",
    steps: {
      s1: {
        bot: "Hi there! I'm Pixel. What's your name?",
        botNl: "Hoi! Ik ben Pixel. Hoe heet je?",
        options: [
          { say: "My name is Senna.",   nl: "Ik heet Senna.",           next: "age" }
        ]
      },
      age: {
        bot: "Nice to meet you, Senna! How old are you?",
        botNl: "Leuk je te ontmoeten, Senna! Hoe oud ben je?",
        options: [
          { say: "I am fourteen.",      nl: "Ik ben veertien.",         next: "where" }
        ]
      },
      where: {
        bot: "Cool! Where do you live?",
        botNl: "Cool! Waar woon je?",
        options: [
          { say: "I live in Dubai.",    nl: "Ik woon in Dubai.",        next: "hobby" }
        ]
      },
      hobby: {
        bot: "Dubai is awesome! What do you like to do?",
        botNl: "Dubai is geweldig! Wat doe je graag?",
        options: [
          { say: "I like playing Fortnite.", nl: "Ik speel graag Fortnite.", next: "bye" }
        ]
      },
      bye: {
        bot: "Same here! It was great to meet you, Senna!",
        botNl: "Ik ook! Het was leuk je te ontmoeten, Senna!",
        options: [
          { say: "Thank you, bye!",     nl: "Dankjewel, doei!",         next: "end" }
        ]
      }
    }
  }
];
