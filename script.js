// MindSpace Kenya: interactive breathing guide, story player, language toggle, and knowledge checks.
const stories = [
  {
    title: {
      en: "Form 4 Mock Exam Pressure",
      sheng: "Pressure ya mock za Form 4",
    },
    author: {
      en: "Anonymous student, 17 · Kiambu County",
      sheng: "Chali wa siri, 17 · Kaunti ya Kiambu",
    },
    transcript: {
      en: "I felt the pressure of my Form Four mock exams building up, and I could not sleep well. When I spoke with the school counselor, I felt some relief.",
      sheng: "Nilikuwa nafeel pressure ya mock za Form Four ikinilemea, mpaka usingizi ikapotea. Nilipobonga na counselor wa shule, nilipata nafuu.",
    },
    length: 16,
    questions: [
      {
        statement: {
          en: "“A low mock exam score means your future is over.”",
          sheng: "“Kupata marks za chini kwa mock inamaanisha future yako imeisha.”",
        },
        truth: false,
        explanation: {
          en: "Mocks are practice, not the end of your journey. A teacher or counselor can help you find new ways to revise without judging yourself.",
          sheng: "Mock ni practice, sio mwisho wa safari yako. Mwalimu ama counselor anaweza kukusaidia kupata njia mpya za kusoma bila kujihukumu.",
        },
        tip: {
          en: "One result does not define your whole life.",
          sheng: "Result moja haiamui maisha yako yote.",
        },
      },
      {
        statement: {
          en: "“Talking to someone you trust can help when exam stress affects your sleep.”",
          sheng: "“Kubonga na mtu unamtrust kunaweza kusaidia exam stress ikikunyima usingizi.”",
        },
        truth: true,
        explanation: {
          en: "Many students have sleepless nights around exams. Sharing what is worrying you can make it feel more manageable.",
          sheng: "Wanafunzi wengi hukosa usingizi wakati wa exams. Ukishare kinachokusumbua, inaweza kuwa rahisi kukihandle.",
        },
        tip: {
          en: "You do not have to carry the stress alone.",
          sheng: "Si lazima ubebe stress peke yako.",
        },
      },
    ],
  },
  {
    title: {
      en: "Missing My Best Friend at Boarding School",
      sheng: "Kukosa beshte nikiwa boarding",
    },
    author: {
      en: "Form 2 student · Nakuru County",
      sheng: "Dem wa Form 2 · Kaunti ya Nakuru",
    },
    transcript: {
      en: "Boarding school was making me feel lonely. When I spoke with a teacher I trusted, I realized I was not alone.",
      sheng: "Maisha ya shule ya boarding ilikuwa inanifanya nijifeel mpweke. Nilipobonga na mwalimu niliyemtrust, nikarealize siko solo.",
    },
    length: 14,
    questions: [
      {
        statement: {
          en: "“Feeling lonely at boarding school means you are weak.”",
          sheng: "“Kujifeel mpweke boarding inamaanisha uko weak.”",
        },
        truth: false,
        explanation: {
          en: "Loneliness is a real feeling many students experience. Naming it and reaching out to a trusted friend or teacher takes courage.",
          sheng: "Upweke ni feeling ya ukweli ambayo wanafunzi wengi hupitia. Kuikubali na kubonga na beshte ama mwalimu unamtrust ni ujasiri.",
        },
        tip: {
          en: "Be as kind to yourself as you would be to a friend.",
          sheng: "Jipe kindness vile ungepea beshte yako.",
        },
      },
      {
        statement: {
          en: "“Having a trusted adult at school can help you feel safer.”",
          sheng: "“Kuwa na mtu mzima unamtrust shuleni kunaweza kukufanya ujihisi safe.”",
        },
        truth: true,
        explanation: {
          en: "A trusted adult can listen and help you work through challenges at school or in the dorms.",
          sheng: "Mtu mzima unamtrust anaweza kukuskiza na kukusaidia kupita challenges za shule ama dorm.",
        },
        tip: {
          en: "Every student deserves someone who listens with respect.",
          sheng: "Kila mwanafunzi anafaa kuwa na mtu wa kumsikiza na kumheshimu.",
        },
      },
    ],
  },
  {
    title: {
      en: "Breaking the Silence with My Parent",
      sheng: "Kuvunja ukimya na mzazi wangu",
    },
    author: {
      en: "Form 3 student · Nairobi County",
      sheng: "Kijana wa Form 3 · Kaunti ya Nairobi",
    },
    transcript: {
      en: "I thought my parent would be angry if I told them I was going through a hard time. But they listened kindly, then helped me find support.",
      sheng: "Nilidhani mzazi wangu angenikasirikia nikimwambia napitia tough time. Lakini aliskiza kwa upole, kisha akanisaidia kutafuta support.",
    },
    length: 15,
    questions: [
      {
        statement: {
          en: "“No parent can understand what a young person is going through.”",
          sheng: "“Hakuna mzazi anaweza kuelewa venye kijana anafeel.”",
        },
        truth: false,
        explanation: {
          en: "It can feel awkward to start the conversation, but many parents care deeply and want to understand what their child is feeling.",
          sheng: "Kuanzisha convo inaweza kuwa awkward, lakini wazazi wengi wanajali na wanataka kuelewa venye mtoto wao anafeel.",
        },
        tip: {
          en: "You can begin with one small, honest sentence.",
          sheng: "Unaweza kuanza na sentence moja fupi ya ukweli.",
        },
      },
      {
        statement: {
          en: "“Asking for mental-health support is a brave step.”",
          sheng: "“Kuomba support ya afya ya akili ni step ya ujasiri.”",
        },
        truth: true,
        explanation: {
          en: "Just like physical health, mental health deserves care and support. You do not need to wait until things feel unmanageable.",
          sheng: "Kama afya ya mwili, afya ya akili pia inahitaji care na support. Usisubiri mambo yakulemee ndio uombe help.",
        },
        tip: {
          en: "There are people who care and are ready to listen.",
          sheng: "Kuna watu wanajali na wako ready kukuskiza.",
        },
      },
    ],
  },
];

