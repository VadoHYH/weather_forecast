
import { rendeHourForecastWeather, renderNowWeather, renderWeeklyWeather, renderWeeklyRainfall } from "../views/weatherView.js"



export async function getThreeDays(city, town) {
    fetch(`https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-${city}?Authorization=CWA-D8B41ED2-783B-4A90-9A49-9BC6D7F5C289&locationName=${town}`)
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
}


export async function getWeekData(cityforWeek, town) {
    fetch(`https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-${cityforWeek}?Authorization=CWA-D8B41ED2-783B-4A90-9A49-9BC6D7F5C289&locationName=${town}`)
        .then((response) => {
            return response.json();
        }).
        then((data) => {
            let locationdata = data.records.Locations[0].Location[0].WeatherElement;
            renderWeeklyWeather(locationdata)
            renderWeeklyRainfall(locationdata)
        });

}
