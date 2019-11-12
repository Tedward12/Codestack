



let totalScore = 0;
let incorrect = 0;
let totalQuestions = 20;
let tQuestions = [];
let diff='../data/data.json';
let qNum = 0;
let timer = 5;
let interval;


let correct = document.getElementById('correct');
let counter = document.getElementById('counter');
let questions = document.getElementById('questions');
let a1 = document.getElementById('a1');
let a2 = document.getElementById('a2');
let a3 = document.getElementById('a3');
let a4 = document.getElementById('a4');

let buttons = document.getElementsByClassName('btn');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (e) {
        checkAnswer(e.toElement.innerText);
    })
}

function loadJSon(url) {
    let xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            tQuestions = JSON.parse(this.responseText).easy;
            console.log(tQuestions);
            interval = setInterval(updateTime, 1000)
            loadQuestion();
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function loadQuestion(){
    questions.innerText=tQuestions[qNum].Q;
    a1.innerText = tQuestions[qNum].A1;
    a2.innerText = tQuestions[qNum].A2;
    a3.innerText = tQuestions[qNum].A3;
    a4.innerText = tQuestions[qNum].A4;
}

function checkAnswer(answer){
    if(answer === tQuestions[qNum].C){
        totalScore++;
    }
    else{
        incorrect++
    }
    correct.innerText=`${totalScore}/${totalQuestions}`;
    timer=5;
    counter.innerText=timer;
    nextQuestion();
}

function nextQuestion(){
    if(qNum<totalQuestions){
        qNum++;
        loadQuestion();
    }
    else{
        clearInterval(interval);
        alert("I have spoken");
    }
}

function updateTime(){
    timer--;
    if(timer==0){
        timer = 5;
        counter.innerText = timer;
        nextQuestion();
    }
    else{
        counter.innerText=timer;
    }
}

loadJSon(diff);

//----------------------------------------------------------------------------------------------------------------------------------------------//
//---------Set and Get Variables----------//

let injectValue = document.getElementById('inject');
let menuBtn = document.getElementById('menu');
let optionsBtn = document.getElementById('options');
let titleBtn = document.getElementById('title');
let easyModeBtn = document.getElementById('easyMode');
let hardModeBtn = document.getElementById('hardMode');

//----------Add Event Listeners---------//
domBtn.addEventListener('click', function (e) {
    loadHTML('../inject/menu.html');
});

randomBtn.addEventListener('click', function (e) {
    loadHTML('../inject/options.html');
});

directoryBtn.addEventListener('click', function (e) {
    loadHTML('../inject/easyMode.html');
});

directoryBtn.addEventListener('click', function (e) {
    loadHTML('../inject/hardMode.html');
});
//----------injecting HTML Pages-----------//

function loadHTML(url) {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //When Injecting HTML, you don't need a JSON.parse
            let myArr = this.responseText;
            //conditional statement to load the proper page items
            if (url == '../inject/menu.html') {
                loadDomPage(myArr);
            }
            if (url == '../inject/options.html') {
                loadDomPage(myArr);
            }
            if (url == '../inject/easyMode.html') {
                loadDomPage(myArr);
            }
            if (url == '../inject/hardMode.html') {
                loadDomPage(myArr);
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

}

//-----------Loading Pages -----------------//

//Dom Manipulation Page
function loadDomPage(info) {
    //Injecting your html into the injectValue 
    injectValue.innerHTML = info;

}