const knowledgeCheckCopy = [
  {
    statement: {
      en: "“Mental health is just as important as physical health.”",
      sheng: "“Afya ya akili ni muhimu kama afya ya mwili.”",
    },
    label: { en: "FACT", sheng: "UKWELI" },
    explanation: {
      en: "Mental health shapes how we handle stress and connect with others. Looking after your feelings is an important part of looking after yourself.",
      sheng: "Afya ya akili hutusaidia kuhandle stress na kuconnect na wengine. Kuangalia feelings zako ni sehemu muhimu ya kujijali.",
    },
  },
  {
    statement: {
      en: "“A student who asks for help is weak.”",
      sheng: "“Mwanafunzi akiomba help ako weak.”",
    },
    label: { en: "MYTH", sheng: "POROJO" },
    explanation: {
      en: "Reaching out takes courage and self-awareness. Asking for help is one of the strongest steps a student can take.",
      sheng: "Kuomba help ni ujasiri na kujielewa. Kuomba usaidizi ni moja ya steps zenye nguvu mwanafunzi anaweza kuchukua.",
    },
  },
  {
    statement: {
      en: "“Only adults can experience mental-health challenges.”",
      sheng: "“Ni watu wazima tu hupitia challenges za afya ya akili.”",
    },
    label: { en: "MYTH", sheng: "POROJO" },
    explanation: {
      en: "Young people can experience mental-health challenges too. Support is worthwhile at every age.",
      sheng: "Vijana pia hupitia challenges za afya ya akili. Support ni muhimu kwa kila age.",
    },
  },
  {
    statement: {
      en: "“Mental health can affect sleep, focus, and friendships.”",
      sheng: "“Afya ya akili inaweza kuathiri usingizi, focus na urafiki.”",
    },
    label: { en: "FACT", sheng: "UKWELI" },
    explanation: {
      en: "Our wellbeing can influence daily life in many ways. If changes are worrying you, a trusted adult or health professional can help you decide what support may be useful.",
      sheng: "Wellbeing yetu inaweza kuathiri maisha ya kila siku kwa njia nyingi. Changes zikikuworry, mtu mzima unamtrust ama health professional anaweza kukusaidia kupata support inayofaa.",
    },
  },
  {
    statement: {
      en: "“I need perfect words before I ask someone for help.”",
      sheng: "“Lazima nipate maneno perfect kabla niombe help.”",
    },
    label: { en: "MYTH", sheng: "POROJO" },
    explanation: {
      en: "You can start simply: “I haven’t been feeling like myself. Can we talk?” A trusted person can help you take the next step.",
      sheng: "Unaweza kuanza tu: “Sijifeel kama kawaida. Tunaweza kubonga?” Mtu unamtrust anaweza kukusaidia kuchukua hatua inayofuata.",
    },
  },
  {
    statement: {
      en: "“Rest, movement, and connection can support wellbeing.”",
      sheng: "“Kupumzika, kusonga na kuwa na watu kunaweza kusaidia wellbeing.”",
    },
    label: { en: "FACT", sheng: "UKWELI" },
    explanation: {
      en: "Small routines can help, though they do not replace extra help when someone is struggling. It is okay to reach out as well.",
      sheng: "Routine ndogo zinaweza kusaidia, lakini hazichukui nafasi ya help zaidi mtu akipitia tough time. Ni sawa kuomba support pia.",
    },
  },
  {
    statement: {
      en: "“A friend who is struggling just needs to cheer up.”",
      sheng: "“Beshte akipitia tough time anahitaji tu kuchangamka.”",
    },
    label: { en: "MYTH", sheng: "POROJO" },
    explanation: {
      en: "Listening without judgement is more helpful than dismissing someone’s feelings. Encourage them to talk to a trusted adult or call Kenya’s Child Helpline on 116.",
      sheng: "Kuskiza bila kuhukumu husaidia zaidi kuliko kupuuza feelings za mtu. Mshow abonge na mtu mzima anayemtrust ama apigie Child Helpline 116.",
    },
  },
  {
    statement: {
      en: "“A trusted adult can help me find more support.”",
      sheng: "“Mtu mzima ninayemtrust anaweza kunisaidia kupata support zaidi.”",
    },
    label: { en: "FACT", sheng: "UKWELI" },
    explanation: {
      en: "A parent, teacher, school counselor, or health professional can listen and help you explore the right next step. If you need urgent support in Kenya, call 116.",
      sheng: "Mzazi, mwalimu, counselor wa shule ama health professional anaweza kukuskiza na kukusaidia kupata next step. Ukihitaji help ya haraka Kenya, piga 116.",
    },
  },
  {
    statement: {
      en: "“Stress can affect both feelings and the body.”",
      sheng: "“Stress inaweza kuathiri feelings na mwili.”",
    },
    label: { en: "FACT", sheng: "UKWELI" },
    explanation: {
      en: "Stress may show up as tense muscles, headaches, or trouble sleeping. These signs can have different causes, so talk to a trusted adult or health professional if they worry you or persist.",
      sheng: "Stress inaweza kujionyesha kwa misuli kukaza, kichwa kuuma ama kukosa usingizi. Zinaweza kuwa na sababu tofauti, kwa hivyo ongea na mtu mzima unamtrust ama health professional zikikudisturb ama zikiendelea.",
    },
  },
  {
    statement: {
      en: "“I should wait until things become a crisis before asking for help.”",
      sheng: "“Ningoje mambo yawe crisis ndio niombe help.”",
    },
    label: { en: "MYTH", sheng: "POROJO" },
    explanation: {
      en: "You can reach out early, even if you are not sure what is wrong. A trusted adult can listen and help you decide what to do next.",
      sheng: "Unaweza kuomba help mapema, hata kama hujui shida ni nini. Mtu mzima unamtrust anaweza kukuskiza na kukusaidia kujua next step.",
    },
  },
  {
    statement: {
      en: "“Writing down my worries can help me start a conversation.”",
      sheng: "“Kuandika worries zangu kunaweza kunisaidia kuanza convo.”",
    },
    label: { en: "FACT", sheng: "UKWELI" },
    explanation: {
      en: "If speaking feels hard, you could write a note or message to a trusted person, or ask someone to sit with you while you talk.",
      sheng: "Ikiwa kubonga ni ngumu, andika note ama message kwa mtu unamtrust, ama umwombe mtu akae nawe ukiongea.",
    },
  },
  {
    statement: {
      en: "“If one coping strategy does not help, nothing else will.”",
      sheng: "“Njia moja ya kucope isiposaidia, hakuna ingine itasaidia.”",
    },
    label: { en: "MYTH", sheng: "POROJO" },
    explanation: {
      en: "Different approaches work for different people and situations. It is okay to try another small step and ask someone you trust for support.",
      sheng: "Njia tofauti hufanya kazi kwa watu na situations tofauti. Ni sawa kujaribu step ingine ndogo na kuomba support kwa mtu unamtrust.",
    },
  },
];

