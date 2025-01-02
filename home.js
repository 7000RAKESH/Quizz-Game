// let input = document.querySelector(".form-control");
// document.querySelector(".search").addEventListener("click", () => {
//   console.log("search");
// });

let email = localStorage.getItem("email");
let dropDown = document.querySelector(".btn");
let signupEmail = localStorage.getItem("signup-email");
let user = "";

let activeEmail = email || signupEmail || "Guest";

for (let i = 0; i < activeEmail.length; i++) {
  if (activeEmail[i] != "@") {
    user += activeEmail[i];
  } else {
    break;
  }
}

dropDown.innerHTML = `<i class="fa-solid fa-user"></i>&nbsp;&nbsp; ${user}`;

// if (email) {
//   for (i = 0; i < email.length; i++) {
//     if (email[i] != "@") {
//       user += email[i];
//     } else {
//       break;
//     }
//   }
// } else {
//   for (i = 0; i < signupEmail.length; i++) {
//     if (signupEmail[i] != "@") {
//       user += signupEmail[i];
//     } else {
//       break;
//     }
//   }
// }
// if (email == null) {
//   email = "Guest";
//   if (signupEmail) {
//     dropDown.innerHTML = `<i class="fa-solid fa-user"></i>&nbsp;&nbsp; ${user}`;
//   } else {
//     dropDown.innerHTML = `<i class="fa-solid fa-user"></i>&nbsp;&nbsp; ${email}`;
//   }
// } else {
//   dropDown.innerHTML = `<i class="fa-solid fa-user"></i>&nbsp;&nbsp; ${user}`;
// }

document.querySelector(".logout").addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "./index.html";
});

// getting questions according to category

let getCategory = "javascript";
let questionsHistory = [];
let currentQuestion = null;
let questionStatus = document.querySelector(".score-p");
function categorySelection() {}
let numberOfQuestion = 5;
let timerDiv = document.querySelector(".timer-div");

const QUIZ_TIME_LIMIT = 16;
let currentTime = QUIZ_TIME_LIMIT;
let timer = null;
let quizzTime = document.querySelector(".time");

let questionesContainer = document.querySelector(".question-container");
let resultsContainer = document.querySelector(".score-div");
let quizSelection = document.querySelector(".quiz-selection");
let correctAnswers = 0;

function showResults() {
  questionesContainer.style.display = "none";
  resultsContainer.style.display = "block";
  document.querySelector(
    ".totalScore"
  ).innerHTML = `You answered <b>${correctAnswers}</b> out of <b>${numberOfQuestion}</b> questions correctly.Great effort`;
}

let startTimer = (correctOption) => {
  if (timer !== null) {
    clearInterval(timer);
  }

  currentTime = QUIZ_TIME_LIMIT;

  timer = setInterval(() => {
    currentTime--;
    quizzTime.innerHTML = ` &nbsp;${currentTime}s`;

    if (currentTime <= 0) {
      clearInterval(timer);
      next.style.display = "block";
      disableButtons();
      timerDiv.style.backgroundColor = "red";
      document.querySelectorAll(".options").forEach((optionElement) => {
        if (optionElement.textContent === correctOption) {
          optionElement.classList.add("correct");
        }
      });
    }
  }, 1000);
};

let stopTimer = () => {
  if (timer !== null) {
    clearInterval(timer);
  }
};

function getQuestions() {
  let categoryQuestions =
    questions.find(
      (cat) =>
        cat.category.toLocaleLowerCase() === getCategory.toLocaleLowerCase()
    ).questions || [];
  if (categoryQuestions.length === 0) {
    console.log("No questions available for the selected category.");
    return null;
  }

  if (
    questionsHistory.length >=
    Math.min(categoryQuestions.length, numberOfQuestion)
  ) {
    return showResults();
  }

  const availableQuestion = categoryQuestions.filter(
    (_, index) => !questionsHistory.includes(index)
  );

  if (availableQuestion.length === 0) return null;

  let randomQuestion =
    availableQuestion[Math.floor(Math.random() * availableQuestion.length)];

  let randomQuestionIndex = categoryQuestions.indexOf(randomQuestion);

  questionsHistory.push(randomQuestionIndex);
  return randomQuestion;
}

function renderQuestions() {
  stopTimer();
  currentQuestion = getQuestions();

  if (!currentQuestion) {
    console.log("No more questions left or quiz is completed!");
    return; // Stop execution if currentQuestion is null or undefined
  }
  // console.log(currentQuestion);
  document.querySelector(".options-div").innerHTML = "";
  document.querySelector(".question-div").textContent =
    currentQuestion.question;
  questionStatus.innerHTML = ` <b>${questionsHistory.length} of ${numberOfQuestion} question</b>`;

  currentQuestion.options.forEach((option) => {
    let li = document.createElement("li");
    li.classList.add("options");
    let correctOption = currentQuestion.options[currentQuestion.correctOption];

    startTimer(correctOption);
    li.textContent = option;
    document.querySelector(".options-div").appendChild(li);
    li.addEventListener("click", () => {
      disableButtons();
      clearInterval(timer);
      // console.log(li.textContent);
      if (li.textContent == correctOption) {
        li.classList.add("correct");
        next.style.display = "block";
        correctAnswers++;
      } else {
        li.classList.add("in-correct");
        next.style.display = "block";
        document.querySelectorAll(".options").forEach((optionElement) => {
          if (optionElement.textContent === correctOption) {
            optionElement.classList.add("correct");
          }
        });
      }
    });
  });
}

let next = document.querySelector(".next");
next.style.display = "none";
next.addEventListener("click", () => {
  renderQuestions();
  next.style.display = "none";
  timerDiv.style.backgroundColor = "black";
});

function disableButtons() {
  document.querySelectorAll(".options").forEach((opt) => {
    opt.style.pointerEvents = "none";
  });
}
function startQuiz() {
  quizSelection.style.display = "none";
  questionesContainer.style.display = "block";
  getCategory = quizSelection.querySelector(".butt.active").textContent.trim();
  numberOfQuestion = parseInt(
    quizSelection.querySelector(".butt1.active").textContent
  );
  startTimer();
  renderQuestions();
}

function restart() {
  correctAnswers = 0;
  questionsHistory.length = 0;
  resultsContainer.style.display = "none";
  quizSelection.style.display = "flex";
}
document.querySelector(".tryAgain").addEventListener("click", () => {
  restart();
});
document.querySelector(".start").addEventListener("click", () => {
  startQuiz();
});

document.querySelectorAll(".butt, .butt1").forEach((button) => {
  button.addEventListener("click", () => {
    button.parentNode.querySelector(".active").classList.remove("active");
    button.classList.add("active");
  });
});
