const sectionNavEl = document.querySelector('.section-nav');
const sidebarEl = document.querySelector('.sidebar');
const sidebarRewardEl = document.querySelector('.sidebar__reward');
const sidebarMenuEl = document.querySelector('.sidebar__menu');
const sidebarHelperEl = document.querySelector('.helper-class');
const sidebarBackButton = document.querySelector('.sidebar__back-top');

/**
 * Automatically display or hide the sidebar according to
 * whether the page scroll level exceeds sectionNavEl
 *
 * @return {undefined} No return value.
 */

export const optimizeIntersectionObserver = function () {
  const HIDDEN_CLASS = 'hidden';
  const { classList } = sidebarEl;
  const config = {
    root: null,
    threshold: 0,
  };

  const handleIntersection = entries => {
    const [entry] = entries;
    const { isIntersecting } = entry;

    if (isIntersecting === false) {
      classList.remove(HIDDEN_CLASS);
    }
    if (isIntersecting === true) {
      classList.add(HIDDEN_CLASS);
    }
  };

  const observer = new IntersectionObserver(handleIntersection, config);
  observer.observe(sectionNavEl);
};

/**
 * Displays the reward menu in the sidebar.
 *
 * @return {undefined} No return value.
 */

export const displayRewardMenu = function () {
  const { style: menuStyle, pointerEvents: menuPointerEvents } = sidebarMenuEl;
  const { style: helperStyle, pointerEvents: helperPointerEvents } =
    sidebarHelperEl;
  const MENU_DELAY = 300;
  let menuTimeout;

  const showMenu = () => {
    sidebarMenuEl.style.opacity = '1';
    sidebarHelperEl.style.opacity = '1';
    sidebarMenuEl.style.pointerEvents = 'auto';
    sidebarHelperEl.style.pointerEvents = 'auto';
  };

  const hideMenu = () => {
    sidebarMenuEl.style.opacity = '0';
    sidebarHelperEl.style.opacity = '0';
    sidebarMenuEl.style.pointerEvents = 'none';
    sidebarHelperEl.style.pointerEvents = 'none';
  };

  const clearMenuTimeout = () => {
    clearMenuTimeout(menuTimeout);
  };

  sidebarRewardEl.addEventListener('mouseenter', () => {
    menuTimeout = setTimeout(showMenu, MENU_DELAY);
  });

  sidebarRewardEl.addEventListener('mouseleave', () => {
    menuTimeout = setTimeout(hideMenu, MENU_DELAY);
  });

  sidebarMenuEl.addEventListener('mouseenter', clearMenuTimeout);

  sidebarMenuEl.addEventListener('mouseleave', hideMenu);
};

/**
 * Optimizes the back-to-top functionality.
 *
 * @param {type} None - No parameters are required.
 * @return {type} None - The function does not return a value.
 */

export const optimizeBackToTop = function () {
  const BACK_TOP_OFFSET = 0;
  const SCROL_BEHAVIOR = 'smooth';

  const backToTop = function () {
    window.scrollTo({
      top: BACK_TOP_OFFSET,
      behavior: SCROL_BEHAVIOR,
    });
  };

  sidebarBackButton.addEventListener('click', backToTop);
};