const waveformHeights = [
  22, 38, 56, 31, 72, 48, 82, 36, 64, 94, 44, 72, 37, 86, 55, 29, 63, 91, 42,
  33, 70, 58, 39, 77, 35, 54, 27, 20,
];
let currentStoryIndex = 0;
let currentQuestionIndex = 0;
let currentSeconds = 0;
let isPlaying = false;
let isMuted = false;
let playbackSpeedIndex = 1;
const playbackSpeeds = [0.75, 1, 1.25];
let playbackTimer = null;
let breathingTimer = null;
let breathingCycle = 0;
let currentUtterance = null;
let toastTimer = null;
let activeLanguage = "en";

function languageText(english, sheng) {
  return activeLanguage === "sheng" ? sheng : english;
}

function copyFor(value) {
  return typeof value === "string" ? value : value[activeLanguage];
}

function applyKnowledgeCheckCopy() {
  document.querySelectorAll(".accordion-item").forEach((item, index) => {
    const copy = knowledgeCheckCopy[index];
    item.querySelector(".accordion-trigger > span:first-child").textContent =
      copyFor(copy.statement);
    item.querySelector(".accordion-answer .fact-label, .accordion-answer .myth-label").textContent =
      copyFor(copy.label);
    item.querySelector(".accordion-answer p").textContent = copyFor(copy.explanation);
  });
}

