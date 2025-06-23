// import 'core-js/stable';
import { initThemeBasedOnDeviceTheme, toggleTheme } from './themeMode.js';
import { checkNavMenu } from './mobileMenu.js';
import {
  optimizeIntersectionObserver,
  optimizeBackToTop,
  displayRewardMenu,
} from './sidebar.js';

const init = function () {
  initThemeBasedOnDeviceTheme();
  toggleTheme();
  checkNavMenu();
  optimizeIntersectionObserver();
  optimizeBackToTop();
  displayRewardMenu();
};

init();
