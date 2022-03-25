let API_KEY="2cbcd10659fe62b1a08390ea7ed43505";
getWeatherData = (city)=>{
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    const weatherPromise= fetch(FULL_URL);
    return weatherPromise.then((responses)=>{
        return responses.json();
    })
}

searchCity = ()=>{
    const city = document.getElementById("city-input").value;
    getWeatherData(city).then((response)=>{
        console.log(response);
        showWeatherData(response);
    }).catch((error)=>{
        console.log(error);
    })
}

showWeatherData = (weatherData)=>{
    document.getElementById("city-name").innerText = weatherData.name;
    document.getElementById("weather-type").innerText= weatherData.weather[0].main;
    document.getElementById('temp').innerText= weatherData.main.temp;
    document.getElementById('min-temp').innerText= weatherData.main.temp_min;
    document.getElementById('max-temp').innerText= weatherData.main.temp_max;
}