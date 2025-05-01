
export const NumberForThreeDays = {
    "宜蘭縣": "001", "桃園市": "005", "新竹縣": "009", "苗栗縣": "013", "彰化縣": "017", "南投縣": "021",
    "雲林縣": "025", "嘉義縣": "029", "屏東縣": "033", "台東縣": "037", "花蓮縣": "041", "澎湖縣": "045",
    "基隆市": "049", "新竹市": "053", "嘉義市": "057", "臺北市": "061", "高雄市": "065", "新北市": "069",
    "臺中市": "073", "臺南市": "077", "連江縣": "081", "金門縣": "085"
}


export const NumberForWeek = {
    "宜蘭縣": "003", "桃園市": "007", "新竹縣": "011", "苗栗縣": "015", "彰化縣": "019", "南投縣": "023",
    "雲林縣": "027", "嘉義縣": "031", "屏東縣": "035", "台東縣": "039", "花蓮縣": "043", "澎湖縣": "047",
    "基隆市": "051", "新竹市": "055", "嘉義市": "059", "臺北市": "063", "高雄市": "067", "新北市": "071",
    "臺中市": "075", "臺南市": "079", "連江縣": "083", "金門縣": "087"
}



export function getWeatherIconByWeather(weather, currentTime) {
    let weatherCode = checkTimeValue(weather, currentTime)
    if (["01", "24", "25", "29", "39"].includes(weatherCode)) return "img/sun.svg";
    if (["02", "03", "19"].includes(weatherCode)) return "img/partly-cloudy-sunny.svg";
    if (["04", "5", "6", "07"].includes(weatherCode)) return "img/cloudy.svg";
    if (["08", "09", "10", "11", "12", "13", "14", "20", "23", "29", "30", "31", "35", "37", "38", "39", "40", "41"].includes(weatherCode)) return "img/rainy.svg";
    if (["15", "16", "17", "18", "21", "22", "32", "33", "34", "36"].includes(weatherCode)) return "img/thunderstorm.svg";
    if (["42"].includes(weatherCode)) return "img/snow.svg";
    if (["26", "27", "28"].includes(weatherCode)) return "img/foggy.svg";
    return "img/smile.svg";


}

export function checkTimeValue(weather, currentHour) {
    for (let item of weather) {
        const startHour = item.StartTime.slice(11, 13);
        const endHour = item.EndTime.slice(11, 13);
        if (currentHour >= startHour && currentHour < endHour) {
            return item.ElementValue[0]["WeatherCode"];
        }
        if (currentHour >= startHour && (currentHour == "21" || currentHour == "22" || currentHour == "23")) {
            return item.ElementValue[0]["WeatherCode"];
        }
    }
}


export function getWeatherIconByWeek(weatherCode) {

    if (["01", "24", "25", "29", "39"].includes(weatherCode)) return "img/sun.svg";
    if (["02", "03", "19"].includes(weatherCode)) return "img/partly-cloudy-sunny.svg";
    if (["04", "5", "6", "07"].includes(weatherCode)) return "img/cloudy.svg";
    if (["08", "09", "10", "11", "12", "13", "14", "20", "23", "29", "30", "31", "35", "37", "38", "39", "40", "41"].includes(weatherCode)) return "img/rainy.svg";
    if (["15", "16", "17", "18", "21", "22", "32", "33", "34", "36"].includes(weatherCode)) return "img/thunderstorm.svg";
    if (["42"].includes(weatherCode)) return "img/snow.svg";
    if (["26", "27", "28"].includes(weatherCode)) return "img/foggy.svg";
    return "img/smile.svg";

}

export function getWeekDay(dateTime) {
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


