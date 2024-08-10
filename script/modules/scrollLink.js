const $links = document.querySelectorAll(".link");
const $buttons = document.querySelectorAll(".button");
const $header = document.querySelector(".header");
const isStickyHeader = getComputedStyle($header).position === "sticky";
const headerHeight = $header.offsetHeight;

$buttons.forEach($button => {
    $button.addEventListener("click", clickButtonHandler);

    function clickButtonHandler() {
        const href = this.dataset.href;
        if (href) window.scrollTo({top: getGlobalOffsetTop(document.querySelector(href)) - (isStickyHeader ? headerHeight : 0), behavior: "smooth"});
    }
})
function getGlobalOffsetTop($block) {
    if (!$block) return 0;
    const offset = $block.offsetTop;
    return offset + getGlobalOffsetTop($block.offsetParent);
}

$links.forEach($link => {
    $link.addEventListener("click", clickLinkHandler);

    function clickLinkHandler() {
        const href = this.dataset.href;
        if (href) {
            if (document.querySelector(".burger") && document.querySelector(".burger").classList.contains("burger_active")) toggleButtonBurgerHandler();
            window.scrollTo({top: getGlobalOffsetTop(document.querySelector(href)) - (isStickyHeader ? headerHeight : 0), behavior: "smooth"});
        }
    }
})