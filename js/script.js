const questionsElm = document.getElementById("question");
const btnTrue = document.getElementById("btn-true");
const btnFalse = document.getElementById("btn-false");
const correctElm = document.getElementById("correct");
const wrongElm = document.getElementById("wrong");
const gameOver = document.getElementById("game-over");
const mainElm = document.getElementById("main");
const score = document.getElementById("score");
const btnRestart = document.getElementById("btnRestart");
const factsElm = document.getElementById("factsElm");
const factsElmtwo = document.getElementById("factsElm-two");

const questions = [
  {
    question: "James Naismith invented basketball",
    answer: true
  },
  {
    question: "Basketball was played with a different ball",
    answer: true
  },
  {
    question: "any type of relationship with an opponent was never allowed. However, such offenses were never considered fouls until 1969",  
    answer: false
  },
  {
    question: "Dribbling wasn't allowed prior to 1897",
    answer: true
  }, 
  {
    question: "Referees used to wear pink shorts", 
    answer: false
  },
  {
    question: "For a while, the total number of players was a default of 18",  
    answer: true
  },
  {
    question: "Shouldering, holding, pushing, tripping or otherwise striking an opponent was never allowed. However, such offenses were never considered fouls until 1910",  
    answer: true
  },
  {
    question: "Players were not allowed to have sex with their wives 24 hours before Basketball season started",  
    answer: false
  },
  {
    question: "the 24-second shot clock wasn’t instituted until 1954",  
    answer: true
  },
  {
    question: "Naismith proposed two 15-minute halves, with five minutes of rest in between.",  
    answer: true
  },
  {
    question: "The 1979 NCAA tournament was played with a blue colored ball",  
    answer: false
  },
  {
    question: "Possession rules changed in 1913",  
    answer: true
  },
  {
    question: "Referees paid fines for wearing t-shirts with a topless female logo",  
    answer: false
  },
  {
    question: "the slam dunk, was banned just before the 1967-1968 season until the 1976-1977 season.",  
    answer: true
  },
  {
    question: "Players using an Apple watch were banned just before the 2002-2005 season until the 2006-2009 season.",  
    answer: false
  },
  {
    question: "Michael Jordan paid fines for wearing his shoes",  
    answer: true
  },
  {
    question: "Free throws, were banned just before the 1990-1992 season until the 1997-1999 season.",  
    answer: false
  },
]
let currentIndex = 0;
let wrongCount = 0;
let correctCount = 0;
let finished = false;

//this will render / post (print) Quiz questions to the DOME
const renderQuestion = () => {
  questionsElm.textContent = questions[currentIndex].question
};
//this will render the Score
const renderScores = () => {
  wrongElm.textContent = wrongCount;
  correctElm.textContent = correctCount;
};

const restartGame = ()=> {
  currentIndex = 0;
  wrongCount = 0;
  correctCount = 0;
  finished = false;
  mainElm.classList.remove("hide")
  gameOver.classList.add("hide")
  factsElm.classList.add("hide")
  factsElmtwo.classList.remove("hide")
  renderQuestion();
  renderScores();
}

const renderGameover = ()=> {
  mainElm.classList.add("hide");
  gameOver.classList.remove("hide");
  factsElmtwo.classList.add("hide");
  factsElm.classList.remove("hide");
  
  score.textContent = ((correctCount / questions.length) * 100).toFixed(2) + "%"; 
  
}

const gameLogic = (event) => {
  if (finished) return;
  const string = event.target.getAttribute("data-boolean");
  const userAnswer = string === "true";
  const check = questions[currentIndex].answer === userAnswer;
  
  if (check){
    correctCount++
  }
  if(!check){
    wrongCount++
  }

renderScores();

  if (currentIndex === (questions.length - 1)) {
    finished = true;
    renderGameover()
    return;
  }
  currentIndex++;
  renderQuestion();
  
};

btnTrue.addEventListener("click", gameLogic);
btnFalse.addEventListener("click", gameLogic);
btnRestart.addEventListener("click", restartGame);

renderScores();
renderQuestion();