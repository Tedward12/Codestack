


let firstNameText = document.getElementById('firstName');
let lastNameText = document.getElementById('lastName');
let nicknameText = document.getElementById('nickname');
let emailText = document.getElementById('email');
let slackNameText = document.getElementById('slackName');
let hobbyText = document.getElementById('hobby');
let contactText = document.getElementById('contact');
let firstBtn = document.getElementById('first');
let lastBtn = document.getElementById('last');
let randomBtn = document.getElementById('random');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');



let xmlhttp = new XMLHttpRequest();
let url = "../data/data.json";

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let myArr = JSON.parse(this.responseText);
        studentInfo(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

let students = [];
let studentsObj = [];

function studentInfo(info) {
    console.log(info.students);
    for (let i = 0; i < info.students.length; i++) {
        let nFO = {
            "firstName": info.students[i].firstName,
            "lastName": info.students[i].lastName,
            "nickName": info.students[i].nickName,
            "email": info.students[i].email,
            "slack": info.students[i].slack,
            "hobbies": info.students[i].hobbies,
            "contact": info.students[i].contact
        };
        studentsObj.push(nFO);
    }
}

let studentNum = 0;

randomBtn.addEventListener('click', function (e) {
    studentNum = RandomNum();
        firstNameText.innerText = studentsObj[studentNum - 1].firstName;
        lastNameText.innerText = studentsObj[studentNum - 1].lastName;
        nicknameText.innerText = studentsObj[studentNum - 1].nickName;
        emailText.innerText = studentsObj[studentNum - 1].email;
        slackNameText.innerText = studentsObj[studentNum - 1].slack;
        hobbyText.innerText = studentsObj[studentNum - 1].hobbies;
        contactText.innerText = studentsObj[studentNum - 1].contact;
});

function RandomNum() {
    let rNum = 0;
    rNum = Math.trunc(Math.random() * 23);
    return rNum;
}