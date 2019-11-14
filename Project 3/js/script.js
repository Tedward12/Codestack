

let injectValue = document.getElementById('inject');
let totalScore = 0;
let totalQuestions = 20;
let tQuestions = [];


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
                loadEasyPage(myArr);
            }
            else if (url == '../inject/hard.html') {
                loadHardPage(myArr);
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

//------------------------------------- Load Title Page -------------------------------------//

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

//------------------------------------- Load Menu Page -------------------------------------//

function loadMenuPage(info) {
    injectValue.innerHTML = info;

    let easyModeBtn = document.getElementById('easyMode');
    let hardModeBtn = document.getElementById('hardMode');
    let backBtn = document.getElementById('back');

    easyModeBtn.addEventListener('click', function (e) {
        loadHTML('../inject/game.html');
    });

    hardModeBtn.addEventListener('click', function (e) {
        loadHTML('../inject/hard.html');
    });

    backBtn.addEventListener('click', function (e) {
        loadHTML('../inject/title.html');
    });
}

//------------------------------------- Load Options Page -------------------------------------//

function loadOptionsPage(info) {
    injectValue.innerHTML = info;

    let backBtn = document.getElementById('back');

    backBtn.addEventListener('click', function (e) {
        loadHTML('../inject/title.html');
    });
}

//------------------------------------- Get Random Questions -------------------------------------//

function randomQuestions(q){
    //q is triviaQFull
    let qNum = 0;
    let rQuestions = [];

    for(let i=0; i<totalQuestions; i++)
    {
        //SHUFFLE
        qNum = Math.floor(Math.random()*q.length);
        //console.log(qNum);
        //add from eq! json array to triviaQ
        rQuestions.push(q[qNum]);
        //Remove the item from ezQ
        q.splice(qNum,1);
    }
    return rQuestions;
}

//------------------------------------- Load Easy Page -------------------------------------//

function loadEasyPage(info) {
    injectValue.innerHTML = info;

    let diff = '../data/data.json';
    let qNum = 0;
    let timer = 15;
    let interval;
    let triviaQ = [];


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
                interval = setInterval(updateTime, 1000);
                triviaQ = randomQuestions(tQuestions);
                loadQuestion();
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }

    function loadQuestion() {
        questions.className = "size35 col-12 bgWhite d-flex justify-content-center mb-0";
        counter.className = "size35 col-4 bgWhite d-flex justify-content-center";
        correct.className = "size35 col-4 bgWhite d-flex justify-content-center mb-0";

        questions.innerText = triviaQ[qNum].q;
        a1.innerText = triviaQ[qNum].a1;
        a2.innerText = triviaQ[qNum].a2;
        a3.innerText = triviaQ[qNum].a3;
        a4.innerText = triviaQ[qNum].a4;
    }

    function checkAnswer(answer) {
        if (answer === triviaQ[qNum].correct) {
            totalScore++;
        }
        correct.innerText = `${totalScore}/${totalQuestions}`;
        timer = 15;
        counter.innerText = timer;
        nextQuestion();
    }

    function nextQuestion() {
        qNum++;
        console.log(qNum);
        if (qNum < totalQuestions) {
            loadQuestion();
        }
        else {
            clearInterval(interval);
            loadHTML('../inject/endGame.html');
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

//------------------------------------- Load Hard Page -------------------------------------//

function loadHardPage(info) {
    injectValue.innerHTML = info;

    let diff = '../data/data.json';
    let qNum = 0;
    let timer = 5;
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
        timer = 5;
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
            loadEndGamePage();
        }
    }

    function updateTime() {
        timer--;
        if (timer == 0) {
            timer = 5;
            counter.innerText = timer;
            nextQuestion();
        }
        else {
            counter.innerText = timer;
        }
    }
    loadJSon(diff);
}

//------------------------------------- Load End Game Page -------------------------------------//

function loadEndGamePage(info) {
    injectValue.innerHTML = info;

    let correct = document.getElementById('endGameCorrect')
    let backBtn = document.getElementById('back');

    backBtn.addEventListener('click', function (e) {
        loadHTML('../inject/title.html');
        totalScore = 0;
    });
    correct.innerHTML = "col-12 bgWhite d-flex justify-content-center";
    correct.innerText = `${totalScore}/20`;
}

loadHTML('../inject/title.html');