const elements = {
  waveform: document.querySelector("#waveform"),
  playlist: document.querySelector("#playlist"),
  trackTitle: document.querySelector("#track-title"),
  trackAuthor: document.querySelector("#track-author"),
  trackLabel: document.querySelector("#track-label"),
  timeCurrent: document.querySelector("#time-current"),
  timeTotal: document.querySelector("#time-total"),
  progress: document.querySelector("#audio-progress"),
  transcript: document.querySelector("#transcript-text"),
  playButton: document.querySelector("#play-toggle"),
  playSymbol: document.querySelector("#play-symbol"),
  playLabel: document.querySelector("#play-label"),
  playStatus: document.querySelector("#play-status"),
  quizStatement: document.querySelector("#quiz-statement"),
  quizCount: document.querySelector("#quiz-count"),
  quizFeedback: document.querySelector("#quiz-feedback"),
  quizVerdict: document.querySelector("#quiz-verdict"),
  quizExplanation: document.querySelector("#quiz-explanation"),
  answerRumor: document.querySelector("#answer-rumor"),
  answerTruth: document.querySelector("#answer-truth"),
};

// Build the waveform with ordinary DOM elements so its bars can animate during playback.
waveformHeights.forEach((height) => {
  const bar = document.createElement("span");
  bar.className = "wave-bar";
  bar.dataset.height = String(height);
  bar.style.height = `${height}%`;
  elements.waveform.append(bar);
});

function formatTime(seconds) {
  const wholeSeconds = Math.max(0, Math.floor(seconds));
  return `${Math.floor(wholeSeconds / 60)}:${String(wholeSeconds % 60).padStart(2, "0")}`;
}

function showToast(message) {
  const toast = document.querySelector("#language-toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(
    () => toast.classList.remove("is-visible"),
    2400,
  );
}

function renderPlaylist() {
  elements.playlist.replaceChildren();
  stories.forEach((story, index) => {
    const option = document.createElement("button");
    option.type = "button";
    option.className = "track-option";
    option.setAttribute("role", "option");
    option.setAttribute("aria-selected", String(index === currentStoryIndex));
    option.setAttribute(
      "aria-label",
      languageText(
        `Play story ${index + 1}: ${copyFor(story.title)}`,
        `Skiza risto ${index + 1}: ${copyFor(story.title)}`,
      ),
    );

    const number = document.createElement("span");
    number.className = "track-option-number";
    number.textContent = String(index + 1).padStart(2, "0");
    const copy = document.createElement("span");
    copy.className = "track-option-copy";
    const title = document.createElement("strong");
    title.textContent = copyFor(story.title);
    const author = document.createElement("small");
    author.textContent = copyFor(story.author);
    copy.append(title, author);
    const duration = document.createElement("span");
    duration.className = "track-option-status";
    duration.textContent =
      index === currentStoryIndex
        ? languageText("Selected", "Imechaguliwa")
        : formatTime(story.length);
    option.append(number, copy, duration);
    option.addEventListener("click", () => loadStory(index));
    elements.playlist.append(option);
  });
}

function renderTranscript() {
  const words = copyFor(stories[currentStoryIndex].transcript).split(" ");
  elements.transcript.replaceChildren();
  words.forEach((word, index) => {
    const wordButton = document.createElement("span");
    wordButton.className = "transcript-word";
    wordButton.textContent = word;
    wordButton.setAttribute("role", "button");
    wordButton.setAttribute("tabindex", "0");
    wordButton.setAttribute(
      "aria-label",
      languageText(`Jump to word ${word}`, `Ruka hadi kwa neno ${word}`),
    );
    const jumpToWord = () =>
      seekTo((index / words.length) * stories[currentStoryIndex].length);
    wordButton.addEventListener("click", jumpToWord);
    wordButton.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        jumpToWord();
      }
    });
    elements.transcript.append(wordButton, document.createTextNode(" "));
  });
}

function updateTranscriptHighlight() {
  const words = elements.transcript.querySelectorAll(".transcript-word");
  const activeIndex = Math.min(
    words.length - 1,
    Math.floor(
      (currentSeconds / stories[currentStoryIndex].length) * words.length,
    ),
  );
  words.forEach((word, index) => {
    word.classList.toggle("active", index === activeIndex && isPlaying);
    word.classList.toggle("passed", index < activeIndex);
  });
}

function updateProgress() {
  const story = stories[currentStoryIndex];
  const percent = Math.min(100, (currentSeconds / story.length) * 100);
  elements.progress.value = String(percent);
  elements.progress.style.background = `linear-gradient(to right, var(--teal) 0%, var(--teal) ${percent}%, #e4ded4 ${percent}%, #e4ded4 100%)`;
  elements.progress.setAttribute(
    "aria-valuetext",
    languageText(
      `${formatTime(currentSeconds)} of ${formatTime(story.length)}`,
      `${formatTime(currentSeconds)} kati ya ${formatTime(story.length)}`,
    ),
  );
  elements.timeCurrent.textContent = formatTime(currentSeconds);
  elements.waveform.querySelectorAll(".wave-bar").forEach((bar, index) => {
    const playedThrough = index / waveformHeights.length <= percent / 100;
    bar.classList.toggle("played", playedThrough);
    if (isPlaying) {
      const movement = Math.sin(Date.now() / 170 + index * 0.63) * 11;
      bar.style.height = `${Math.max(12, Math.min(100, Number(bar.dataset.height) + movement))}%`;
    } else {
      bar.style.height = `${bar.dataset.height}%`;
    }
  });
  updateTranscriptHighlight();
}

