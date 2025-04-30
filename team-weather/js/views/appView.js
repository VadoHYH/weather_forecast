// views/WeatherView.js

class WeatherView {
    constructor() {
      // DOM 元素
      this.cityNameBtn = document.getElementById('city-name');
      this.cityModal = document.getElementById('city-modal');
      this.cityList = document.getElementById('city-list');
      this.closeModalBtn = document.getElementById('close-modal');
      this.searchInput = document.getElementById("city-input");
      this.weatherTab = document.getElementById('weather-tab');
      this.rainfallTab = document.getElementById('rainfall-tab');
      this.weatherSection = document.getElementById('weather-section');
      this.rainfallSection = document.getElementById('rainfall-section');
      this.outfitImage = document.getElementById('outfit-image');
      this.adviceText = document.getElementById('weather-advice-text');
    }
  
    // 更新城市名稱顯示
    updateCityName(fullName) {
      this.cityNameBtn.textContent = fullName;
    }
  
    // 顯示城市選擇模態窗
    showCityModal() {
        this.cityModal.classList.add('is-open');
    }
  
    // 隱藏城市選擇模態窗
    hideCityModal() {
        this.cityModal.classList.remove('is-open');
    }
  
    // 清空城市列表
    clearCityList() {
      this.cityList.innerHTML = '';
    }
  
    // 渲染城市列表
    renderCityList(cities, onCityClick) {
      this.clearCityList();
      cities.forEach(city => {
        const cityBtn = document.createElement('button');
        cityBtn.textContent = city;
        cityBtn.className = 'city-button';
        cityBtn.addEventListener('click', () => onCityClick(city));
        this.cityList.appendChild(cityBtn);
      });
    }
  
    // 渲染區域列表
    renderDistrictList(city, districts, onDistrictClick, onBackClick) {
      this.clearCityList();
      
      districts.forEach(district => {
        const districtBtn = document.createElement('button');
        districtBtn.textContent = `${city} - ${district}`;
        districtBtn.className = 'district-button';
        districtBtn.addEventListener('click', () => onDistrictClick(city, district));
        this.cityList.appendChild(districtBtn);
      });
  
      // 添加返回按鈕
      const backBtn = document.createElement('button');
      backBtn.textContent = '返回城市選單';
      backBtn.className = 'back-button';
      backBtn.addEventListener('click', onBackClick);
      this.cityList.appendChild(backBtn);
    }
  
    // 渲染搜尋結果
    renderSearchResults(results, onDistrictClick) {
      this.clearCityList();
      
      results.forEach(result => {
        const { city, district } = result;
        const districtBtn = document.createElement('button');
        districtBtn.textContent = `${city} - ${district}`;
        districtBtn.className = 'district-button';
        districtBtn.addEventListener('click', () => onDistrictClick(city, district));
        this.cityList.appendChild(districtBtn);
      });
    }
  
    // 設置天氣建議和圖片
    updateWeatherAdvice(weatherData) {
      this.adviceText.textContent = weatherData.advice;
      this.outfitImage.src = `./img_V/${weatherData.imageKey}_${weatherData.imageIndex}.svg`;
      this.outfitImage.alt = `${weatherData.tempCategory} and ${weatherData.condition} outfit`;
    }
  
    // 更新天氣圖片
    updateWeatherImage(imagePath, altText) {
      this.outfitImage.src = imagePath;
      if (altText) {
        this.outfitImage.alt = altText;
      }
    }
  
    // 設置活動的標籤頁
    setActiveTab(tabName) {
      if (tabName === 'weather') {
        this.weatherTab.classList.add('tab-active');
        this.rainfallTab.classList.remove('tab-active');
        this.weatherSection.style.display = 'block';
        this.rainfallSection.style.display = 'none';
      } else if (tabName === 'rainfall') {
        this.rainfallTab.classList.add('tab-active');
        this.weatherTab.classList.remove('tab-active');
        this.weatherSection.style.display = 'none';
        this.rainfallSection.style.display = 'block';
      }
    }
  
    // 清空搜尋輸入框
    clearSearchInput() {
      this.searchInput.value = '';
    }
  
    // 註冊事件處理器
    bindCityNameClick(handler) {
      this.cityNameBtn.addEventListener('click', handler);
    }
  
    bindCloseModalClick(handler) {
      this.closeModalBtn.addEventListener('click', handler);
    }
  
    bindSearchInput(handler) {
      this.searchInput.addEventListener('input', handler);
    }
  
    bindImageClick(handler) {
      this.outfitImage.addEventListener('click', handler);
    }
  
    bindWeatherTabClick(handler) {
      this.weatherTab.addEventListener('click', handler);
    }
  
    bindRainfallTabClick(handler) {
      this.rainfallTab.addEventListener('click', handler);
    }
}
  
export default WeatherView;