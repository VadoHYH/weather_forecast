export async function getData() {
	try {
		let res = await fetch("https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0002-001?Authorization=CWA-D8B41ED2-783B-4A90-9A49-9BC6D7F5C289");
		let data = await res.json()
        let stationList = data.records.Station
		return stationList;
	} catch (err) {
		console.error(err);
	}
}