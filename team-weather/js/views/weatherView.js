import { getWeatherIconByWeather, getWeatherIconByWeek, getWeekDay } from "../models/weatherModel.js"

export function rendeHourForecastWeather(temperList, weather) {
    const hourlyTemplate = document.querySelector("#hourly-item-template");
    const hourlyForecast = document.querySelector("#hourly-forecast-list");
    hourlyForecast.textContent = ""
    const now = new Date();
    const nowTimestamp = now.getTime();
    const next24hTimestamp = nowTimestamp + 24 * 60 * 60 * 1000;

    for (let i = 0; i < temperList.length; i++) {
        const dateTimeStr = temperList[i]["DataTime"];
        const dataTime = new Date(dateTimeStr);
        const dataTimestamp = dataTime.getTime();


        if (dataTimestamp >= nowTimestamp && dataTimestamp <= next24hTimestamp) {
            const time = dateTimeStr.slice(11, 16);
            const temperature = temperList[i]["ElementValue"][0]["Temperature"];
            const clone = hourlyTemplate.content.cloneNode(true);
            clone.querySelector(".forecast-time").textContent = time;
            clone.querySelector(".forecast-temp").textContent = temperature + "°C";
            clone.querySelector(".forecast-icon").src = getWeatherIconByWeather(weather, time);
            hourlyForecast.appendChild(clone);
        }
    }

}




export function renderNowWeather(data) {
    const weatherCondition = document.querySelector("#weather-condition")
    const feelTemperature = document.querySelector("#feels-like");
    const rainfallChance = document.querySelector("#rainfall-chance");
    rainfallChance.textContent = data[7]["Time"][0]['ElementValue'][0]['ProbabilityOfPrecipitation'];
    weatherCondition.textContent = data[8]["Time"][0]['ElementValue'][0]['Weather'];
    feelTemperature.textContent = data[3]["Time"][0]['ElementValue'][0]['ApparentTemperature'];


}



export function renderWeeklyWeather(data) {
    const weeklyTemplate = document.querySelector("#weekly-item-template");
    const weeklyForecast = document.querySelector("#weekly-forecast-list");
    weeklyForecast.textContent = ""
    for (let i in data[1]["Time"]) {
        if (i !== "0") {
            let weatherCode = data[12]["Time"][i]["ElementValue"][0]["WeatherCode"];
            let weatherText = data[12]["Time"][i]["ElementValue"][0]["WeatherCode"];
            let maxTemper = data[1]["Time"][i]["ElementValue"][0]["MaxTemperature"];
            let minTemper = data[2]["Time"][i]["ElementValue"][0]["MinTemperature"];
            let weekday = getWeekDay(data[1]["Time"][i]["StartTime"]);
            const clone = weeklyTemplate.content.cloneNode(true);
            clone.querySelector(".forecast-day").textContent = weekday;
            clone.querySelector(".forecast-temp").textContent = minTemper + "°C ~ " + maxTemper + "°C";
            clone.querySelector(".forecast-icon").src = getWeatherIconByWeek(weatherCode);
            weeklyForecast.appendChild(clone);
        }
    }

}

export function renderWeeklyRainfall(data) {
    const weeklyRainFallTemplate = document.querySelector("#weekly-rainfall-item-template");
    const weeklyRainfall = document.querySelector("#weekly-rainfall-list");
    weeklyRainfall.textContent = ""
    for (let i in data[11]["Time"]) {
        if (i !== "0") {
            let rainProbability = data[11]["Time"][0]["ElementValue"][0]["ProbabilityOfPrecipitation"]
            let weekday = getWeekDay(data[11]["Time"][i]["StartTime"]);
            const clone = weeklyRainFallTemplate.content.cloneNode(true);
            clone.querySelector(".forecast-day").textContent = weekday;
            clone.querySelector(".rainfall-probability").textContent = rainProbability + "%";
            clone.querySelector(".forecast-icon").src = "img/rain-gauge.png";
            weeklyRainfall.appendChild(clone);
        }
    }

}
