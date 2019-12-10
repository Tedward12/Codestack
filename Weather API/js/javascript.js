






//--------------------------------------- Inject Pages -----------------------------------------//
let injectValue = document.getElementById('inject');
let body = document.getElementById('body');


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
    let searchBtn = document.getElementById('searchBtn');

    ///------load your variables for all to use-------//
    //-------------Add Event Listeners------------//
    searchBtn.addEventListener('click', function (e) {
        let searchedItem = document.getElementById('searchTxt');
        let url_pt1 = "https://api.openweathermap.org/data/2.5/weather?q="
        let url_city_pt2 = searchedItem.value;
        let url_temp_pt3 = "&units=imperial";
        let url_key_pt4 = "&appid=99649a8b829f6ea98a24e0ef1fd6b301";
        let fullURL = url_pt1 + url_city_pt2 + url_temp_pt3 + url_key_pt4;
        loadJSON(fullURL);
        // searchedItem.value = null;
    });

    let cityBtn = document.getElementById('city');
    body.className = "";
    cityBtn.addEventListener('click', function (e) {
        loadHTML('../inject/weather.html');
    });
}

function loadWeatherPage(info) {
    injectValue.innerHTML = info;

    let backBtn = document.getElementById('back');
    body.className = "rain-bg";
    backBtn.addEventListener('click', function (e) {
        loadHTML('../inject/main.html');
    });
}

loadHTML('../inject/main.html');




//---------Load Your JSON Weather File--------//
function loadJSON(URL) {
    let xmlhttp = new XMLHttpRequest();
    //Put your weather API URL and KEY here
    //let url = "";
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myArr = JSON.parse(this.responseText);
            getWeather(myArr);
        }
        else if (this.readyState == 4 && this.status != 200) {
            alert('Input not available.')
        }
    };
    xmlhttp.open("GET", URL, true);
    xmlhttp.send();
}
function getWeather(info) {
    console.log(info);
}