function updatePlaybackState(playing, message) {
  isPlaying = playing;
  elements.playSymbol.textContent = playing ? "Ⅱ" : "▶";
  elements.playLabel.textContent = languageText(
    playing ? "Pause" : "Play",
    playing ? "Pause" : "Cheza",
  );
  elements.playButton.setAttribute(
    "aria-label",
    languageText(
      playing ? "Pause voice note" : "Play voice note",
      playing ? "Simamisha sauti" : "Cheza sauti",
    ),
  );
  elements.playStatus.querySelector("span").textContent =
    message ||
    languageText(
      playing ? "Playing voice note" : "Ready to play",
      playing ? "Sauti inacheza" : "Tayari kucheza",
    );
  elements.playStatus.classList.toggle("playing", playing);
  updateProgress();
}

function stopSpeech() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  currentUtterance = null;
}

function findSpeechVoice() {
  const voices = window.speechSynthesis.getVoices();
  const languagePrefix = activeLanguage === "en" ? "en" : "sw";
  return voices
    .filter((voice) =>
      voice.lang.toLowerCase().replace("_", "-").startsWith(languagePrefix),
    )
    .sort((first, second) => {
      const score = (voice) => {
        const locale = voice.lang.toLowerCase().replace("_", "-");
        const name = voice.name.toLowerCase();
        const expectedLocale = activeLanguage === "en" ? "en-ke" : "sw-ke";
        const localeScore = locale === expectedLocale ? 100 : 80;
        const qualityHint = /neural|natural|premium|enhanced/.test(name) ? 10 : 0;
        return localeScore + qualityHint;
      };
      return score(second) - score(first);
    })[0];
}

function speakCurrentStory() {
  if (
    !("speechSynthesis" in window) ||
    !("SpeechSynthesisUtterance" in window)
  ) {
    document.querySelector("#voice-engine").textContent = languageText(
      "Speech playback is not available in this browser",
      "Sauti haipatikani kwa browser hii",
    );
    updatePlaybackState(
      false,
      languageText("Transcript available", "Maneno ya kusoma yapo"),
    );
    return false;
  }
  stopSpeech();
  const story = stories[currentStoryIndex];
  const speechText = copyFor(story.transcript);
  const startAt = Math.floor(
    (currentSeconds / story.length) * speechText.length,
  );
  const nextWordBoundary = startAt === 0 ? 0 : speechText.indexOf(" ", startAt);
  const spokenText = speechText.slice(
    nextWordBoundary < 0 ? startAt : nextWordBoundary + 1,
  );
  currentUtterance = new SpeechSynthesisUtterance(spokenText || speechText);
  currentUtterance.lang = activeLanguage === "en" ? "en-KE" : "sw-KE";
  currentUtterance.rate = 0.92 * playbackSpeeds[playbackSpeedIndex];
  currentUtterance.pitch = 0.96;
  currentUtterance.volume = isMuted ? 0 : 1;
  const speechVoice = findSpeechVoice();
  const voiceEngine = document.querySelector("#voice-engine");
  if (speechVoice) {
    currentUtterance.voice = speechVoice;
    voiceEngine.textContent = languageText(
      `English voice · ${speechVoice.name}`,
      `Sauti ya Kiswahili · ${speechVoice.name}`,
    );
  } else {
    voiceEngine.textContent = languageText(
      "No installed English voice · browser fallback; sound varies",
      "Hakuna sauti ya Kiswahili iliyowekwa · browser itajaribu sauti nyingine",
    );
  }
  currentUtterance.onend = () => finishPlayback();
  currentUtterance.onerror = () => {
    voiceEngine.textContent = languageText(
      "Speech playback failed. The story transcript is still available.",
      "Sauti imeshindwa kucheza. Unaweza kusoma maneno ya risto.",
    );
    finishPlayback();
  };
  window.speechSynthesis.speak(currentUtterance);
  return true;
}

function startPlayback() {
  if (currentSeconds >= stories[currentStoryIndex].length) currentSeconds = 0;
  const speechStarted = speakCurrentStory();
  if (!speechStarted) return;
  updatePlaybackState(
    true,
    languageText("Playing voice note", "Sauti inacheza"),
  );
  window.clearInterval(playbackTimer);
  playbackTimer = window.setInterval(() => {
    currentSeconds += 0.25 * playbackSpeeds[playbackSpeedIndex];
    if (currentSeconds >= stories[currentStoryIndex].length) {
      finishPlayback();
      return;
    }
    updateProgress();
  }, 250);
}

function pausePlayback() {
  window.clearInterval(playbackTimer);
  if ("speechSynthesis" in window) window.speechSynthesis.pause();
  updatePlaybackState(false, languageText("Paused", "Imesimamishwa"));
}

