// MindSpace Kenya: interactive breathing guide, story player, language toggle, and knowledge checks.
const stories = [
  {
    title: "Pressure ya Form 4 Mock Exams",
    author: "Anonymous Chali, 17 · Kiambu County",
    transcript:
      "Nilikuwa nafeel mzigo wa mocks ukinilemea, usingizi ikapotea kabisa. But kuskizwa na school counselor ilinipa pumzi.",
    length: 16,
    questions: [
      {
        statement: "“A low mock exam score means your future is over.”",
        truth: false,
        explanation:
          "Mocks are practice, not the end of your journey. A teacher or counselor can help you find new ways to revise without judging yourself.",
        tip: "One result does not define your whole life.",
      },
      {
        statement:
          "“Talking to someone you trust can help when exam stress affects your sleep.”",
        truth: true,
        explanation:
          "Many students have sleepless nights around exams. Sharing what is worrying you can make it feel more manageable.",
        tip: "You do not have to carry the stress alone.",
      },
    ],
  },
  {
    title: "Kupoteza Beshte & Upweke Boarding",
    author: "Dem wa Form 2 · Nakuru County",
    transcript:
      "Boarding school inaweza kuwa lonely sana. Kuongea na mwalimu niliyetrust ilinisaidia kujua si niko solo.",
    length: 14,
    questions: [
      {
        statement: "“Feeling lonely at boarding school means you are weak.”",
        truth: false,
        explanation:
          "Loneliness is a real feeling many students experience. Naming it and reaching out to a trusted friend or teacher takes courage.",
        tip: "Be as kind to yourself as you would be to a friend.",
      },
      {
        statement:
          "“Having a trusted adult at school can help you feel safer.”",
        truth: true,
        explanation:
          "A trusted adult can listen and help you work through challenges at school or in the dorms.",
        tip: "Every student deserves someone who listens with respect.",
      },
    ],
  },
  {
    title: "Kuvunja Ukimya na Mzazi Wangu",
    author: "Kijana wa Form 3 · Nairobi County",
    transcript:
      "Nilidhani mzae atanikasirikia nikisema niko depressed, lakini aliniskiza kwa upole na akanisaidia kupata usaidizi.",
    length: 15,
    questions: [
      {
        statement:
          "“No parent can understand what a young person is going through.”",
        truth: false,
        explanation:
          "It can feel awkward to start the conversation, but many parents care deeply and want to understand what their child is feeling.",
        tip: "You can begin with one small, honest sentence.",
      },
      {
        statement: "“Asking for mental-health support is a brave step.”",
        truth: true,
        explanation:
          "Just like physical health, mental health deserves care and support. You do not need to wait until things feel unmanageable.",
        tip: "There are people who care and are ready to listen.",
      },
    ],
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
      `Play story ${index + 1}: ${story.title}`,
    );

    const number = document.createElement("span");
    number.className = "track-option-number";
    number.textContent = String(index + 1).padStart(2, "0");
    const copy = document.createElement("span");
    copy.className = "track-option-copy";
    const title = document.createElement("strong");
    title.textContent = story.title;
    const author = document.createElement("small");
    author.textContent = story.author;
    copy.append(title, author);
    const duration = document.createElement("span");
    duration.className = "track-option-status";
    duration.textContent =
      index === currentStoryIndex ? "Selected" : formatTime(story.length);
    option.append(number, copy, duration);
    option.addEventListener("click", () => loadStory(index));
    elements.playlist.append(option);
  });
}

