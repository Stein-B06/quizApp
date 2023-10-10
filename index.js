const questions = [
  {
    question:
      "Which famous horror movie character is known for wearing a hockey mask while terrorizing his victims?",
    answers: [
      { text: "Freddy Krueger", correct: false },
      { text: "Leatherface", correct: false },
      { text: "Michael Myers", correct: false },
      { text: "Jason Voorhees", correct: true },
    ],
  },
  {
    question: "which bla bla?",
    answers: [
      { text: "bla", correct: false },
      { text: "black", correct: false },
      { text: "blur", correct: true },
      { text: "answer", correct: false },
    ],
  },
  {
    question: "which bla bla?",
    answers: [
      { text: "bla", correct: true },
      { text: "black", correct: false },
      { text: "blur", correct: false },
      { text: "answer", correct: false },
    ],
  },
  {
    question: "which bla bla?",
    answers: [
      { text: "bla", correct: true },
      { text: "black", correct: false },
      { text: "blur", correct: false },
      { text: "answer", correct: false },
    ],
  },
  {
    question: "which bla bla?",
    answers: [
      { text: "bla", correct: false },
      { text: "black", correct: false },
      { text: "blur", correct: false },
      { text: "answer", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selecedBtn = e.target;
  const isCorrect = selecedBtn.dataset.correct === "true";
  if (isCorrect) {
    selecedBtn.classList.add("correct");
  } else {
    selecedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

startQuiz();
