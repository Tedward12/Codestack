






let cityData = [];
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
loadHTML('../inject/main.html');
//--------------------------------------------------------------------------------------------------//
function loadMainPage(info) {
    injectValue.innerHTML = info;
    let searchBtn = document.getElementById('searchBtn');

    if (localStorage.getItem('weatherData')) {
        cityData = JSON.parse(localStorage.getItem('weatherData'));
        PopulateCityList();
    }

    searchBtn.addEventListener('click', function (e) {
        let searchedItem = document.getElementById('searchTxt');
        let url_pt1 = "https://api.openweathermap.org/data/2.5/weather?q="
        let url_city_pt2 = searchedItem.value;
        let url_temp_pt3 = "&units=imperial";
        let url_key_pt4 = "&appid=99649a8b829f6ea98a24e0ef1fd6b301";
        let fullURL = url_pt1 + url_city_pt2 + url_temp_pt3 + url_key_pt4;
        loadJSON(fullURL);
        searchedItem.value = null;
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
//--------------------------------------------------------------------------------------------------//



//---------Load JSON Weather File--------//
function loadJSON(URL) {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myArr = JSON.parse(this.responseText);
            let obj = {
                city: myArr.name,
                temp: myArr.main.temp,
                weather: myArr.weather[0].main,
                url: URL
            };
            cityData.push(obj);
            SaveData();
            getWeather(myArr);
            PopulateCityList();
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
//--------------------------------------------------------------------------------------------------//

function PopulateCityList() {
    let cityInput = document.getElementById('cityInput');
    cityInput.innerHTML = '';
    /* <div class="row mt-5 size30 bordered">
        <div id="city" class="col-5 bordered"><a class="mb-0">Stockton</a></div>
        <div class="col-1 bordered d-flex justify-content-center">
            <p class="mb-0">60°F</p>
        </div>
        <div id="weather" class="col-5 rain bordered"></div>
        <div id="delete" class="col-1 bordered px-0"><button type="button" class="btn-danger btn-block mb-0">DEL</button></div>
    </div> */

    for (let city of cityData) {
        let row = document.createElement('div');
        let colCity = document.createElement('div');
        let colTemp = document.createElement('div');
        let colWeather = document.createElement('div');
        let colDelete = document.createElement('div');
        let pCity = document.createElement('p');
        let pTemp = document.createElement('p');
        let deleteBtn = document.createElement('button');

        row.setAttribute('class', 'row size30 bordered');
        colCity.setAttribute('class', 'col-5 bordered');
        colTemp.setAttribute('class', 'col-1 bordered d-flex justify-content-center');
        colWeather.setAttribute('class', 'col-5 bordered');
        colDelete.setAttribute('class', 'col-1 bordered px-0');
        pCity.setAttribute('class', 'mb-0');
        pTemp.setAttribute('class', 'mb-0');
        deleteBtn.setAttribute('class', 'btn-danger btn-block mb-0');
        deleteBtn.setAttribute('type', 'button');

        deleteBtn.innerText = 'DEL';

        if (city.weather == 'Clear') {
            colWeather.setAttribute('class', 'col-5 clear bordered')
        }
        if (city.weather == 'Sunny') {
            colWeather.setAttribute('class', 'col-5 clear bordered')
        }
        else if (city.weather == 'Clouds') {
            colWeather.setAttribute('class', 'col-5 cloudy bordered')
        }
        else if (city.weather == 'Lightning') {
            colWeather.setAttribute('class', 'col-5 lightning bordered')
        }
        else if (city.weather == 'Thunder') {
            colWeather.setAttribute('class', 'col-5 lightning bordered')
        }
        else if (city.weather == 'Mist') {
            colWeather.setAttribute('class', 'col-5 misty bordered')
        }
        else if (city.weather == 'Haze') {
            colWeather.setAttribute('class', 'col-5 misty bordered')
        }
        else if (city.weather == 'Fog') {
            colWeather.setAttribute('class', 'col-5 misty bordered')
        }
        else if (city.weather == 'Rain') {
            colWeather.setAttribute('class', 'col-5 rain bordered')
        }
        else if (city.weather == 'Drizzle') {
            colWeather.setAttribute('class', 'col-5 rain bordered')
        }
        else if (city.weather == 'Snow') {
            colWeather.setAttribute('class', 'col-5 snow bordered')
        }
        else if (city.weather == 'Hail') {
            colWeather.setAttribute('class', 'col-5 snow bordered')
        }

        pCity.innerText = city.city;
        pTemp.innerText = Math.round(city.temp)+"°F";
        //pTemp.innerText = getCity(city.url);

        colCity.addEventListener('click', function(e){
            loadHTML('../inject/weather.html');
        });

        deleteBtn.addEventListener('click', function (e) {
            let div = this.parentElement;
            div.style.display = "none";
            cityData.splice(city,1);
            SaveData();
            PopulateCityList();
        });

        colCity.appendChild(pCity);
        colTemp.appendChild(pTemp);
        colDelete.appendChild(deleteBtn);
        row.appendChild(colCity);
        row.appendChild(colTemp);
        row.appendChild(colWeather);
        row.appendChild(colDelete);
        cityInput.appendChild(row);
    }
}

function SaveData() {
    localStorage.setItem('weatherData', JSON.stringify(cityData));
}

// function GetTemp(URL) {
//     let xmlhttp = new XMLHttpRequest();
//     console.log(URL);
//     //Put your weather API URL and KEY here
//     //let url = "";
//     xmlhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             myArr = JSON.parse(this.responseText);
//             console.log(myArr.main.temp);
//             return myArr.main.temp;
//         }
//     };
//     xmlhttp.open("GET", URL, true);
//     xmlhttp.send();
// }