function renderTranscript() {
  const words = stories[currentStoryIndex].transcript.split(" ");
  elements.transcript.replaceChildren();
  words.forEach((word, index) => {
    const wordButton = document.createElement("span");
    wordButton.className = "transcript-word";
    wordButton.textContent = word;
    wordButton.setAttribute("role", "button");
    wordButton.setAttribute("tabindex", "0");
    wordButton.setAttribute("aria-label", `Jump to word ${word}`);
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
    `${formatTime(currentSeconds)} of ${formatTime(story.length)}`,
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
  elements.playLabel.textContent = playing ? "Pause" : "Play";
  elements.playButton.setAttribute(
    "aria-label",
    playing ? "Pause voice note" : "Play voice note",
  );
  elements.playStatus.querySelector("span").textContent =
    message || (playing ? "Playing voice note" : "Ready to play");
  elements.playStatus.classList.toggle("playing", playing);
  updateProgress();
}

function stopSpeech() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  currentUtterance = null;
}

function speakCurrentStory() {
  if (
    !("speechSynthesis" in window) ||
    !("SpeechSynthesisUtterance" in window)
  ) {
    document.querySelector("#voice-engine").textContent =
      "Speech playback is not available in this browser";
    updatePlaybackState(false, "Transcript available");
    return false;
  }
  stopSpeech();
  const spokenText = stories[currentStoryIndex].transcript.slice(
    Math.floor(
      (currentSeconds / stories[currentStoryIndex].length) *
        stories[currentStoryIndex].transcript.length,
    ),
  );
  currentUtterance = new SpeechSynthesisUtterance(
    spokenText || stories[currentStoryIndex].transcript,
  );
  currentUtterance.lang = "sw-KE";
  currentUtterance.rate = playbackSpeeds[playbackSpeedIndex];
  currentUtterance.volume = isMuted ? 0 : 1;
  const voices = window.speechSynthesis.getVoices();
  const swahiliVoice = voices.find((voice) =>
    voice.lang.toLowerCase().startsWith("sw"),
  );
  if (swahiliVoice) currentUtterance.voice = swahiliVoice;
  currentUtterance.onend = () => finishPlayback();
  currentUtterance.onerror = () => {
    document.querySelector("#voice-engine").textContent =
      "Your browser could not play this speech voice. The transcript is still available.";
    finishPlayback();
  };
  window.speechSynthesis.speak(currentUtterance);
  return true;
}

function startPlayback() {
  if (currentSeconds >= stories[currentStoryIndex].length) currentSeconds = 0;
  const speechStarted = speakCurrentStory();
  if (!speechStarted) return;
  updatePlaybackState(true, "Playing voice note");
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
  updatePlaybackState(false, "Paused");
}

function finishPlayback() {
  window.clearInterval(playbackTimer);
  stopSpeech();
  currentSeconds = 0;
  updatePlaybackState(false, "Finished · Tap play");
  window.setTimeout(() => {
    if (!isPlaying)
      elements.playStatus.querySelector("span").textContent = "Ready to play";
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
  elements.quizStatement.textContent = question.statement;
  elements.quizCount.textContent = `${currentQuestionIndex + 1} of ${questions.length}`;
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
    ? "That is right — good thinking."
    : "Not quite. Here is the helpful context.";
  elements.quizExplanation.textContent = `${question.explanation} ${question.tip}`;
  elements.quizFeedback.hidden = false;
}

function loadStory(index) {
  window.clearInterval(playbackTimer);
  stopSpeech();
  currentStoryIndex = index;
  currentSeconds = 0;
  const story = stories[index];
  elements.trackTitle.textContent = story.title;
  elements.trackAuthor.textContent = story.author;
  elements.trackLabel.textContent = `VOICE NOTE ${String(index + 1).padStart(2, "0")}`;
  elements.timeTotal.textContent = formatTime(story.length);
  updatePlaybackState(false, "Ready to play");
  renderPlaylist();
  renderTranscript();
  resetQuiz();
}

// Playback controls: speech synthesis plays the sample story when the browser supports it.
elements.playButton.addEventListener("click", () => {
  if (isPlaying) pausePlayback();
  else if ("speechSynthesis" in window && window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
    updatePlaybackState(true, "Playing voice note");
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
    `Playback speed ${speed} times`,
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
    isMuted ? "Unmute speech" : "Mute speech",
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
  { label: "Inhale…", seconds: 4, scale: 1.12 },
  { label: "Hold…", seconds: 2, scale: 1.12 },
  { label: "Exhale…", seconds: 6, scale: 1 },
];
function startBreathing() {
  const button = document.querySelector("#breathe-button");
  const status = document.querySelector("#breath-status");
  if (breathingTimer) {
    window.clearTimeout(breathingTimer);
    breathingTimer = null;
    button.classList.remove("is-breathing");
    button.setAttribute("aria-pressed", "false");
    status.textContent =
      activeLanguage === "en" ? "Tap to begin" : "Gusa uanze";
    return;
  }
  button.classList.add("is-breathing");
  button.setAttribute("aria-pressed", "true");
  function runPhase() {
    const phase = breathingPhases[breathingCycle % breathingPhases.length];
    status.textContent = phase.label;
    button.style.transform = `scale(${phase.scale})`;
    breathingCycle += 1;
    breathingTimer = window.setTimeout(runPhase, phase.seconds * 1000);
  }
  runPhase();
}
document
  .querySelector("#breathe-button")
  .addEventListener("click", startBreathing);

// English and Sheng use the matching data attributes on headings and navigation labels.
function setLanguage(language) {
  activeLanguage = language;
  document.querySelectorAll("[data-en][data-sheng]").forEach((element) => {
    element.textContent =
      language === "sheng" ? element.dataset.sheng : element.dataset.en;
  });
  const englishButton = document.querySelector("#lang-en");
  const shengButton = document.querySelector("#lang-sheng");
  englishButton.classList.toggle("selected", language === "en");
  shengButton.classList.toggle("selected", language === "sheng");
  englishButton.setAttribute("aria-pressed", String(language === "en"));
  shengButton.setAttribute("aria-pressed", String(language === "sheng"));
  const floatingLanguage = document.querySelector("#floating-language");
  floatingLanguage.querySelector("span").textContent =
    `Sheng Mode: ${language === "sheng" ? "ON" : "OFF"}`;
  floatingLanguage.setAttribute(
    "aria-label",
    language === "sheng" ? "Switch to English" : "Switch to Sheng",
  );
  showToast(
    language === "sheng"
      ? "Sheng mode on — sema nasi bila pressure."
      : "English mode on.",
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
    isOpen ? "Open navigation" : "Close navigation",
  );
  mainNav.classList.toggle("is-open", !isOpen);
});
mainNav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
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
  confirmation.textContent = `Your demo message about “${topic}” is ready. It has not been sent or saved.`;
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
