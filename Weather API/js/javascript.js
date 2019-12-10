













let injectValue = document.getElementById('inject');


function loadHTML(url) {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myArr = this.responseText;
            console.log(url);
            if (url == '../inject/main.html') {
                loadMainPage(myArr);
            }
            else if (url == '../inject/weather.html') {
                loadWeatherPage(myArr);
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
function loadMainPage(info) {
    injectValue.innerHTML = info;

    let cityBtn = document.getElementById('city');

    cityBtn.addEventListener('click', function (e) {
        loadHTML('../inject/Weather.html');
    });
}

function loadWeatherPage(info) {
    injectValue.innerHTML = info;

    let backBtn = document.getElementById('back');

    backBtn.addEventListener('click', function (e) {
        loadHTML('../inject/main.html');
    });
}


loadHTML('../inject/main.html');