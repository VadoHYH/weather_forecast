export function renderAccRainfall(locationKey, accTimeMap) {

	let container = document.querySelector("#hourly-rainfall-item-template");
	container.innerHTML = "";

	for (let accTime in accTimeMap) {
		let rainfallValue = accTimeMap[accTime];

		let accRainfallHTML = `
			<div class="forecast-item">
				<div class="forecast-time">${accTime}</div>
				<img src="img/rain-gauge.png" alt="rainfall icon" class="forecast-icon">
				<div class="rainfall-value">${rainfallValue}</div>
			</div>
		`;

		container.insertAdjacentHTML("beforeend", accRainfallHTML);
	}
}