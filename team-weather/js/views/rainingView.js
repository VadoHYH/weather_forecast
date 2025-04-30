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

export function renderNoDataText() {

	let container = document.querySelector("#hourly-rainfall-item-template");
	container.innerHTML = "";

	let NoDataTextHTML = `
			<p style="margin: 0 auto">無此資料</p>
	`;
	container.insertAdjacentHTML("beforeend", NoDataTextHTML);
}