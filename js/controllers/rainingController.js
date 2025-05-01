import { getData } from "../models/rainingModel.js"
import { renderAccRainfall } from "../views/rainingView.js";

export function loadAccRainfull(){
	handleAccRainfull();
}

async function handleAccRainfull(){
	let stationList = await getData();

	let accTimes = {"Past10Min": "10分鐘", "Past1hr": "1小時", "Past3hr": "3小時", 
					"Past6Hr": "6小時", "Past12hr": "12小時", "Past24hr": "24小時"};
	
	// rainfallByLocation: {南投縣_國姓鄉: {10分鐘: 0, 1小時: 0, 3小時: 0, ...}, ...}
	let rainfallByLocation = {};
	
	// 整合資料與計算平均
	let rainfallCollector = {};  // {南投縣_國姓鄉: Array(13), 基隆市_仁愛區: Array(1), ...}
	
	stationList.forEach((station) => {
		let county = station.GeoInfo.CountyName;
		let town = station.GeoInfo.TownName;
		let rainfall = station.RainfallElement;
	
		if (!county || !town || !rainfall) return;
	
		let key = `${county}_${town}`;
	
		// 初始化 rainfall 陣列
		if (!rainfallCollector[key]) {
			rainfallCollector[key] = [];
		}
	
		rainfallCollector[key].push(rainfall);
	});
	
	// 計算每個地點各時段的平均降雨量
	for (let key in rainfallCollector) {
		let rainfallArray = rainfallCollector[key];
		let accTimeMap = {}; // {"10分鐘": 0, "1小時": 0, ...}
	
		for (let accTime in accTimes) {
			let label = accTimes[accTime]; // 取得中文值
			let total = 0;
			rainfallArray.forEach((rainfall) => {
				let value = rainfall[accTime]?.Precipitation;
				total += Number(value);
			});
			let avg = total / rainfallArray.length;
			accTimeMap[label] = Math.round(avg * 10) / 10;
		};
	
		rainfallByLocation[key] = accTimeMap;
	}
	// 先假設是這個鄉鎮
	let selectedLocation = "南投縣_國姓鄉";
	let rainfallData = rainfallByLocation[selectedLocation];
	
	renderAccRainfall(selectedLocation, rainfallData)
}
