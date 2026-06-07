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
   To add a whole new topic: copy a { id, title, ... } block.
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
      { en: "weekend",     nl: "weekend",        icon: "🌅", ex: "Let's play all weekend!",           exNl: "Laten we het hele weekend spelen!" },
      { en: "favourite",   nl: "favoriet",       icon: "⭐", ex: "Fortnite is my favourite game.",     exNl: "Fortnite is mijn favoriete spel." }
    ]
  },
  {
    id: "battle",
    title: "Battle Moves",
    icon: "⚔️",
    blurb: "Action words for the middle of a fight.",
    words: [
      { en: "aim",         nl: "richten",        icon: "🎯", ex: "Aim at the enemy first.",           exNl: "Richt eerst op de vijand." },
      { en: "shoot",       nl: "schieten",       icon: "💥", ex: "Shoot before he builds!",           exNl: "Schiet voordat hij bouwt!" },
      { en: "jump",        nl: "springen",       icon: "🦘", ex: "Jump over that wall.",              exNl: "Spring over die muur." },
      { en: "run",         nl: "rennen",         icon: "🏃", ex: "Run to the safe zone!",             exNl: "Ren naar de veilige zone!" },
      { en: "hide",        nl: "verstoppen",     icon: "🫣", ex: "Let's hide in the bush.",           exNl: "Laten we ons in de struik verstoppen." },
      { en: "heal",        nl: "genezen",        icon: "🩹", ex: "I need to heal first.",             exNl: "Ik moet eerst genezen." },
      { en: "chest",       nl: "kist",           icon: "🧰", ex: "Open that chest for loot.",         exNl: "Open die kist voor buit." },
      { en: "shield",      nl: "schild",         icon: "🛡️", ex: "Pick up the shield potion.",        exNl: "Pak het schilddrankje op." },
      { en: "storm",       nl: "storm",          icon: "🌪️", ex: "Run, the storm is coming!",         exNl: "Ren, de storm komt eraan!" },
      { en: "eliminate",   nl: "uitschakelen",   icon: "❌", ex: "I eliminated two players.",          exNl: "Ik heb twee spelers uitgeschakeld." },
      { en: "revive",      nl: "redden",         icon: "🙌", ex: "Stay there, I will revive you.",    exNl: "Blijf daar, ik kom je redden." },
      { en: "emote",       nl: "dansje",         icon: "🕺", ex: "Do your emote after the win.",      exNl: "Doe je dansje na de winst." }
    ]
  },
  {
    id: "feelings",
    title: "Feelings",
    icon: "😀",
    blurb: "Say how you feel in English.",
    words: [
      { en: "happy",       nl: "blij",           icon: "😄", ex: "I am happy we won.",                exNl: "Ik ben blij dat we wonnen." },
      { en: "sad",         nl: "verdrietig",     icon: "😢", ex: "I feel sad when I lose.",           exNl: "Ik voel me verdrietig als ik verlies." },
      { en: "angry",       nl: "boos",           icon: "😠", ex: "Don't be angry, it's just a game.", exNl: "Wees niet boos, het is maar een spel." },
      { en: "scared",      nl: "bang",           icon: "😨", ex: "I was scared of the boss.",         exNl: "Ik was bang voor de baas." },
      { en: "excited",     nl: "enthousiast",    icon: "🤩", ex: "I am excited for the new update.",  exNl: "Ik ben enthousiast over de nieuwe update." },
      { en: "bored",       nl: "verveeld",       icon: "😑", ex: "I am bored, let's play something.",  exNl: "Ik verveel me, laten we iets spelen." },
      { en: "proud",       nl: "trots",          icon: "😎", ex: "I am proud of my score.",           exNl: "Ik ben trots op mijn score." },
      { en: "nervous",     nl: "zenuwachtig",    icon: "😬", ex: "I am nervous before the final.",    exNl: "Ik ben zenuwachtig voor de finale." },
      { en: "calm",        nl: "rustig",         icon: "😌", ex: "Stay calm and keep building.",      exNl: "Blijf rustig en blijf bouwen." },
      { en: "surprised",   nl: "verrast",        icon: "😮", ex: "I was surprised by the win.",       exNl: "Ik was verrast door de winst." },
      { en: "confused",    nl: "in de war",      icon: "🤔", ex: "I am confused, what do I do?",      exNl: "Ik ben in de war, wat moet ik doen?" }
    ]
  },
  {
    id: "school",
    title: "School & Time",
    icon: "🏫",
    blurb: "Words for school and the day.",
    words: [
      { en: "teacher",     nl: "leraar",         icon: "👩‍🏫", ex: "My teacher is very nice.",          exNl: "Mijn leraar is heel aardig." },
      { en: "lesson",      nl: "les",            icon: "📖", ex: "The lesson was easy today.",        exNl: "De les was makkelijk vandaag." },
      { en: "exam",        nl: "toets",          icon: "📝", ex: "I have an exam tomorrow.",          exNl: "Ik heb morgen een toets." },
      { en: "break",       nl: "pauze",          icon: "⏸️", ex: "Let's take a short break.",         exNl: "Laten we een korte pauze nemen." },
      { en: "question",    nl: "vraag",          icon: "❓", ex: "Can I ask a question?",             exNl: "Mag ik een vraag stellen?" },
      { en: "answer",      nl: "antwoord",       icon: "✅", ex: "I know the answer!",                exNl: "Ik weet het antwoord!" },
      { en: "learn",       nl: "leren",          icon: "🧠", ex: "I want to learn English.",          exNl: "Ik wil Engels leren." },
      { en: "morning",     nl: "ochtend",        icon: "🌄", ex: "School starts in the morning.",     exNl: "School begint in de ochtend." },
      { en: "afternoon",   nl: "middag",         icon: "🌤️", ex: "I play games in the afternoon.",    exNl: "Ik speel spelletjes in de middag." },
      { en: "week",        nl: "week",           icon: "📆", ex: "I practice every week.",            exNl: "Ik oefen elke week." },
      { en: "late",        nl: "laat",           icon: "⏰", ex: "Don't be late for class.",          exNl: "Kom niet te laat voor de les." }
    ]
  },
  {
    id: "food",
    title: "Food & Drink",
    icon: "🍕",
    blurb: "Order food and talk about meals.",
    words: [
      { en: "breakfast",   nl: "ontbijt",        icon: "🥣", ex: "I eat breakfast at seven.",         exNl: "Ik eet om zeven uur ontbijt." },
      { en: "lunch",       nl: "lunch",          icon: "🥪", ex: "What do you want for lunch?",       exNl: "Wat wil je als lunch?" },
      { en: "dinner",      nl: "avondeten",      icon: "🍽️", ex: "Dinner is almost ready.",           exNl: "Het avondeten is bijna klaar." },
      { en: "water",       nl: "water",          icon: "💧", ex: "Can I have some water?",            exNl: "Mag ik wat water?" },
      { en: "snack",       nl: "snack",          icon: "🍪", ex: "Let's get a snack.",                exNl: "Laten we een snack halen." },
      { en: "juice",       nl: "sap",            icon: "🧃", ex: "I like orange juice.",              exNl: "Ik hou van sinaasappelsap." },
      { en: "chicken",     nl: "kip",            icon: "🍗", ex: "I want chicken and rice.",          exNl: "Ik wil kip met rijst." },
      { en: "rice",        nl: "rijst",          icon: "🍚", ex: "There is rice on my plate.",        exNl: "Er ligt rijst op mijn bord." },
      { en: "thirsty",     nl: "dorst",          icon: "🥤", ex: "I am thirsty, I need a drink.",     exNl: "Ik heb dorst, ik wil iets drinken." },
      { en: "delicious",   nl: "heerlijk",       icon: "😋", ex: "This pizza is delicious!",          exNl: "Deze pizza is heerlijk!" },
      { en: "order",       nl: "bestellen",      icon: "🧾", ex: "Let's order some food.",            exNl: "Laten we wat eten bestellen." }
    ]
  },
  {
    id: "describe",
    title: "Describing Words",
    icon: "🔤",
    blurb: "Words to describe almost anything.",
    words: [
      { en: "big",         nl: "groot",          icon: "🔵", ex: "That is a big house.",              exNl: "Dat is een groot huis." },
      { en: "small",       nl: "klein",          icon: "🔹", ex: "He has a small backpack.",          exNl: "Hij heeft een kleine rugzak." },
      { en: "fast",        nl: "snel",           icon: "⚡", ex: "You are very fast!",                exNl: "Je bent heel snel!" },
      { en: "slow",        nl: "langzaam",       icon: "🐌", ex: "My internet is slow today.",        exNl: "Mijn internet is langzaam vandaag." },
      { en: "strong",      nl: "sterk",          icon: "💪", ex: "This weapon is strong.",            exNl: "Dit wapen is sterk." },
      { en: "easy",        nl: "makkelijk",      icon: "🟢", ex: "That level was easy.",              exNl: "Dat level was makkelijk." },
      { en: "hard",        nl: "moeilijk",       icon: "🔴", ex: "This boss is too hard.",            exNl: "Deze baas is te moeilijk." },
      { en: "new",         nl: "nieuw",          icon: "🆕", ex: "I got a new skin.",                 exNl: "Ik heb een nieuwe skin." },
      { en: "old",         nl: "oud",            icon: "📦", ex: "My laptop is old.",                 exNl: "Mijn laptop is oud." },
      { en: "cool",        nl: "gaaf",           icon: "🆒", ex: "That move was so cool!",            exNl: "Die move was zo gaaf!" },
      { en: "awesome",     nl: "geweldig",       icon: "🌟", ex: "You are an awesome player.",        exNl: "Je bent een geweldige speler." },
      { en: "boring",      nl: "saai",           icon: "🥱", ex: "This game is a bit boring.",        exNl: "Dit spel is een beetje saai." }
    ]
  },
  {
    id: "dubai",
    title: "Out & About",
    icon: "🏙️",
    blurb: "Words for places around Dubai.",
    words: [
      { en: "mall",        nl: "winkelcentrum",  icon: "🛍️", ex: "Let's go to the mall.",             exNl: "Laten we naar het winkelcentrum gaan." },
      { en: "beach",       nl: "strand",         icon: "🏖️", ex: "The beach is really nice.",         exNl: "Het strand is echt mooi." },
      { en: "pool",        nl: "zwembad",        icon: "🏊", ex: "Let's swim in the pool.",           exNl: "Laten we in het zwembad zwemmen." },
      { en: "desert",      nl: "woestijn",       icon: "🏜️", ex: "The desert is very hot.",           exNl: "De woestijn is erg heet." },
      { en: "taxi",        nl: "taxi",           icon: "🚕", ex: "We can take a taxi.",               exNl: "We kunnen een taxi nemen." },
      { en: "restaurant",  nl: "restaurant",     icon: "🍴", ex: "I like that restaurant.",           exNl: "Ik vind dat restaurant leuk." },
      { en: "shop",        nl: "winkel",         icon: "🏬", ex: "The shop is open now.",             exNl: "De winkel is nu open." },
      { en: "hot",         nl: "heet",           icon: "🥵", ex: "It is very hot outside.",           exNl: "Het is erg heet buiten." },
      { en: "building",    nl: "gebouw",         icon: "🏢", ex: "That building is so tall.",         exNl: "Dat gebouw is zo hoog." },
      { en: "park",        nl: "park",           icon: "🌳", ex: "Let's walk in the park.",           exNl: "Laten we in het park wandelen." },
      { en: "busy",        nl: "druk",           icon: "🚦", ex: "The road is very busy.",            exNl: "De weg is erg druk." }
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
  },
  {
    id: "plans",
    title: "Plan a game tonight",
    icon: "🗓️",
    blurb: "Make plans to play with a friend.",
    start: "s1",
    steps: {
      s1: {
        bot: "Hey! Do you want to play Fortnite tonight?",
        botNl: "Hoi! Wil je vanavond Fortnite spelen?",
        options: [
          { say: "Yes, let's play!",        nl: "Ja, laten we spelen!",        next: "time" },
          { say: "Sorry, I can't tonight.", nl: "Sorry, ik kan vanavond niet.", next: "later" }
        ]
      },
      time: {
        bot: "Great! What time is good for you?",
        botNl: "Top! Hoe laat komt jou goed uit?",
        options: [
          { say: "After dinner.",       nl: "Na het avondeten.",        next: "dur" },
          { say: "At eight o'clock.",   nl: "Om acht uur.",             next: "dur" }
        ]
      },
      dur: {
        bot: "Nice. How long can you play?",
        botNl: "Mooi. Hoe lang kun je spelen?",
        options: [
          { say: "About one hour.",     nl: "Ongeveer een uur.",        next: "bye" },
          { say: "Maybe two games.",    nl: "Misschien twee potjes.",   next: "bye" }
        ]
      },
      later: {
        bot: "No problem! Maybe tomorrow then?",
        botNl: "Geen probleem! Misschien morgen dan?",
        options: [
          { say: "Yes, tomorrow is better.", nl: "Ja, morgen is beter.", next: "bye" }
        ]
      },
      bye: {
        bot: "Awesome, see you online!",
        botNl: "Geweldig, tot online!",
        options: [
          { say: "See you! Bye!",       nl: "Tot dan! Doei!",           next: "end" }
        ]
      }
    }
  },
  {
    id: "food",
    title: "Order food",
    icon: "🍔",
    blurb: "Pixel is the waiter. Order a meal!",
    start: "s1",
    steps: {
      s1: {
        bot: "Hi! Welcome. What would you like to eat?",
        botNl: "Hoi! Welkom. Wat wil je graag eten?",
        options: [
          { say: "Can I have a pizza, please?",   nl: "Mag ik een pizza, alstublieft?",  next: "drink" },
          { say: "I would like chicken and rice.", nl: "Ik wil graag kip met rijst.",     next: "drink" }
        ]
      },
      drink: {
        bot: "Good choice! And what would you like to drink?",
        botNl: "Goede keuze! En wat wil je drinken?",
        options: [
          { say: "A glass of water, please.", nl: "Een glas water, alstublieft.", next: "more" },
          { say: "Can I get a juice?",        nl: "Mag ik een sap?",              next: "more" }
        ]
      },
      more: {
        bot: "Sure! Anything else?",
        botNl: "Zeker! Nog iets anders?",
        options: [
          { say: "No, thank you. That's all.", nl: "Nee, dank je. Dat is alles.", next: "bye" }
        ]
      },
      bye: {
        bot: "Great! Your food is coming soon.",
        botNl: "Top! Je eten komt er zo aan.",
        options: [
          { say: "Thank you very much!", nl: "Heel erg bedankt!",       next: "end" }
        ]
      }
    }
  },
  {
    id: "day",
    title: "How was your day?",
    icon: "🌤️",
    blurb: "Chat about school and how you feel.",
    start: "s1",
    steps: {
      s1: {
        bot: "Hey Senna! How was school today?",
        botNl: "Hoi Senna! Hoe was school vandaag?",
        options: [
          { say: "It was good.",        nl: "Het was goed.",            next: "what" },
          { say: "It was boring.",      nl: "Het was saai.",            next: "what" }
        ]
      },
      what: {
        bot: "Okay! What did you do?",
        botNl: "Oké! Wat heb je gedaan?",
        options: [
          { say: "We had a maths lesson.", nl: "We hadden een wiskundeles.", next: "feel" },
          { say: "I had an exam.",         nl: "Ik had een toets.",          next: "feel" }
        ]
      },
      feel: {
        bot: "How do you feel now?",
        botNl: "Hoe voel je je nu?",
        options: [
          { say: "I am happy it's over.", nl: "Ik ben blij dat het voorbij is.", next: "bye" },
          { say: "I am a bit tired.",     nl: "Ik ben een beetje moe.",          next: "bye" }
        ]
      },
      bye: {
        bot: "Take a break and relax. You did great!",
        botNl: "Neem pauze en ontspan. Je hebt het goed gedaan!",
        options: [
          { say: "Thanks, Pixel!",      nl: "Bedankt, Pixel!",          next: "end" }
        ]
      }
    }
  },
  {
    id: "teammate",
    title: "Meet a teammate",
    icon: "🤝",
    blurb: "Say hi to a new player on your team.",
    start: "s1",
    steps: {
      s1: {
        bot: "Hi! I'm your new teammate. What's your name?",
        botNl: "Hoi! Ik ben je nieuwe teamgenoot. Hoe heet je?",
        options: [
          { say: "I'm Senna. Nice to meet you!", nl: "Ik ben Senna. Leuk je te ontmoeten!", next: "good" }
        ]
      },
      good: {
        bot: "Nice to meet you too! Are you good at building?",
        botNl: "Leuk jou ook te ontmoeten! Ben je goed in bouwen?",
        options: [
          { say: "Yes, I'm a good builder.",     nl: "Ja, ik ben een goede bouwer.",  next: "plan" },
          { say: "No, but I'm a good shooter.",  nl: "Nee, maar ik ben een goede schutter.", next: "plan" }
        ]
      },
      plan: {
        bot: "Let's work together. Where should we land?",
        botNl: "Laten we samenwerken. Waar zullen we landen?",
        options: [
          { say: "Let's land at the city.",  nl: "Laten we in de stad landen.", next: "bye" },
          { say: "Let's go to the forest.",  nl: "Laten we naar het bos gaan.", next: "bye" }
        ]
      },
      bye: {
        bot: "Perfect. Let's get the win!",
        botNl: "Perfect. Laten we winnen!",
        options: [
          { say: "Let's go!",           nl: "Kom op!",                  next: "end" }
        ]
      }
    }
  }
];
