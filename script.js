

let ques = document.querySelector("#question-line");
let options = document.querySelector(".options");
let next = document.querySelector("#nxt");

let currentQuestionIndex = 0;
let score = 0;

let startQuiz = ()=>{
    currentQuestionIndex = 0;
    next.innerHTML = "Next";
    showQuestion();
}

let showQuestion = ()=>{
    resetGame();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1 ;
    ques.innerHTML = questionNo + ")  " +currentQuestion.question;

    currentQuestion.answer.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        options.appendChild(button);

        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

let resetGame = ()=>{
    next.style.visibility = "hidden" ;
    while (options.firstChild){
        options.removeChild(options.firstChild);
    }
};

let selectAnswer = (event)=>{
    const selectedBtn = event.target;
    console.log (selectedBtn)
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct")
        score++;
    }else { selectedBtn.classList.add("wrong")}

    Array.from(options.children).forEach(button=>{
        if (button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    }) ;
    
    next.style.visibility = "visible"
}



let showScore = ()=>{
    resetGame();
    if (score <=20){
        ques.innerHTML = `oops!<br>You have done ${score} correct out of ${questions.length}.<br> Better luck next time`
    }else {ques.innerHTML = `Well done bro !<br>You have done ${score} correct out of ${questions.length}.<br> Keep it up`}

}


let handleNextQuestion =()=>{
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else {
        showScore();
    }
}
next.addEventListener("click",()=>{
    // if(currentQuestionIndex<questions.length)
    currentQuestionIndex++;
    handleNextQuestion();
})
startQuiz();







