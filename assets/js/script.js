const apiKey = 'db862605da57b70a99d900b989f272b8'
const cityInput = document.getElementById('city-input')
const buttonSelection = document.getElementById('button-search')
const currentWeather = document.querySelector(".currentWeather")
const fiveDay = document.getElementById('weather')

// 5 day forecast
buttonSelection.addEventListener('click', buildApiUrl)
function buildApiUrl(input) {
    var cityName = cityInput.value
    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=` + apiKey
    fetch(apiUrl)
    .then(function (response){
        return response.json()
    })
    .then(function(data){
        weather.innerHTML = ""
        for(var i=1; i<data.list.length; i+=8){
            console.log(data.list[i])
            weather.innerHTML += `<div class="text-center-0">
            <div class="card day-0 m-0 text-center">
                <div class="card-body p-1">
                    <p class="card-title">${dayjs.unix(data.list[i].dt).format("MM/DD/YYYY")}</p>
                    <img class="fiveDay-img mb-2" />
                    <p class="card-subtitle mb-2 text-muted">Temp: <span class="fiveDay-temp">${data.list[i].main.temp}</span>
                        &deg;F</p>
                    <p class="card-subtitle mb-2 text-muted">Humidity: <span class="fiveDay-humid">${data.list[i].main.humidity}</span>%</p>
                </div>
            </div>
        </div> `
        } 
    })
    // current day forecast
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        currentWeather.innerHTML = `<div class="d-flex cityName">
        <h2 id="city" >${data.name}</h2>
        <h3 id="date">${dayjs.unix(data.dt).format("MM/DD/YYYY")}</h3>
        <img id="weather-icon" src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>
    </div>
    <p class="pt-1 pl-2">Temperature: <span id="temperature">${data.main.temp}</span> &deg;F</p>
    <p class="pl-2">Humidity: <span id="humidity">${data.main.humidity}</span>% </p>
    <p class="pl-2">Wind Speed: <span id="wind">${data.wind.speed}</span> MPH</p>
    `
    localStorage.setItem()
    })
}