function finishPlayback() {
  window.clearInterval(playbackTimer);
  stopSpeech();
  currentSeconds = 0;
  updatePlaybackState(
    false,
    languageText("Finished · Tap play", "Imeisha · Gusa ucheze tena"),
  );
  window.setTimeout(() => {
    if (!isPlaying)
      elements.playStatus.querySelector("span").textContent = languageText(
        "Ready to play",
        "Tayari kucheza",
      );
  }, 2600);
}

function seekTo(seconds) {
  const wasPlaying = isPlaying;
  if (wasPlaying) {
    window.clearInterval(playbackTimer);
    stopSpeech();
  }
  currentSeconds = Math.max(
    0,
    Math.min(stories[currentStoryIndex].length, seconds),
  );
  updateProgress();
  if (wasPlaying) startPlayback();
}

function resetQuiz() {
  currentQuestionIndex = 0;
  renderQuestion();
}

function renderQuestion() {
  const questions = stories[currentStoryIndex].questions;
  const question = questions[currentQuestionIndex];
  elements.quizStatement.textContent = copyFor(question.statement);
  elements.quizCount.textContent = languageText(
    `${currentQuestionIndex + 1} of ${questions.length}`,
    `${currentQuestionIndex + 1} kati ya ${questions.length}`,
  );
  elements.quizFeedback.hidden = true;
  elements.answerRumor.disabled = false;
  elements.answerTruth.disabled = false;
}

function answerQuestion(guessIsTruth) {
  const question = stories[currentStoryIndex].questions[currentQuestionIndex];
  const isCorrect = guessIsTruth === question.truth;
  elements.answerRumor.disabled = true;
  elements.answerTruth.disabled = true;
  elements.quizVerdict.textContent = isCorrect
    ? languageText("That is right — good thinking.", "Umejibu sawa — umefikiria poa.")
    : languageText("Not quite. Here is the helpful context.", "Si hivyo kabisa. Hii ndio context ya kusaidia.");
  elements.quizExplanation.textContent = `${copyFor(question.explanation)} ${copyFor(question.tip)}`;
  elements.quizFeedback.hidden = false;
}

function loadStory(index) {
  window.clearInterval(playbackTimer);
  stopSpeech();
  currentStoryIndex = index;
  currentSeconds = 0;
  const story = stories[index];
  elements.trackTitle.textContent = copyFor(story.title);
  elements.trackAuthor.textContent = copyFor(story.author);
  elements.trackLabel.textContent = languageText(
    `VOICE NOTE ${String(index + 1).padStart(2, "0")}`,
    `SAUTI ${String(index + 1).padStart(2, "0")}`,
  );
  elements.timeTotal.textContent = formatTime(story.length);
  updatePlaybackState(
    false,
    languageText("Ready to play", "Tayari kucheza"),
  );
  renderPlaylist();
  renderTranscript();
  resetQuiz();
}

// Playback controls: speech synthesis plays the sample story when the browser supports it.
elements.playButton.addEventListener("click", () => {
  if (isPlaying) pausePlayback();
  else if ("speechSynthesis" in window && window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
    updatePlaybackState(
    true,
    languageText("Playing voice note", "Sauti inacheza"),
  );
    playbackTimer = window.setInterval(() => {
      currentSeconds += 0.25 * playbackSpeeds[playbackSpeedIndex];
      if (currentSeconds >= stories[currentStoryIndex].length) finishPlayback();
      else updateProgress();
    }, 250);
  } else startPlayback();
});
document
  .querySelector("#rewind")
  .addEventListener("click", () => seekTo(currentSeconds - 5));
document
  .querySelector("#forward")
  .addEventListener("click", () => seekTo(currentSeconds + 5));
elements.progress.addEventListener("input", () =>
  seekTo(
    (Number(elements.progress.value) / 100) * stories[currentStoryIndex].length,
  ),
);
document.querySelector("#speed-toggle").addEventListener("click", (event) => {
  playbackSpeedIndex = (playbackSpeedIndex + 1) % playbackSpeeds.length;
  const speed = playbackSpeeds[playbackSpeedIndex];
  event.currentTarget.textContent = `${speed.toFixed(speed === 1 ? 1 : 2)}×`;
  event.currentTarget.setAttribute(
    "aria-label",
    languageText(
      `Playback speed ${speed} times`,
      `Speed ya kucheza mara ${speed}`,
    ),
  );
  if (isPlaying) {
    window.clearInterval(playbackTimer);
    startPlayback();
  }
});
document.querySelector("#mute-toggle").addEventListener("click", (event) => {
  isMuted = !isMuted;
  event.currentTarget.setAttribute("aria-pressed", String(isMuted));
  event.currentTarget.setAttribute(
    "aria-label",
    isMuted
      ? languageText("Unmute speech", "Washa sauti")
      : languageText("Mute speech", "Zima sauti"),
  );
  event.currentTarget.textContent = isMuted ? "◖̸" : "◖";
  if (isPlaying) {
    window.clearInterval(playbackTimer);
    startPlayback();
  }
});

