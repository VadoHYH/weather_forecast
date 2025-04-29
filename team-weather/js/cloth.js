// 簡單的分頁切換功能
document.getElementById('weather-tab').addEventListener('click', function() {
    this.classList.add('tab-active');
    document.getElementById('rainfall-tab').classList.remove('tab-active');
    document.getElementById('weather-content').style.display = 'block';
    document.getElementById('rainfall-content').style.display = 'none';
});

document.getElementById('rainfall-tab').addEventListener('click', function() {
    this.classList.add('tab-active');
    document.getElementById('weather-tab').classList.remove('tab-active');
    document.getElementById('weather-content').style.display = 'none';
    document.getElementById('rainfall-content').style.display = 'block';
});