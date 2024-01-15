const toggleButtons = document.querySelectorAll('.nav__theme-toggle');

const enableDarkMode = function () {
  document.body.classList.add('dark-mode');
  localStorage.setItem('theme', 'dark');
};

const disableDarkMode = function () {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('theme', 'light');
};

/**
 * Initializes the theme based on the device's theme.
 *
 * @param {none} - This function does not take any parameters.
 * @return {none} - This function does not return any value.
 */

export const initThemeBasedOnDeviceTheme = function () {
  const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const isDarkMode = darkModeQuery.matches;
  if (isDarkMode) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
};

/**
 * Manually switch the application's theme.
 *
 * @param {none} - This function does not take any parameters.
 * @return {none} - This function does not return any value.
 */

export const toggleTheme = function () {
  const TOGGLE_DELAY = 500;
  let isToggleInProgress = false;
  let toggleTimeout;

  const toggleIconVisibility = () => {
    toggleButtons.forEach(button => button.classList.toggle('hidden'));
  };

  const handleButtonClick = () => {
    if (isToggleInProgress) return;

    isToggleInProgress = true;
    let darkMode = localStorage.getItem('theme');
    darkMode === 'light' ? enableDarkMode() : disableDarkMode();

    toggleIconVisibility();

    // 清除之前设置的延迟，确保切换完成后在允许下一次点击
    clearTimeout(toggleTimeout);
    toggleTimeout = setTimeout(() => {
      isToggleInProgress = false;
    }, TOGGLE_DELAY);
  };

  toggleButtons.forEach(button =>
    button.addEventListener('click', handleButtonClick)
  );
};
