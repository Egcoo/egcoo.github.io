const navRelativeEl = document.querySelector('.nav__relative');
const mobileMenuButton = document.querySelector('.nav__mobile--menu');
const mobileCloseButton = document.querySelector('.nav__mobile--close');

/**
 * MOBILE ONLY!
 * Toggles the navigation menu by adding or removing the 'nav-open' class from
 * the navRelativeEl element. Additionally, it toggles the 'hidden' class on
 * the mobileMenuButton and mobileCloseButton elements.
 *
 * @return {void} This function does not return a value.
 */

export const checkNavMenu = function () {
  let isMenuOpen = false;

  const toggleNavMenu = () => {
    navRelativeEl.classList.toggle('nav-open');
    mobileMenuButton.classList.toggle('hidden');
    mobileCloseButton.classList.toggle('hidden');
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      document.addEventListener('click', clickOutsideMenu);
    } else {
      document.removeEventListener('click', clickOutsideMenu);
    }
  };

  const clickOutsideMenu = e => {
    const isMenuClicked =
      navRelativeEl.contains(e.target) ||
      mobileMenuButton.contains(e.target) ||
      mobileCloseButton.contains(e.target);
    if (!isMenuClicked && isMenuOpen) {
      toggleNavMenu();
    }
  };

  mobileMenuButton.addEventListener('click', toggleNavMenu);
  mobileCloseButton.addEventListener('click', toggleNavMenu);
};
