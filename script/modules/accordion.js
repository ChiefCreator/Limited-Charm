const $accordionList = document.querySelector(".accordion-list");
$accordionList.addEventListener("click", clickAccordionHandler);

function clickAccordionHandler(event) {
    if (!event.target.closest(".accordion")) return;

    const $activeAccordion = document.querySelector(".accordion_open");
    const $accordion = event.target.closest(".accordion");

    if ($activeAccordion && $activeAccordion !== $accordion) {
        $activeAccordion.classList.remove("accordion_open");
    }

    $accordion.classList.toggle("accordion_open");
}
