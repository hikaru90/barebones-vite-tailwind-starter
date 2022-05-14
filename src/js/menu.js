const menu = document.querySelector("#menu");
const menuToggle = document.querySelector("#menuToggle");

const menuIsOpen = function () {
  if (menu.classList.contains("open")) {
    return true;
  }
  return false;
};

const openMenu = function () {
  menu.classList.add("open");
};

const closeMenu = function () {
  menu.classList.remove("open");
};

const toggleMenu = function () {
  if (menuIsOpen()) {
    closeMenu();
  } else {
    openMenu();
  }
};

menuToggle.addEventListener("click", toggleMenu);
