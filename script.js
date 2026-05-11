function acidBase(){

    document.getElementById("result").innerHTML =
    "Neutralization Reaction!";

    document.getElementById("liquid").style.height =
    "100%";

    document.getElementById("liquid").style.background =
    "cyan";

}

function litmusTest(){

    document.getElementById("result").innerHTML =
    "Litmus Turned Red!";

    document.getElementById("liquid").style.height =
    "100%";

    document.getElementById("liquid").style.background =
    "red";

}

function copperTest(){

    document.getElementById("result").innerHTML =
    "Copper Sulfate Reaction!";

    document.getElementById("liquid").style.height =
    "100%";

    document.getElementById("liquid").style.background =
    "blue";

}
function showElement(name, info){

    document.getElementById("elementName").innerHTML =
    name;

    document.getElementById("elementInfo").innerHTML =
    info;

}
const quizData = [

{
    question: "What is formed when acid reacts with base?",

    options: [
        "Hydrogen",
        "Salt and Water",
        "Oxygen",
        "Carbon Dioxide"
    ],

    answer: 1
},

{
    question: "Which gas do plants absorb?",

    options: [
        "Oxygen",
        "Nitrogen",
        "Carbon Dioxide",
        "Hydrogen"
    ],

    answer: 2
},

{
    question: "What is the chemical formula of water?",

    options: [
        "CO2",
        "H2O",
        "NaCl",
        "O2"
    ],

    answer: 1
}

];

let currentQuestion = 0;
let quizScore = 0;

function loadQuestion(){

    document.getElementById("question").innerHTML =
    quizData[currentQuestion].question;

    document.getElementById("btn0").innerHTML =
    quizData[currentQuestion].options[0];

    document.getElementById("btn1").innerHTML =
    quizData[currentQuestion].options[1];

    document.getElementById("btn2").innerHTML =
    quizData[currentQuestion].options[2];

    document.getElementById("btn3").innerHTML =
    quizData[currentQuestion].options[3];

}

function checkQuizAnswer(selected){

    if(selected == quizData[currentQuestion].answer){

        quizScore++;

    }

    currentQuestion++;

    if(currentQuestion < quizData.length){

        loadQuestion();

    }

    else{

        document.getElementById("question").innerHTML =
        "Quiz Finished!";

        document.querySelector(".quiz-buttons").style.display =
        "none";

        document.getElementById("score").innerHTML =
        "Your Score: " + quizScore + "/" + quizData.length;

    }

}

function restartQuiz(){

    currentQuestion = 0;
    quizScore = 0;

    document.querySelector(".quiz-buttons").style.display =
    "flex";

    document.getElementById("score").innerHTML = "";

    loadQuestion();

}

loadQuestion();
function login(){

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById("password").value;

    if(username == "student" &&
       password == "1234"){

        document.getElementById("loginResult").innerHTML =
        "Login Successful!";

    }

    else{

        document.getElementById("loginResult").innerHTML =
        "Invalid Username or Password";

    }

}
function toggleTheme(){

    document.body.classList.toggle("light-mode");

}
function askBot(){

    let question =
    document.getElementById("userQuestion")
    .value
    .toLowerCase();

    let response = "";

    if(question.includes("acid")){

        response =
        "Acids donate hydrogen ions.";

    }

    else if(question.includes("base")){

        response =
        "Bases accept hydrogen ions.";

    }

    else if(question.includes("water")){

        response =
        "Water formula is H2O.";

    }

    else if(question.includes("salt")){

        response =
        "Salt is formed during neutralization.";

    }

    else{

        response =
        "I am still learning chemistry!";

    }

    document.getElementById("botReply")
    .innerHTML = response;

}