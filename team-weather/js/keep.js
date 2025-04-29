function updateWeatherAdvice() {
    const outfitImage = document.getElementById('outfit-image');
    const adviceText = document.getElementById('weather-advice-text');
  
    // 模擬天氣資料
    const randomTemp = Math.floor(Math.random() * 35); // 0 - 34 度
    const randomRain = Math.random() > 0.5; // true or false
  
    // 設定建議文字
    if (randomTemp > 30) {
      adviceText.textContent = '今天很熱，記得防曬喝水！';
    } else if (randomRain) {
      adviceText.textContent = '有雨記得帶傘喔～';
    } else if (randomTemp < 15) {
      adviceText.textContent = '天氣寒冷，注意保暖！';
    } else {
      adviceText.textContent = '天氣舒適，適合出門！';
    }
  
    // 決定溫度分類
    let tempCategory = "";
    if (randomTemp <= 15) {
      tempCategory = "cold";
    } else if (randomTemp <= 25) {
      tempCategory = "warm";
    } else {
      tempCategory = "hot";
    }
  
    // 決定天氣狀況分類
    const weatherCondition = randomRain ? "rainy" : "sunny";
  
    // 圖片檔名格式：cold_rainy.svg、warm_sunny.svg 之類
    const fileName = `${tempCategory}_${weatherCondition}_1.svg`;
  
    // 放入圖片（圖片存在 images 資料夾中）
    outfitImage.src = `./img/${fileName}`;
    outfitImage.alt = `${tempCategory} and ${weatherCondition} outfit`;
  }



  //抓資料版本
  const imageCounts = {
    hot_sunny: 3,
    hot_rainy: 2,
    hot_neutral: 1,
    warm_sunny: 3,
    warm_rainy: 2,
    warm_neutral: 1,
    cold_sunny: 2,
    cold_rainy: 2,
    cold_neutral: 1
  };
  
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
  
    // 取得體感溫度與降雨機率的文字內容
    const feelsLikeText = document.getElementById('feels-like').textContent;
    const rainfallText = document.getElementById('rainfall-chance').textContent;
  
    // 從文字中擷取數字
    const feelsLikeTemp = parseInt(feelsLikeText.match(/\d+/)?.[0] || "25", 10); // 預設 25
    const rainfallChance = parseInt(rainfallText.match(/\d+/)?.[0] || "0", 10);  // 預設 0
  
    // 分類氣溫
    let tempCategory = '';
    if (feelsLikeTemp <= 15) {
      tempCategory = 'cold';
    } else if (feelsLikeTemp <= 25) {
      tempCategory = 'warm';
    } else {
      tempCategory = 'hot';
    }
  
    // 分類天氣狀況
    let weatherCondition = '';
    if (rainfallChance >= 50) {
      weatherCondition = 'rainy';
    } else if (rainfallChance <= 20) {
      weatherCondition = 'sunny';
    } else {
      weatherCondition = 'neutral';
    }
  
    currentImageKey = `${tempCategory}_${weatherCondition}`;
    currentImageIndex = 1; // 重設圖片 index
  
    // 更新建議
    adviceText.textContent = adviceMap[currentImageKey] || '今天天氣變化多端，請小心～';
  
    // 顯示圖片
    const fileName = `${currentImageKey}_${currentImageIndex}.svg`;
    outfitImage.src = `./img/${fileName}`;
    outfitImage.alt = `${tempCategory} and ${weatherCondition} outfit`;
  }
  
  // 圖片點擊切換
  function nextImage() {
    const outfitImage = document.getElementById('outfit-image');
    const totalImages = imageCounts[currentImageKey] || 1;
  
    currentImageIndex = currentImageIndex % totalImages + 1;
    const fileName = `${currentImageKey}_${currentImageIndex}.svg`;
    outfitImage.src = `./img/${fileName}`;
  }
  