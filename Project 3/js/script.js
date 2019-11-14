

let injectValue = document.getElementById('inject');

//----------------------------------------------------------------------------------------------------------------------------------------------//

//----------injecting HTML Pages-----------//

function loadHTML(url) {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myArr = this.responseText;
            console.log(url);
            if (url == '../inject/menu.html') {
                loadMenuPage(myArr);
            }
            else if (url == '../inject/options.html') {
                loadOptionsPage(myArr);
            }
            else if (url == '../inject/game.html') {
                loadGamePage(myArr);
            }
            else if (url == '../inject/title.html') {
                loadTitlePage(myArr);
            }
            else if (url == '../inject/endGame.html') {
                loadEndGamePage(myArr);
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

}
function loadTitlePage(info) {
    injectValue.innerHTML = info;

    let menuBtn = document.getElementById('menu');
    let optionsBtn = document.getElementById('options');

    menuBtn.addEventListener('click', function (e) {
        loadHTML('../inject/menu.html');
    });

    optionsBtn.addEventListener('click', function (e) {
        loadHTML('../inject/options.html');
    });
}

function loadMenuPage(info) {
    injectValue.innerHTML = info;

    let easyModeBtn = document.getElementById('easyMode');
    let hardModeBtn = document.getElementById('hardMode');
    let backBtn = document.getElementById('back');

    easyModeBtn.addEventListener('click', function (e) {
        loadHTML('../inject/game.html');
    });

    hardModeBtn.addEventListener('click', function (e) {
        loadHTML('../inject/game.html');
    });

    backBtn.addEventListener('click', function (e) {
        loadHTML('../inject/title.html');
    });
}

function loadOptionsPage(info) {
    injectValue.innerHTML = info;

}

function loadGamePage(info) {
    injectValue.innerHTML = info;

    let totalScore = 0;
    let incorrect = 0;
    let totalQuestions = 20;
    let tQuestions = [];
    let diff = '../data/data.json';
    let qNum = 0;
    let timer = 15;
    let interval;


    let correct = document.getElementById('correct');
    let counter = document.getElementById('timer');
    let questions = document.getElementById('question');
    let a1 = document.getElementById('a1');
    let a2 = document.getElementById('a2');
    let a3 = document.getElementById('a3');
    let a4 = document.getElementById('a4');

    a1.addEventListener('click', function (e) {
        checkAnswer(e.toElement.innerText);
    })
    a2.addEventListener('click', function (e) {
        checkAnswer(e.toElement.innerText);
    })
    a3.addEventListener('click', function (e) {
        checkAnswer(e.toElement.innerText);
    })
    a4.addEventListener('click', function (e) {
        checkAnswer(e.toElement.innerText);
    })

    function loadJSon(url) {
        let xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                tQuestions = JSON.parse(this.responseText).questions;
                console.log(tQuestions);
                interval = setInterval(updateTime, 1000)
                loadQuestion();
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }

    function loadQuestion() {
        questions.innerText = tQuestions[qNum].q;
        a1.innerText = tQuestions[qNum].a1;
        a2.innerText = tQuestions[qNum].a2;
        a3.innerText = tQuestions[qNum].a3;
        a4.innerText = tQuestions[qNum].a4;
    }

    function checkAnswer(answer) {
        if (answer === tQuestions[qNum].correct) {
            totalScore++;
        }
        else {
            incorrect++
        }
        correct.innerText = `${totalScore}/${totalQuestions}`;
        timer = 15;
        counter.innerText = timer;
        nextQuestion();
    }

    function nextQuestion() {
        if (qNum < totalQuestions) {
            qNum++;
            loadQuestion();
        }
        else {
            clearInterval(interval);
            alert("I have spoken");
        }
    }

    function updateTime() {
        timer--;
        if (timer == 0) {
            timer = 15;
            counter.innerText = timer;
            nextQuestion();
        }
        else {
            counter.innerText = timer;
        }
    }
    loadJSon(diff);
}

function loadEndGamePage(info) {
    injectValue.innerHTML = info;

}

loadHTML('../inject/title.html');
