const data = [
    {
        id: 1,
        question: "Which of these fish is actually a fish?",
        answers: [
            { answer: "swordfish", isCorrect: true },
            { answer: "jellyfish", isCorrect: false },
            { answer: "starfish", isCorrect: false },
            { answer: "crayfish", isCorrect: false },
        ],
    },
    {
        id: 2,
        question: "A flutter is a group of:",
        answers: [
            { answer: "bees", isCorrect: false },
            { answer: "penguins", isCorrect: false },
            { answer: "butterflies", isCorrect: true },
            { answer: "camels", isCorrect: false },
        ],
    },
    {
        id: 3,
        question: "A group of which animals is referred to as a wake?",
        answers: [
            { answer: "bats", isCorrect: false },
            { answer: "vultures", isCorrect: true },
            { answer: "ants", isCorrect: false },
        ],
    },
    
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".ques");
const ans = document.querySelector(".ans-list");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play-again")

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;

let selectedAnswer;

const playAgain = () => {
    qIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    showQuestion(qIndex);
  };
  

play.addEventListener("click", ()=>{
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";
    playAgain();
})

const showResult = () => {
    gameScreen.style.display = "none";
    resultScreen.style.display = "block";
    resultScreen.querySelector(".show").textContent = ` ${correctCount > 0 ? "Congratulations" : "Oops nice try!"}`
    resultScreen.querySelector(".correct-ans").textContent = `Correct ans ${correctCount}`;
    resultScreen.querySelector(".wrong-ans").textContent = `Wrong ans ${wrongCount}`;
    resultScreen.querySelector(".score").textContent = ` Score ${(correctCount - wrongCount) *10}  `;
}


const showQuestion = (qNumber) => {
    if(qIndex === data.length) return showResult();
    selectedAnswer = null;
    question.textContent = data[qNumber].question;
    ans.innerHTML = data[qNumber].answers
    .map(
        (item, index) =>
          `
    <div class="answer">
        <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
        <label  for="1">${item.answer}</label>
    </div>
    `
      )
      .join("");
      selectAnswer();
}

const selectAnswer = () => {
    ans.querySelectorAll("input").forEach((el) => {
        el.addEventListener("click", (e)=> {
            selectedAnswer = e.target.value;
        });
    });
}


const submitAnswer = () => {
    submit.addEventListener("click" , () => {
        if(selectedAnswer !== null){
           selectedAnswer === "true" ? correctCount++ : wrongCount++;
           qIndex++;
           showQuestion(qIndex);
        }else{
            alert("please choose answer");
        }
    })
}

showQuestion(qIndex);
submitAnswer();