// Let learners show or hide the spoken story transcript.
document
  .querySelector("#transcript-toggle")
  .addEventListener("click", (event) => {
    const panel = document.querySelector("#transcript-panel");
    const isOpen = event.currentTarget.getAttribute("aria-expanded") === "true";
    event.currentTarget.setAttribute("aria-expanded", String(!isOpen));
    panel.classList.toggle("is-collapsed", isOpen);
  });

// Quiz answers give instant feedback and cycle through the sample stories.
elements.answerRumor.addEventListener("click", () => answerQuestion(false));
elements.answerTruth.addEventListener("click", () => answerQuestion(true));
document.querySelector("#quiz-next").addEventListener("click", () => {
  currentQuestionIndex =
    (currentQuestionIndex + 1) % stories[currentStoryIndex].questions.length;
  renderQuestion();
});

// The 4-2-6 breathing rhythm can be stopped at any point.
const breathingPhases = [
  { label: { en: "Inhale…", sheng: "Vuta pumzi…" }, seconds: 4, scale: 1.12 },
  { label: { en: "Hold…", sheng: "Shikilia…" }, seconds: 2, scale: 1.12 },
  { label: { en: "Exhale…", sheng: "Toa pumzi…" }, seconds: 6, scale: 1 },
];
function startBreathing() {
  const button = document.querySelector("#breathe-button");
  const status = document.querySelector("#breath-status");
  if (breathingTimer) {
    window.clearTimeout(breathingTimer);
    breathingTimer = null;
    button.classList.remove("is-breathing");
    button.setAttribute("aria-pressed", "false");
    button.setAttribute(
      "aria-label",
      languageText("Start a breathing exercise", "Anza mazoezi ya kupumua"),
    );
    status.textContent = languageText("Tap to begin", "Gusa uanze");
    return;
  }
  button.classList.add("is-breathing");
  button.setAttribute("aria-pressed", "true");
  button.setAttribute(
    "aria-label",
    languageText("Stop breathing exercise", "Simamisha mazoezi ya kupumua"),
  );
  function runPhase() {
    const phase = breathingPhases[breathingCycle % breathingPhases.length];
    status.textContent = copyFor(phase.label);
    button.style.transform = `scale(${phase.scale})`;
    breathingCycle += 1;
    breathingTimer = window.setTimeout(runPhase, phase.seconds * 1000);
  }
  runPhase();
}
document
  .querySelector("#breathe-button")
  .addEventListener("click", startBreathing);

// Apply the selected language to static copy, generated player content, and accessible labels.
function setLanguage(language) {
  if (language === activeLanguage) return;

  const wasPlaying = isPlaying;
  window.clearInterval(playbackTimer);
  stopSpeech();
  activeLanguage = language;
  document.documentElement.lang = language === "en" ? "en" : "sw-KE";
  document.title = languageText(
    "MindSpace Kenya — Your mind matters",
    "MindSpace Kenya — Akili yako ni muhimu",
  );
  document.querySelector('meta[name="description"]').content = languageText(
    "A welcoming mental-health space for Kenyan secondary school students to learn, listen, and find support.",
    "Nafasi salama kwa wanafunzi wa sekondari Kenya kujifunza kuhusu afya ya akili, kusikiliza na kupata support.",
  );
  document.querySelectorAll("[data-en][data-sheng]").forEach((element) => {
    element.textContent =
      language === "sheng" ? element.dataset.sheng : element.dataset.en;
  });
  document
    .querySelectorAll("[data-en-aria-label][data-sheng-aria-label]")
    .forEach((element) => {
      element.setAttribute(
        "aria-label",
        language === "sheng"
          ? element.getAttribute("data-sheng-aria-label")
          : element.getAttribute("data-en-aria-label"),
      );
    });
  applyKnowledgeCheckCopy();
  document
    .querySelectorAll("[data-en-placeholder][data-sheng-placeholder]")
    .forEach((element) => {
      element.setAttribute(
        "placeholder",
        language === "sheng"
          ? element.getAttribute("data-sheng-placeholder")
          : element.getAttribute("data-en-placeholder"),
      );
    });

  const englishButton = document.querySelector("#lang-en");
  const shengButton = document.querySelector("#lang-sheng");
  englishButton.classList.toggle("selected", language === "en");
  shengButton.classList.toggle("selected", language === "sheng");
  englishButton.setAttribute("aria-pressed", String(language === "en"));
  shengButton.setAttribute("aria-pressed", String(language === "sheng"));

  const floatingLanguage = document.querySelector("#floating-language");
  floatingLanguage.querySelector("span").textContent = languageText(
    "Sheng Mode: OFF",
    "Sheng mode iko ON",
  );
  floatingLanguage.setAttribute(
    "aria-label",
    languageText("Switch to Sheng", "Switch to English"),
  );

  const menuIsOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute(
    "aria-label",
    languageText(
      menuIsOpen ? "Close navigation" : "Open navigation",
      menuIsOpen ? "Funga menu" : "Fungua menu",
    ),
  );

  const story = stories[currentStoryIndex];
  elements.trackTitle.textContent = copyFor(story.title);
  elements.trackAuthor.textContent = copyFor(story.author);
  elements.trackLabel.textContent = languageText(
    `VOICE NOTE ${String(currentStoryIndex + 1).padStart(2, "0")}`,
    `SAUTI ${String(currentStoryIndex + 1).padStart(2, "0")}`,
  );
  document.querySelector("#voice-engine").textContent = languageText(
    "Prefers an installed English voice · sound varies by device",
    "Inatumia sauti ya Kiswahili iliyowekwa · sauti hutofautiana kwa device",
  );
  renderPlaylist();
  renderTranscript();
  renderQuestion();
  updatePlaybackState(
    false,
    wasPlaying
      ? languageText("Paused", "Imesimamishwa")
      : languageText("Ready to play", "Tayari kucheza"),
  );
  document.querySelector("#speed-toggle").setAttribute(
    "aria-label",
    languageText(
      `Playback speed ${playbackSpeeds[playbackSpeedIndex]} times`,
      `Speed ya kucheza mara ${playbackSpeeds[playbackSpeedIndex]}`,
    ),
  );
  document.querySelector("#mute-toggle").setAttribute(
    "aria-label",
    isMuted
      ? languageText("Unmute speech", "Washa sauti")
      : languageText("Mute speech", "Zima sauti"),
  );
  const breathStatus = document.querySelector("#breath-status");
  const breathButton = document.querySelector("#breathe-button");
  breathStatus.textContent = breathingTimer
    ? copyFor(breathingPhases[(breathingCycle - 1) % breathingPhases.length].label)
    : languageText("Tap to begin", "Gusa uanze");
  breathButton.setAttribute(
    "aria-label",
    breathingTimer
      ? languageText("Stop breathing exercise", "Simamisha mazoezi ya kupumua")
      : languageText("Start a breathing exercise", "Anza mazoezi ya kupumua"),
  );

  showToast(
    languageText(
      "English mode is on.",
      "Sheng mode iko ON — sema vile uko comfortable.",
    ),
  );
}
document
  .querySelector("#lang-en")
  .addEventListener("click", () => setLanguage("en"));
