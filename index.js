//Array with questions and answersobjects.
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
    question:
      "In the movie A Nightmare on Elm Street, how does Freddy Krueger primarily attack his victims?",
    answers: [
      { text: "By haunting their dreams", correct: true },
      { text: " With a chainsaw", correct: false },
      { text: "With a knife", correct: false },
      { text: "By drowning them", correct: false },
    ],
  },
  {
    question:
      "Which 1999 found footage horror film follows a group of student filmmakers as they investigate a local legend in the woods?",
    answers: [
      { text: "The Blair Witch Project", correct: true },
      { text: "Cloverfield", correct: false },
      { text: "Rec", correct: false },
      { text: "The Descent", correct: false },
    ],
  },
  {
    question:
      "What 1973 horror movie, based on a novel by William Peter Blatty, tells the story of a young girl possessed by a demonic entity?",
    answers: [
      { text: "The Omen", correct: false },
      { text: " Rosemary's Baby", correct: false },
      { text: "The Conjuring", correct: false },
      { text: "The Exorcist", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

//Reset and restart quiz.
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

//Generates and displays qurrent question.
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  //For each answer, generates a button with correct or incorrect value.
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
//checks if answer is correct or incorrect, and styles the answer with 'correct' or 'inncorrect' class.
function selectAnswer(e) {
  const selecedBtn = e.target;
  const isCorrect = selecedBtn.dataset.correct === "true";
  if (isCorrect) {
    selecedBtn.classList.add("correct");
    score++;
  } else {
    selecedBtn.classList.add("incorrect");
  }

  //Shows if the other answers is correct and disables buttons.
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  //shows next button.
  nextButton.style.display = "block";
}

//shows the score and changes the button-text to play again.
function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}
//checks if more questions and shows score if last question.
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
//If last question, starts quiz from beginning.
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

//removes all the answer buttons.
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
startQuiz();
