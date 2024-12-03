
const inputMarks=document.getElementById("input")
const result=document.getElementById("result")
const nameInput=document.getElementById("nameInput")


const questions = [


    {

        question: "His education was a great <u>drain</u> on the family fund, 'drain' means : ",
        answers: [

            { text: "Burden", correct: true },
            { text: "Problem", correct: false },
            { text: "Trouble", correct: false },
            { text: "Hardship", correct: false }


        ]


    },

    {

        question: "Injecting carbolic acid was <u>abandoned </u> , 'abandoned' means : ",
        answers: [

            { text: "Imported", correct: false },
            { text: "Practiced", correct: false },
            { text: "Propagated", correct: false },
            { text: "Given Up", correct: true }


        ]

    },




    {

        question: "Fleming got a share in <u>legacy</u>, 'legacy' means : ",
        answers: [

            { text: "Prize", correct: false },
            { text: "Lottery", correct: false },
            { text: "Inheritence", correct: true },
            { text: "History", correct: false }


        ]





    },

    {

        question: "Their cultural plates were never <u>contaminated</u>, 'contaminated' means : ",
        answers: [

            { text: "Polluted", correct: true },
            { text: "Vague", correct: false },
            { text: "Clean", correct: false },
            { text: "Pure", correct: false }



        ]

    },

    {

        question: "Experiments <u>gave way</u> to the next, 'gave way' means : ",
        answers: [

            { text: "Compare", correct: false },
            { text: "Lead", correct: true },
            { text: "Fight", correct: false },
            { text: "Surrender", correct: false }



        ]

    },

    {

        question: "He <u>provoked</u> others to seek, 'provoked' means : ",
        answers: [

            { text: "Resisted", correct: false },
            { text: "Forbade", correct: false },
            { text: "Consulted", correct: false },
            { text: "Stimulated", correct: true }



        ]

    },


    {

        question: "Feming was not happy in the <u>limelight</u>, 'limelight' means : ",
        answers: [

            { text: "Fame", correct: true },
            { text: "Hospital", correct: false },
            { text: "Laboratory", correct: false },
            { text: "Darkness", correct: false }



        ]

    },

    
    {

        question: "This particular mould commonly <u>breeds</u> on damp bread, 'breeds' means : ",
        answers: [

            { text: "Stops", correct: false },
            { text: "Stays", correct: false },
            { text: "Grows", correct: true },
            { text: "Runs", correct: false }



        ]

    },


    {

        question: "<u>Presumably</u> the spore of the mould, 'presumably' means : ",
        answers: [

            { text: "Definitely", correct: false },
            { text: "Likely", correct: true },
            { text: "Surely", correct: false },
            { text: "Certainly", correct: false }



        ]

    },

    {

        question: "The mould on a meat broth, 'broth' means : ",
        answers: [

            { text: "Tray", correct: false },
            { text: "Soup", correct: true },
            { text: "Plate", correct: false },
            { text: "Pot", correct: false }



        ]

    }





];



console.log(questions)
console.log(questions[0].answers[0].correct)


const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");


let currentQuestionIndex=0;
let score=0;





function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion()
    result.style.display="none";
    nameInput.style.display="none";
    
    
    
}


function showQuestion(){

    resetState();
    result.style.display="none";
    nameInput.style.display="none";

    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo + "." + currentQuestion.question;


    currentQuestion.answers.forEach(answer=>{

        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button)

        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer)

    })
}





function resetState(){
    result.style.display="none";
    nameInput.style.display="none";
    nextButton.style.display="none";
    while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild)
    }
}



function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    // selectedBtn.classList.add("locked");
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled=true;
    });

    nextButton.style.display="block";
    

}


function showScore(){
    resetState();
    result.style.display="block";
    nameInput.style.display="block";
    questionElement.innerHTML=`You Scored ${score} out of ${questions.length}!!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="none";  // agr ap chahty ky score lock ho jaye aur student play again py click kar ky dubara sa test dy paye
    // nextButton.style.display="block";
   
    inputMarks.value=score;

}


function handleNextButton(){
    currentQuestionIndex++;
    
    if(currentQuestionIndex<questions.length){
        showQuestion()
    } else{

        showScore()
        inputMarks.value=score;

    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton()
    } else{startQuiz()}
    
    // is else ko remove kar dain  agr ap chahty ky score lock ho jaye aur student play again py click kar ky dubara sa test dy paye

   
})



startQuiz();







function showConfirmation() {
    alert("Your result has been submitted!");
  }





























// let timerInterval;
// function startTimer() {
//   clearInterval(timerInterval);
//   let secondsRemaining = 20;
  
//   displayTime();

//   timerInterval = setInterval(() => {
//     secondsRemaining--;
//     displayTime();
//     if (secondsRemaining <= 0) {
//       clearInterval(timerInterval);
//       document.body.style.backgroundColor = "red";
//       showScore();
//     }
//   }, 1000);

//   function displayTime() {
//     const minutes = Math.floor(secondsRemaining / 60);
//     const seconds = secondsRemaining % 60;
//     document.getElementById('timer').innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//   }
// }




























