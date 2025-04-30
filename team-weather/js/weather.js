import { getThreeDays, getWeekData } from "./controllers/weatherControllers.js";
import { NumberForThreeDays, NumberForWeek } from "./models/weatherModel.js";


window.addEventListener("DOMContentLoaded", () => {
    let select = document.querySelector("#city-name").textContent;
    let city = NumberForThreeDays[select.slice(0, 3)];
    let cityforWeek = NumberForWeek[select.slice(0, 3)];
    let town = select.slice(4, 7)
    getThreeDays(city, town);
    getWeekData(cityforWeek, town);

});

const cityTarget = document.querySelector("#city-name");

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === "childList" || mutation.type === "characterData") {
            let city = NumberForThreeDays[cityTarget.textContent.slice(0, 3)];
            let cityforWeek = NumberForWeek[cityTarget.textContent.slice(0, 3)];
            let town = cityTarget.textContent.slice(4, 7)
            getThreeDays(city, town);
            getWeekData(cityforWeek, town);
        }
    });
});


observer.observe(cityTarget, {
    childList: true,
    characterData: true,
    subtree: true
});
