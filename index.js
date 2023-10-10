const questions = [
  {
    question: "which bla bla?",
    answers: [
      { text: "bla", correct: false },
      { text: "black", correct: false },
      { text: "blur", correct: false },
      { text: "answer", correct: true },
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
  {
    question: "which bla bla?",
    answers: [
      { text: "bla", correct: false },
      { text: "black", correct: false },
      { text: "blur", correct: false },
      { text: "answer", correct: true },
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
const answerButton = document.getElementById("answer-buttons");
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
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
  });
}

startQuiz();
