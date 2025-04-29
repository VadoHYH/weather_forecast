// let locationdata = null;

const NumberForThreeDays = {
    "宜蘭縣": "001", "桃園市": "005", "新竹縣": "009", "苗栗縣": "013", "彰化縣": "017", "南投縣": "021",
    "雲林縣": "025", "嘉義縣": "029", "屏東縣": "033", "台東縣": "037", "花蓮縣": "041", "澎湖縣": "045",
    "基隆市": "049", "新竹市": "053", "嘉義市": "057", "臺北市": "061", "高雄市": "065", "新北市": "069",
    "臺中市": "073", "臺南市": "077", "連江縣": "081", "金門縣": "085"
}

let town = "羅東鎮";
let country = "001"; //3天

fetch(`https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-${country}?Authorization=CWA-D8B41ED2-783B-4A90-9A49-9BC6D7F5C289&locationName=${town}`)
    .then((response) => {
        return response.json();
    }).
    then((data) => {
        let locationdata = data.records.Locations[0].Location[0].WeatherElement;
        for (let i in locationdata) {
        }

        const temperList = locationdata[0]["Time"];
        const rannigRateList = locationdata[7];
        const weather = locationdata[8]["Time"];
        rendeHourForecastWeather(temperList, weather);
        renderNowWeather(locationdata);
    });




function rendeHourForecastWeather(temperList, weather) {
    const hourlyTemplate = document.querySelector("#hourly-item-template");
    const hourlyForecast = document.querySelector("#hourly-forecast-list");
    for (let i in temperList) {
        let time = temperList[i]["DataTime"].slice(11, 16);
        let temperature = temperList[i]["ElementValue"][0]["Temperature"];
        const datePart = temperList[i]["DataTime"].slice(0, 10);
        const today = new Date().toISOString().slice(0, 10);
        if (datePart === today) {
            const clone = hourlyTemplate.content.cloneNode(true);
            clone.querySelector(".forecast-time").textContent = time;
            clone.querySelector(".forecast-temp").textContent = temperature + "°C";
            clone.querySelector(".forecast-icon").src = getWeatherIconByWeather(weather, time);
            hourlyForecast.appendChild(clone);
        }

    }

}


function renderNowWeather(data) {
    const weatherCondition = document.querySelector("#weather-condition")
    const feelTemperature = document.querySelector("#feels-like");
    weatherCondition.textContent = data[8]["Time"][0]['ElementValue'][0]['Weather'];
    feelTemperature.textContent = data[3]["Time"][0]['ElementValue'][0]['ApparentTemperature'];


}


function getWeatherIconByWeather(weather, currentTime) {
    let weatherCode = checkTimeValue(weather, currentTime)
    if (["01", "29", "35", "39"].includes(weatherCode)) return "img/sun.svg";
    if (["02", "03"].includes(weatherCode)) return "img/partly-cloudy-sunny.svg";
    if (["04", "07"].includes(weatherCode)) return "img/cloudy.svg";
    if (["05", "06", "08", "09", "10", "26", "27", "28", "30", "31", "36", "37", "38", "40", "41", "42"].includes(weatherCode)) return "img/rainy.svg";
    if (["11", "12", "13", "14", "15", "16", "17", "18", "19", "32", "33", "34"].includes(weatherCode)) return "img/thunderstorm.svg";
    if (["20", "21", "22", "23", "24", "25"].includes(weatherCode)) return "img/snow.svg";
    if (["43", "44", "45"].includes(weatherCode)) return "img/foggy.svg";
    return "img/smile.png";

}

function checkTimeValue(weather, currentTime) {
    for (let item of weather) {
        const startHour = item.StartTime.slice(11, 13);
        const endHour = item.EndTime.slice(11, 13);
        const currentHour = currentTime.slice(0, 2);
        if (currentHour >= startHour && currentHour < endHour) {
            return item.ElementValue[0]["WeatherCode"];
        }
        if (currentHour >= startHour && (currentHour == "21" || currentHour == "22" || currentHour == "23")) {
            return item.ElementValue[0]["WeatherCode"];
        }
    }
}


// weekly


const NumberForWeek = {
    "宜蘭縣": "003", "桃園市": "007", "新竹縣": "011", "苗栗縣": "015", "彰化縣": "019", "南投縣": "023",
    "雲林縣": "027", "嘉義縣": "031", "屏東縣": "035", "台東縣": "039", "花蓮縣": "043", "澎湖縣": "047",
    "基隆市": "051", "新竹市": "055", "嘉義市": "059", "臺北市": "063", "高雄市": "067", "新北市": "071",
    "臺中市": "075", "臺南市": "079", "連江縣": "083", "金門縣": "087"
}

let countryforWeek = "003"; //3天

fetch(`https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-${countryforWeek}?Authorization=CWA-D8B41ED2-783B-4A90-9A49-9BC6D7F5C289&locationName=${town}`)
    .then((response) => {
        return response.json();
    }).
    then((data) => {
        let locationdata = data.records.Locations[0].Location[0].WeatherElement;
        renderWeeklyWeather(locationdata)
    });


function renderWeeklyWeather(data) {
    const weeklyTemplate = document.querySelector("#weekly-item-template");
    const weeklyForecast = document.querySelector("#weekly-forecast-list");
    for (let i in data[1]["Time"]) {
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





function getWeatherIconByWeek(weatherCode) {
    if (["01", "29", "35", "39"].includes(weatherCode)) return "img/sun.svg";
    if (["02", "03"].includes(weatherCode)) return "img/partly-cloudy-sunny.svg";
    if (["04", "07"].includes(weatherCode)) return "img/cloudy.svg";
    if (["05", "06", "08", "09", "10", "26", "27", "28", "30", "31", "36", "37", "38", "40", "41", "42"].includes(weatherCode)) return "img/rainy.svg";
    if (["11", "12", "13", "14", "15", "16", "17", "18", "19", "32", "33", "34"].includes(weatherCode)) return "img/thunderstorm.svg";
    if (["20", "21", "22", "23", "24", "25"].includes(weatherCode)) return "img/snow.svg";
    if (["43", "44", "45"].includes(weatherCode)) return "img/foggy.svg";
    return "img/smile.png";

}

function getWeekDay(dateTime) {
    const weekDays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    const date = new Date(dateTime);
    const day = date.getDay();
    const hour = date.getHours();

    let perid;
    if (hour < 12) {
        perid = "白天"
    } else { perid = "晚上" }
    return `${weekDays[day] + " " + perid}`

}



