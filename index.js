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
    question:
      " What 2017 horror film features a shape-shifting entity that often takes the form of a clown to prey on children?",
    answers: [
      { text: " Insidious", correct: false },
      { text: "The Conjuring", correct: false },
      { text: "It", correct: true },
      { text: "Annabelle", correct: false },
    ],
  },
  {
    question: "In the movie "A Nightmare on Elm Street," how does Freddy Krueger primarily attack his victims?",
    answers: [
      { text: "By haunting their dreams", correct: true },
      { text: " With a chainsaw", correct: false },
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
    score++;
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

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
