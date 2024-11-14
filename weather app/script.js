const city = document.getElementById("city");
const btn = document.getElementById("btn")
const apikey = "4561a58c4d934a2d0ae036d2b3214630"
const weatherIcon = document.getElementById("weatherImg")
const temp = document.getElementById("temp")
const main = document.getElementById("main")
console.log(weatherIcon, "ICon")
btn.addEventListener("click", () => {
    console.log(city.value)
    return fetchWeatherData()
})

function fetchWeatherData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apikey}`)
        .then((res) => res.json())
        .then((data) => displayWeatherData(data))
        .catch(error => console.log(error))
}

function displayWeatherData(data) {
    console.log(data)
    const mainWeather = data?.weather[0].main;
    const description = data?.weather[0].description;
    const icon = data?.weather[0].icon;
    const whetherTemperature = data?.main?.temp;
    const weatherIconImg = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    if (weatherIcon) {
        weatherIcon.setAttribute("src", weatherIconImg);
    }
    temp.innerHTML = `${whetherTemperature} °C`
    main.innerHTML = mainWeather

}