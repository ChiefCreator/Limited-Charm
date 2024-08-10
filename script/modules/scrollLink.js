const $links = document.querySelectorAll(".link");
const $buttons = document.querySelectorAll(".button");

$buttons.forEach($button => {
    $button.addEventListener("click", clickButtonHandler);

    function clickButtonHandler() {
        const href = this.dataset.href;
        if (href) document.querySelector(href).scrollIntoView({behavior: "smooth"});
    }
})

$links.forEach($link => {
    $link.addEventListener("click", clickLinkHandler);

    function clickLinkHandler() {
        const href = this.dataset.href;
        if (href) {
            if (document.querySelector(".burger") && document.querySelector(".burger").classList.contains("burger_active")) {
                toggleButtonBurgerHandler();
            }
            document.querySelector(href).scrollIntoView({behavior: "smooth"});
        }
    }
})