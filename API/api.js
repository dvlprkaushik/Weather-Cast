const apikey = "44bb00afb262ed02e14b1e53af2be2ec";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=city";

const Search_Box = document.querySelector(".search input");
const Search_Btn = document.querySelector(".search button");
const weather_Icon = document.querySelector(".weather-icon");

async function checkWeather() {
    const response = await fetch(apiurl+`&appid=${apikey}`);
    if (response.status == 404) {
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error").style.display = "block";
    } else {
        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weather_Icon.src = "./Images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weather_Icon.src = "./Images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weather_Icon.src = "./Images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weather_Icon.src = "./Images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weather_Icon.src = "./Images/mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
Search_Btn.addEventListener("click", () => {
    checkWeather(Search_Box.value);
})
