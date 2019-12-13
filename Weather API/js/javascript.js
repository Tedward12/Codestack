






let cityData = [];
let forecastData = [];
let counter = 0;


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
    body.className = "";
    let searchBtn = document.getElementById('searchBtn');
    let searchedItem = document.getElementById('searchTxt');

    if (localStorage.getItem('weatherData')) {
        cityData = JSON.parse(localStorage.getItem('weatherData'));
        PopulateCityList();
    }
    // searchedItem.addEventListener('keypress', function(e){
    //     if(e.keyCode==13){
    //         let url_pt1 = "https://api.openweathermap.org/data/2.5/weather?q="
    //         let url_city_pt2 = searchedItem.value;
    //         let url_temp_pt3 = "&units=imperial";
    //         let url_key_pt4 = "&appid=99649a8b829f6ea98a24e0ef1fd6b301";
    //         let fullURL = url_pt1 + url_city_pt2 + url_temp_pt3 + url_key_pt4;
    //         loadJSON(fullURL);
    //         searchedItem.value = null;
    //     }
    // });
    searchBtn.addEventListener('click', function (e) {
        let url_pt1 = "https://api.openweathermap.org/data/2.5/weather?q="
        let url_city_pt2 = searchedItem.value;
        let url_temp_pt3 = "&units=imperial";
        let url_key_pt4 = "&appid=99649a8b829f6ea98a24e0ef1fd6b301";
        let fullURL = url_pt1 + url_city_pt2 + url_temp_pt3 + url_key_pt4;
        loadJSON(fullURL);
        searchedItem.value = null;
    });
}

