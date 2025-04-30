
// app.js
import WeatherModel from './models/appModel.js';
import WeatherView from './views/appView.js';
import WeatherController from './controllers/appController.js';

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  // 創建應用實例
  const model = new WeatherModel();
  const view = new WeatherView();
  const controller = new WeatherController(model, view);
});