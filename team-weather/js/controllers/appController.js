// controllers/WeatherController.js
import { loadAccRainfull } from "./rainingController.js";

class WeatherController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
  
      // 初始化視圖顯示
      this.initView();
      
      // 註冊所有事件監聽器
      this.registerEventListeners();
    }
  
    // 初始化視圖
    initView() {
      // 更新城市名稱顯示
      this.updateCityNameDisplay();
      
      // 獲取並更新天氣建議和圖片
      this.updateWeatherAdvice();
      
      // 設置初始標籤頁
      this.view.setActiveTab(this.model.selectedTab);

      // 初始化累積雨量圖
      loadAccRainfull(this.model.getFullLocationName());
    }
  
    // 註冊所有事件監聽器
    registerEventListeners() {
      // 城市名按鈕點擊
      this.view.bindCityNameClick(() => {
        this.view.showCityModal();
        this.renderCityList();
        loadAccRainfull(this.model.getFullLocationName());
      });
  
      // 關閉模態視窗按鈕點擊
      this.view.bindCloseModalClick(() => {
        this.view.hideCityModal();
      });
  
      // 搜尋輸入
      this.view.bindSearchInput(() => {
        this.handleSearch();
      });
  
      // 圖片點擊
      this.view.bindImageClick(() => {
        this.nextImage();
      });
  
      // 天氣標籤頁點擊
      this.view.bindWeatherTabClick(() => {
        this.model.setTab('weather');
        this.view.setActiveTab('weather');
      });
  
      // 雨量標籤頁點擊
      this.view.bindRainfallTabClick(() => {
        this.model.setTab('rainfall');
        this.view.setActiveTab('rainfall');
      });
    }
  
    // 更新城市名稱顯示
    updateCityNameDisplay() {
      this.view.updateCityName(this.model.getFullLocationName());
    }
  
    // 渲染城市列表
    renderCityList() {
      const cities = this.model.getAllCities();
      this.view.renderCityList(cities, city => this.renderDistrictList(city));
    }
  
    // 渲染區域列表
    renderDistrictList(city) {
      const districts = this.model.getDistrictsForCity(city);
      this.view.renderDistrictList(
        city, 
        districts, 
        (city, district) => this.selectDistrict(city, district),
        () => this.renderCityList()
      );
    }
  
    // 處理搜尋
    handleSearch() {
      const keyword = this.view.searchInput.value.toLowerCase();
      
      if (!keyword) {
        this.renderCityList();
        return;
      }
  
      const results = [];
      const cities = this.model.getAllCities();
      
      cities.forEach(city => {
        const districts = this.model.getDistrictsForCity(city);
        districts.forEach(district => {
          if (district.toLowerCase().includes(keyword)) {
            results.push({ city, district });
          }
        });
      });
  
      this.view.renderSearchResults(results, (city, district) => this.selectDistrict(city, district));
    }
  
    // 選擇區域
    selectDistrict(city, district) {
      this.model.setCity(city);
      this.model.setDistrict(district);
      this.updateCityNameDisplay();
      this.view.hideCityModal();
      this.updateWeatherAdvice();
      this.view.clearSearchInput();
    }
  
    // 獲取並更新天氣建議和圖片
    updateWeatherAdvice() {
      const weatherData = this.model.getWeatherData();
      this.view.updateWeatherAdvice(weatherData);
    }
  
    // 切換到下一張圖片
    nextImage() {
      const nextIndex = this.model.getNextImageIndex();
      const imagePath = this.model.getCurrentImagePath();
      this.view.updateWeatherImage(imagePath);
    }
}
  
export default WeatherController;