function loadWeatherPage(info, ) {
    injectValue.innerHTML = info;
    let backBtn = document.getElementById('back');
    backBtn.addEventListener('click', function (e) {
        loadHTML('../inject/main.html');
        forecastData = [];
    });
    console.log(forecastData);

    let forecastCity = document.getElementById('forecastCity');
    let forecastTemp = document.getElementById('forecastTemp');
    let forecastWeather = document.getElementById('forecastWeather');
    let forecastDay1 = document.getElementById('forecastDay1');
    let forecastDay2 = document.getElementById('forecastDay2');
    let forecastDay3 = document.getElementById('forecastDay3');
    let forecastDay4 = document.getElementById('forecastDay4');
    let forecastDay5 = document.getElementById('forecastDay5');
    let forecastTemp1 = document.getElementById('forecastTemp1');
    let forecastTemp2 = document.getElementById('forecastTemp2');
    let forecastTemp3 = document.getElementById('forecastTemp3');
    let forecastTemp4 = document.getElementById('forecastTemp4');
    let forecastTemp5 = document.getElementById('forecastTemp5');

    forecastCity.innerText = forecastData[0].city;

    forecastTemp.innerText = Math.round(cityData[counter].temp) + '°F';

    forecastWeather.innerText = forecastData[0].weather1;
    forecastTemp1.innerText = forecastData[0].temp1 + '°F';
    forecastTemp2.innerText = forecastData[0].temp2 + '°F';
    forecastTemp3.innerText = forecastData[0].temp3 + '°F';
    forecastTemp4.innerText = forecastData[0].temp4 + '°F';
    forecastTemp5.innerText = forecastData[0].temp5 + '°F';

    console.log(forecastWeather);
    if (forecastData[0].weather1 == 'Clear') {
        forecastDay1.setAttribute('src', 'assets/clear.jpg')
        body.className = "clear-bg";
    }
    else if (forecastData[0].weather1 == 'Sunny') {
        forecastDay1.setAttribute('src', 'assets/clear.jpg')
        body.className = "clear-bg";
    }
    else if (forecastData[0].weather1 == 'Clouds') {
        forecastDay1.setAttribute('src', 'assets/cloudy.jpg')
        body.className = "cloudy-bg";
    }
    else if (forecastData[0].weather1 == 'Lightning') {
        forecastDay1.setAttribute('src', 'assets/lightning.jpg')
        body.className = "lightning-bg";
    }
    else if (forecastData[0].weather1 == 'Thunder') {
        forecastDay1.setAttribute('src', 'assets/lightning.jpg')
        body.className = "lightning-bg";
    }
    else if (forecastData[0].weather1 == 'Mist') {
        forecastDay1.setAttribute('src', 'assets/misty.jpg')
        body.className = "misty-bg";
    }
    else if (forecastData[0].weather1 == 'Haze') {
        forecastDay1.setAttribute('src', 'assets/misty.jpg')
        body.className = "misty-bg";
    }
    else if (forecastData[0].weather1 == 'Fog') {
       forecastDay1.setAttribute('src', 'assets/misty.jpg')
       body.className = "misty-bg";
    }
    else if (forecastData[0].weather1 == 'Rain') {
        forecastDay1.setAttribute('src', 'assets/rain.jpg')
        body.className = "rain-bg";
    }
    else if (forecastData[0].weather1 == 'Drizzle') {
       forecastDay1.setAttribute('src', 'assets/rain.jpg')
       body.className = "rain-bg";
    }
    else if (forecastData[0].weather1 == 'Snow') {
        forecastDay1.setAttribute('src', 'assets/snow.jpg')
        body.className = "snow-bg";
    }
    else if (forecastData[0].weather1 == 'Hail') {
       forecastDay1.setAttribute('src', 'assets/snow.jpg')
       body.className = "snow-bg";
    }

    if (forecastData[0].weather2 == 'Clear') {
        forecastDay2.setAttribute('src', 'assets/clear.jpg')
    }
    else if (forecastData[0].weather2 == 'Sunny') {
        forecastDay2.setAttribute('src', 'assets/clear.jpg')
    }
    else if (forecastData[0].weather2 == 'Clouds') {
        forecastDay2.setAttribute('src', 'assets/cloudy.jpg')
    }
    else if (forecastData[0].weather2 == 'Lightning') {
        forecastDay2.setAttribute('src', 'assets/lightning.jpg')
    }
    else if (forecastData[0].weather2 == 'Thunder') {
        forecastDay2.setAttribute('src', 'assets/lightning.jpg')
    }
    else if (forecastData[0].weather2 == 'Mist') {
        forecastDay2.setAttribute('src', 'assets/misty.jpg')
    }
    else if (forecastData[0].weather2 == 'Haze') {
        forecastDay2.setAttribute('src', 'assets/misty.jpg')
    }
    else if (forecastData[0].weather2 == 'Fog') {
       forecastDay2.setAttribute('src', 'assets/misty.jpg')
    }
    else if (forecastData[0].weather2 == 'Rain') {
        forecastDay2.setAttribute('src', 'assets/rain.jpg')
    }
    else if (forecastData[0].weather2 == 'Drizzle') {
       forecastDay2.setAttribute('src', 'assets/rain.jpg')
    }
    else if (forecastData[0].weather2 == 'Snow') {
        forecastDay2.setAttribute('src', 'assets/snow.jpg')
    }
    else if (forecastData[0].weather2 == 'Hail') {
       forecastDay2.setAttribute('src', 'assets/snow.jpg')
    }

    if (forecastData[0].weather3 == 'Clear') {
        forecastDay3.setAttribute('src', 'assets/clear.jpg')
    }
    else if (forecastData[0].weather3 == 'Sunny') {
        forecastDay3.setAttribute('src', 'assets/clear.jpg')
    }
    else if (forecastData[0].weather3 == 'Clouds') {
        forecastDay3.setAttribute('src', 'assets/cloudy.jpg')
    }
    else if (forecastData[0].weather3 == 'Lightning') {
        forecastDay3.setAttribute('src', 'assets/lightning.jpg')
    }
    else if (forecastData[0].weather3 == 'Thunder') {
        forecastDay3.setAttribute('src', 'assets/lightning.jpg')
    }
    else if (forecastData[0].weather3 == 'Mist') {
        forecastDay3.setAttribute('src', 'assets/misty.jpg')
    }
    else if (forecastData[0].weather3 == 'Haze') {
        forecastDay3.setAttribute('src', 'assets/misty.jpg')
    }
    else if (forecastData[0].weather3 == 'Fog') {
       forecastDay3.setAttribute('src', 'assets/misty.jpg')
    }
    else if (forecastData[0].weather3 == 'Rain') {
        forecastDay3.setAttribute('src', 'assets/rain.jpg')
    }
    else if (forecastData[0].weather3 == 'Drizzle') {
       forecastDay3.setAttribute('src', 'assets/rain.jpg')
    }
    else if (forecastData[0].weather3 == 'Snow') {
        forecastDay3.setAttribute('src', 'assets/snow.jpg')
    }
    else if (forecastData[0].weather3 == 'Hail') {
       forecastDay3.setAttribute('src', 'assets/snow.jpg')
    }

    if (forecastData[0].weather4 == 'Clear') {
        forecastDay4.setAttribute('src', 'assets/clear.jpg')
    }
    else if (forecastData[0].weather4 == 'Sunny') {
        forecastDay4.setAttribute('src', 'assets/clear.jpg')
    }
    else if (forecastData[0].weather4 == 'Clouds') {
        forecastDay4.setAttribute('src', 'assets/cloudy.jpg')
    }
    else if (forecastData[0].weather4 == 'Lightning') {
        forecastDay4.setAttribute('src', 'assets/lightning.jpg')
    }
    else if (forecastData[0].weather4 == 'Thunder') {
        forecastDay4.setAttribute('src', 'assets/lightning.jpg')
    }
    else if (forecastData[0].weather4 == 'Mist') {
        forecastDay4.setAttribute('src', 'assets/misty.jpg')
    }
    else if (forecastData[0].weather4 == 'Haze') {
        forecastDay4.setAttribute('src', 'assets/misty.jpg')
    }
    else if (forecastData[0].weather4 == 'Fog') {
       forecastDay4.setAttribute('src', 'assets/misty.jpg')
    }
    else if (forecastData[0].weather4 == 'Rain') {
        forecastDay4.setAttribute('src', 'assets/rain.jpg')
    }
    else if (forecastData[0].weather4 == 'Drizzle') {
       forecastDay4.setAttribute('src', 'assets/rain.jpg')
    }
    else if (forecastData[0].weather4 == 'Snow') {
        forecastDay4.setAttribute('src', 'assets/snow.jpg')
    }
    else if (forecastData[0].weather4 == 'Hail') {
       forecastDay4.setAttribute('src', 'assets/snow.jpg')
    }

    if (forecastData[0].weather5 == 'Clear') {
        forecastDay5.setAttribute('src', 'assets/clear.jpg')
    }
    else if (forecastData[0].weather5 == 'Sunny') {
        forecastDay5.setAttribute('src', 'assets/clear.jpg')
    }
    else if (forecastData[0].weather5 == 'Clouds') {
        forecastDay5.setAttribute('src', 'assets/cloudy.jpg')
    }
    else if (forecastData[0].weather5 == 'Lightning') {
        forecastDay5.setAttribute('src', 'assets/lightning.jpg')
    }
    else if (forecastData[0].weather5 == 'Thunder') {
        forecastDay5.setAttribute('src', 'assets/lightning.jpg')
    }
    else if (forecastData[0].weather5 == 'Mist') {
        forecastDay5.setAttribute('src', 'assets/misty.jpg')
    }
    else if (forecastData[0].weather5 == 'Haze') {
        forecastDay5.setAttribute('src', 'assets/misty.jpg')
    }
    else if (forecastData[0].weather5 == 'Fog') {
       forecastDay5.setAttribute('src', 'assets/misty.jpg')
    }
    else if (forecastData[0].weather5 == 'Rain') {
        forecastDay5.setAttribute('src', 'assets/rain.jpg')
    }
    else if (forecastData[0].weather5 == 'Drizzle') {
       forecastDay5.setAttribute('src', 'assets/rain.jpg')
    }
    else if (forecastData[0].weather5 == 'Snow') {
        forecastDay5.setAttribute('src', 'assets/snow.jpg')
    }
    else if (forecastData[0].weather5 == 'Hail') {
       forecastDay5.setAttribute('src', 'assets/snow.jpg')
    }

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
            PopulateCityList();
        }
        else if (this.readyState == 4 && this.status != 200) {
            alert('Input not available.')
        }
    };
    xmlhttp.open("GET", URL, true);
    xmlhttp.send();
}



