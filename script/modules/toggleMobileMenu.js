const $buttonBurger = document.querySelector(".burger");
const $mobileMenu = document.querySelector(".header__links");

$buttonBurger.addEventListener("click", toggleButtonBurgerHandler);

function toggleButtonBurgerHandler() {
    $mobileMenu.classList.toggle("header__links_open");
    $buttonBurger.classList.toggle("burger_active");
    const isLock = $buttonBurger.classList.contains("burger_active");
    toggleScroll(isLock, timeout = 500);
}