document
  .querySelector("#lang-sheng")
  .addEventListener("click", () => setLanguage("sheng"));
document
  .querySelector("#floating-language")
  .addEventListener("click", () =>
    setLanguage(activeLanguage === "en" ? "sheng" : "en"),
  );

// Compact-screen navigation closes after a section is chosen.
const menuToggle = document.querySelector("#menu-toggle");
const mainNav = document.querySelector("#main-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute(
    "aria-label",
    languageText(
      isOpen ? "Open navigation" : "Close navigation",
      isOpen ? "Fungua menu" : "Funga menu",
    ),
  );
  mainNav.classList.toggle("is-open", !isOpen);
});
mainNav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute(
      "aria-label",
      languageText("Open navigation", "Fungua menu"),
    );
    mainNav.classList.remove("is-open");
  }),
);

// The anonymous story form is a local demo only; it does not send or store a message.
const storyDialog = document.querySelector("#story-dialog");
document
  .querySelector("#open-story")
  .addEventListener("click", () => storyDialog.showModal());
document
  .querySelector("#close-dialog")
  .addEventListener("click", () => storyDialog.close());
document
  .querySelector("#cancel-dialog")
  .addEventListener("click", () => storyDialog.close());
document.querySelector("#story-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const message = document.querySelector("#story-message").value.trim();
  const topic = document.querySelector("#story-topic").value.trim();
  if (!topic || message.length < 5) return;
  const confirmation = document.querySelector("#form-confirmation");
  confirmation.textContent = languageText(
    `Your demo message about “${topic}” is ready. It has not been sent or saved.`,
    `Ujumbe wako wa demo kuhusu “${topic}” uko tayari. Haujatumwa wala kuhifadhiwa.`,
  );
  confirmation.hidden = false;
});

// Quick Exit opens a neutral school revision overlay and does not leave the page.
const exitDialog = document.querySelector("#exit-dialog");
document
  .querySelector("#quick-exit")
  .addEventListener("click", () => exitDialog.showModal());
document
  .querySelector("#close-exit")
  .addEventListener("click", () => exitDialog.close());

// Each myth-or-fact row works as an accessible disclosure button.
document.querySelectorAll(".accordion-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const answer = trigger.nextElementSibling;
    const isExpanded = trigger.getAttribute("aria-expanded") === "true";
    trigger.setAttribute("aria-expanded", String(!isExpanded));
    answer.hidden = isExpanded;
    trigger.querySelector(".accordion-icon").textContent = isExpanded
      ? "+"
      : "−";
  });
});

// Keep the main story selection and all player content in sync on first load.
loadStory(0);