function loadForecast(URL){
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myArr = JSON.parse(this.responseText);
            getForecast(myArr)
            let objForecast = {
                city: myArr.city.name,
                temp1: Math.round(myArr.list[0].main.temp),
                temp2: Math.round(myArr.list[8].main.temp),
                temp3: Math.round(myArr.list[16].main.temp),
                temp4: Math.round(myArr.list[24].main.temp),
                temp5: Math.round(myArr.list[32].main.temp),
                weather1: myArr.list[0].weather[0].main,
                weather2: myArr.list[8].weather[0].main,
                weather3: myArr.list[16].weather[0].main,
                weather4: myArr.list[24].weather[0].main,
                weather5: myArr.list[32].weather[0].main,
                url: URL
            };
            forecastData.push(objForecast);
            loadHTML('../inject/weather.html');
        }
    };
    xmlhttp.open("GET", URL, true);
    xmlhttp.send();
}
function getForecast(info){
    console.log(info);
}

//--------------------------------------------------------------------------------------------------//

function PopulateCityList() {
    let cityInput = document.getElementById('cityInput');
    cityInput.innerHTML = '';

    for (let i = 0; i < cityData.length; i++) {
        let row = document.createElement('div');
        let colCity = document.createElement('div');
        let colTemp = document.createElement('div');
        let colWeather = document.createElement('div');
        let colDelete = document.createElement('div');
        let pCity = document.createElement('p');
        let pTemp = document.createElement('p');
        let deleteBtn = document.createElement('button');

        row.setAttribute('class', 'row size30 bordered');
        colCity.setAttribute('class', 'col-lg-5 bordered d-flex justify-content-center col-md-12');
        colTemp.setAttribute('class', 'col-lg-1 bordered d-flex justify-content-center col-md-12');
        colWeather.setAttribute('class', 'col-lg-5 bordered col-md-12');
        colDelete.setAttribute('class', 'col-lg-1 bordered px-0 col-md-12');
        pCity.setAttribute('class', 'mb-0');
        pTemp.setAttribute('class', 'mb-0');
        deleteBtn.setAttribute('class', 'btn-danger btn-block mb-0');
        deleteBtn.setAttribute('type', 'button');

        deleteBtn.innerText = 'DEL';

        deleteBtn.addEventListener('click', function (e) {
            cityData.splice(i, 1);
            SaveData();
            PopulateCityList();
        });

        if (cityData[i].weather == 'Clear') {
            colWeather.setAttribute('class', 'col-lg-5 col-md-12 clear bordered')
        }
        if (cityData[i].weather == 'Sunny') {
            colWeather.setAttribute('class', 'col-lg-5 col-md-12 clear bordered')
        }
        else if (cityData[i].weather == 'Clouds') {
            colWeather.setAttribute('class', 'col-lg-5 col-md-12 cloudy bordered')
        }
        else if (cityData[i].weather == 'Lightning') {
            colWeather.setAttribute('class', 'col-lg-5 col-md-12 lightning bordered')
        }
        else if (cityData[i].weather == 'Thunder') {
            colWeather.setAttribute('class', 'col-lg-5 col-md-12 lightning bordered')
        }
        else if (cityData[i].weather == 'Mist') {
            colWeather.setAttribute('class', 'col-lg-5 col-md-12 misty bordered')
        }
        else if (cityData[i].weather == 'Haze') {
            colWeather.setAttribute('class', 'col-lg-5 col-md-12 misty bordered')
        }
        else if (cityData[i].weather == 'Fog') {
            colWeather.setAttribute('class', 'col-lg-5 col-md-12 misty bordered')
        }
        else if (cityData[i].weather == 'Rain') {
            colWeather.setAttribute('class', 'col-lg-5 col-md-12 rain bordered')
        }
        else if (cityData[i].weather == 'Drizzle') {
            colWeather.setAttribute('class', 'col-lg-5 col-md-12 rain bordered')
        }
        else if (cityData[i].weather == 'Snow') {
            colWeather.setAttribute('class', 'col-lg-5 col-md-12 snow bordered')
        }
        else if (cityData[i].weather == 'Hail') {
            colWeather.setAttribute('class', 'col-lg-5 col-md-12 snow bordered')
        }

        pCity.innerText = cityData[i].city;
        pTemp.innerText = Math.round(cityData[i].temp) + "°F";

        colCity.addEventListener('click', function (e) {
            let url_pt1 = "https://api.openweathermap.org/data/2.5/forecast?q="
            let url_city_pt2 = pCity.innerText;
            let url_temp_pt3 = "&units=imperial";
            let url_key_pt4 = "&appid=99649a8b829f6ea98a24e0ef1fd6b301";
            let fullURL = url_pt1 + url_city_pt2 + url_temp_pt3 + url_key_pt4;
            counter = i;
            loadForecast(fullURL);
            
            console.log(cityData[i]);
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

// function UpdateTemp(URL) {
//     let xmlhttp = new XMLHttpRequest();

//     xmlhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             let myArr = JSON.parse(this.responseText);
//             let obj = {
//                 city: myArr.name,
//                 temp: myArr.main.temp,
//                 weather: myArr.weather[0].main,
//                 url: URL
//             };
//             cityData.push(obj);
//             SaveData();
//             PopulateCityList();
//         }
//         else if (this.readyState == 4 && this.status != 200) {
//             alert('Input not available.')
//         }
//     };
//     xmlhttp.open("GET", URL, true);
//     xmlhttp.send();
// }
