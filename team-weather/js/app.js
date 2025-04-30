// app.js
const model = {
  selectedCity: '臺北市',
  selectedDistrict: '',
  selectedTab: 'weather',
      cities: {
        '臺北市': ['中正區', '大同區', '中山區', '萬華區', '信義區', '松山區', '大安區', '南港區', '北投區', '內湖區', '士林區', '文山區'],
        '新北市': ['板橋區', '新莊區', '泰山區', '林口區', '淡水區', '金山區', '八里區', '萬里區', '石門區', '三芝區', '瑞芳區', '汐止區', '平溪區', '貢寮區', '雙溪區', '深坑區', '石碇區', '新店區', '坪林區', '烏來區', '中和區', '永和區', '土城區', '三峽區', '樹林區', '鶯歌區', '三重區', '蘆洲區', '五股區'],
        '基隆市': ['仁愛區', '中正區', '信義區', '中山區', '安樂區', '暖暖區', '七堵區'],
        '桃園市': ['桃園區', '中壢區', '平鎮區', '八德區', '楊梅區', '蘆竹區', '龜山區', '龍潭區', '大溪區', '大園區', '觀音區', '新屋區', '復興區'],
        '新竹縣': ['竹北市', '竹東鎮', '新埔鎮', '關西鎮', '峨眉鄉', '寶山鄉', '北埔鄉', '橫山鄉', '芎林鄉', '湖口鄉', '新豐鄉', '尖石鄉', '五峰鄉'],
        '新竹市': ['東區', '北區', '香山區'],
        '苗栗縣': ['苗栗市', '通霄鎮', '苑裡鎮', '竹南鎮', '頭份鎮', '後龍鎮', '卓蘭鎮', '西湖鄉', '頭屋鄉', '公館鄉', '銅鑼鄉', '三義鄉', '造橋鄉', '三灣鄉', '南庄鄉', '大湖鄉', '獅潭鄉', '泰安鄉'],
        '臺中市': ['中區', '東區', '南區', '西區', '北區', '北屯區', '西屯區', '南屯區', '太平區', '大里區', '霧峰區', '烏日區', '豐原區', '后里區', '東勢區', '石岡區', '新社區', '和平區', '神岡區', '潭子區', '大雅區', '大肚區', '龍井區', '沙鹿區', '梧棲區', '清水區', '大甲區', '外埔區', '大安區'],
        '南投縣': ['南投市', '埔里鎮', '草屯鎮', '竹山鎮', '集集鎮', '名間鄉', '鹿谷鄉', '中寮鄉', '魚池鄉', '國姓鄉', '水里鄉', '信義鄉', '仁愛鄉'],
        '彰化縣': ['彰化市', '員林鎮', '和美鎮', '鹿港鎮', '溪湖鎮', '二林鎮', '田中鎮', '北斗鎮', '花壇鄉', '芬園鄉', '大村鄉', '永靖鄉', '伸港鄉', '線西鄉', '福興鄉', '秀水鄉', '埔心鄉', '埔鹽鄉', '大城鄉', '芳苑鄉', '竹塘鄉', '社頭鄉', '二水鄉', '田尾鄉', '埤頭鄉', '溪州鄉'],
        '雲林縣': ['斗六市', '斗南鎮', '虎尾鎮', '西螺鎮', '土庫鎮', '北港鎮', '莿桐鄉', '林內鄉', '古坑鄉', '大埤鄉', '崙背鄉', '二崙鄉', '麥寮鄉', '臺西鄉', '東勢鄉', '褒忠鄉', '四湖鄉', '口湖鄉', '水林鄉', '元長鄉'],
        '嘉義縣': ['太保市', '朴子市', '布袋鎮', '大林鎮', '民雄鄉', '溪口鄉', '新港鄉', '六腳鄉', '東石鄉', '義竹鄉', '鹿草鄉', '水上鄉', '中埔鄉', '竹崎鄉', '梅山鄉', '番路鄉', '大埔鄉', '阿里山鄉'],
        '嘉義市': ['東區', '西區'],
        '臺南市': ['中西區', '東區', '南區', '北區', '安平區', '安南區', '永康區', '歸仁區', '新化區', '左鎮區', '玉井區', '楠西區', '南化區', '仁德區', '關廟區', '龍崎區', '官田區', '麻豆區', '佳里區', '西港區', '七股區', '將軍區', '學甲區', '北門區', '新營區', '後壁區', '白河區', '東山區', '六甲區', '下營區', '柳營區', '鹽水區', '善化區', '大內區', '山上區', '新市區', '安定區'],
        '高雄市': ['楠梓區', '左營區', '鼓山區', '三民區', '鹽埕區', '前金區', '新興區', '苓雅區', '前鎮區', '小港區', '旗津區', '鳳山區', '大寮區', '鳥松區', '林園區', '仁武區', '大樹區', '大社區', '岡山區', '路竹區', '橋頭區', '梓官區', '彌陀區', '永安區', '燕巢區', '田寮區', '阿蓮區', '茄萣區', '湖內區', '旗山區', '美濃區', '內門區', '杉林區', '甲仙區', '六龜區', '茂林區', '桃源區', '那瑪夏區'],
        '屏東縣': ['屏東市', '潮州鎮', '東港鎮', '恆春鎮', '萬丹鄉', '長治鄉', '麟洛鄉', '九如鄉', '里港鄉', '鹽埔鄉', '高樹鄉', '萬巒鄉', '內埔鄉', '竹田鄉', '新埤鄉', '枋寮鄉', '新園鄉', '崁頂鄉', '林邊鄉', '南州鄉', '佳冬鄉', '琉球鄉', '車城鄉', '滿州鄉', '枋山鄉', '霧台鄉', '瑪家鄉', '泰武鄉', '來義鄉', '春日鄉', '獅子鄉', '牡丹鄉', '三地門鄉'],
        '宜蘭縣': ['宜蘭市', '羅東鎮', '蘇澳鎮', '頭城鎮', '礁溪鄉', '壯圍鄉', '員山鄉', '冬山鄉', '五結鄉', '三星鄉', '大同鄉', '南澳鄉'],
        '花蓮縣': ['花蓮市', '鳳林鎮', '玉里鎮', '新城鄉', '吉安鄉', '壽豐鄉', '秀林鄉', '光復鄉', '豐濱鄉', '瑞穗鄉', '萬榮鄉', '富里鄉', '卓溪鄉'],
        '臺東縣': ['臺東市', '成功鎮', '關山鎮', '長濱鄉', '海端鄉', '池上鄉', '東河鄉', '鹿野鄉', '延平鄉', '卑南鄉', '金峰鄉', '大武鄉', '達仁鄉', '綠島鄉', '蘭嶼鄉', '太麻里鄉'],
        '澎湖縣': ['馬公市', '湖西鄉', '白沙鄉', '西嶼鄉', '望安鄉', '七美鄉'],
        '金門縣': ['金城鎮', '金湖鎮', '金沙鎮', '金寧鄉', '烈嶼鄉', '烏坵鄉'],
        '連江縣': ['南竿鄉', '北竿鄉', '莒光鄉', '東引鄉']
      },
  selectedTab: "weather",  // 預設是天氣
};
  
    
// 初始化
document.addEventListener('DOMContentLoaded', () => {
  const cityNameBtn = document.getElementById('city-name');
  const cityModal = document.getElementById('city-modal');
  const cityList = document.getElementById('city-list');
  const closeModalBtn = document.getElementById('close-modal');
  const weatherTab = document.getElementById('weather-tab');
  const rainfallTab = document.getElementById('rainfall-tab');
  const weatherSection = document.getElementById('weather-section');
  const rainfallSection = document.getElementById('rainfall-section');

  // 更新 city name 顯示
  function updateCityName() {
    cityNameBtn.textContent = model.selectedCity + (model.selectedDistrict ? ` ${model.selectedDistrict}` : '');
  }

  // 打開城市選單
  cityNameBtn.addEventListener('click', () => {
    cityModal.style.display = 'block';
    renderCityList();
  });

  // 關閉城市選單
  closeModalBtn.addEventListener('click', () => {
    cityModal.style.display = 'none';
  });

  // 渲染城市和鄉鎮列表
  function renderCityList() {
    cityList.innerHTML = '';
    for (const city in model.cities) {
      const cityBtn = document.createElement('button');
      cityBtn.textContent = city;
      cityBtn.className = 'city-button';
      cityBtn.addEventListener('click', () => {
        renderDistrictList(city);
      });
      cityList.appendChild(cityBtn);
    }
  }

  // 渲染鄉鎮列表
  function renderDistrictList(city) {
    cityList.innerHTML = '';
    model.cities[city].forEach(district => {
      const districtBtn = document.createElement('button');
      districtBtn.textContent = `${city} - ${district}`;
      districtBtn.className = 'district-button';
      districtBtn.addEventListener('click', () => {
        model.selectedCity = city;
        model.selectedDistrict = district;
        updateCityName();
        cityModal.style.display = 'none';
        updateWeatherAdvice();
      });
      cityList.appendChild(districtBtn);
    });

    const backBtn = document.createElement('button');
    backBtn.textContent = '返回城市選單';
    backBtn.className = 'back-button';
    backBtn.addEventListener('click', renderCityList);
    cityList.appendChild(backBtn);
  }

  // 定義每組分類有幾張圖片
  const imageCounts = {
    hot_sunny: 3,
    hot_rainy: 3,
    hot_neutral: 3,
    warm_sunny: 2,
    warm_rainy: 2,
    warm_neutral: 2,
    cold_sunny: 3,
    cold_rainy: 3,
    cold_neutral: 3
  };

  // 定義建議文字
  const adviceMap = {
    hot_sunny: '炎熱又大太陽，注意防曬和補水！',
    hot_rainy: '又熱又下雨，別忘了帶傘穿透氣衣服～',
    hot_neutral: '高溫但無太陽，小心悶熱。',
    warm_sunny: '溫暖陽光好天氣，非常適合出門！',
    warm_rainy: '微熱且有雨，建議輕便防水穿搭。',
    warm_neutral: '天氣舒適，穿什麼都可以～',
    cold_sunny: '寒冷但有陽光，出門記得保暖！',
    cold_rainy: '濕冷天氣，務必穿防水保暖衣物。',
    cold_neutral: '乾冷天氣，注意保暖尤其手腳。',
  };

  let currentImageIndex = 1;
  let currentImageKey = '';

  function updateWeatherAdvice() {
    const outfitImage = document.getElementById('outfit-image');
    const adviceText = document.getElementById('weather-advice-text');

    // 模擬天氣資料
    const randomTemp = Math.floor(Math.random() * 35); // 0 - 34 度
    const randomWeatherType = Math.random();
    let weatherCondition = '';
    if (randomWeatherType < 0.4) {
      weatherCondition = 'sunny';
    } else if (randomWeatherType < 0.8) {
      weatherCondition = 'rainy';
    } else {
      weatherCondition = 'neutral';
    }

    // 決定溫度分類
    let tempCategory = '';
    if (randomTemp <= 15) {
      tempCategory = 'cold';
    } else if (randomTemp <= 25) {
      tempCategory = 'warm';
    } else {
      tempCategory = 'hot';
    }

    currentImageKey = `${tempCategory}_${weatherCondition}`;
    currentImageIndex = 1; // 重置圖片編號

    // 設定建議文字
    adviceText.textContent = adviceMap[currentImageKey] || '今天天氣變化多端，請小心～';

    // 顯示圖片
    const fileName = `${currentImageKey}_${currentImageIndex}.svg`;
    outfitImage.src = `./img_V/${fileName}`;
    outfitImage.alt = `${tempCategory} and ${weatherCondition} outfit`;
  }

  const outfitImage = document.getElementById('outfit-image');
  // 切換圖片功能（圖片點擊時觸發）
  function nextImage() {
    const totalImages = imageCounts[currentImageKey] || 1;
    currentImageIndex = currentImageIndex % totalImages + 1;
    const fileName = `${currentImageKey}_${currentImageIndex}.svg`;
    outfitImage.src = `./img_V/${fileName}`;
    
  }

  outfitImage.addEventListener('click', nextImage);
  

  // Tab 切換
  weatherTab.addEventListener('click', () => {
    model.selectedTab = 'weather';
    weatherTab.classList.add('tab-active');
    rainfallTab.classList.remove('tab-active');
    weatherSection.style.display = 'block';
    rainfallSection.style.display = 'none';
  });

  rainfallTab.addEventListener('click', () => {
    model.selectedTab = 'rainfall';
    rainfallTab.classList.add('tab-active');
    weatherTab.classList.remove('tab-active');
    weatherSection.style.display = 'none';
    rainfallSection.style.display = 'block';
  });

  // 預設初始化
  updateCityName();
  updateWeatherAdvice();
});