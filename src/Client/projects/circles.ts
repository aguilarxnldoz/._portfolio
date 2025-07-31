const circlesTabButton = document.getElementById("circles-tab-button");
const circlesContainer = document.getElementById("projx-circles");
const circlesDescription = document.getElementById("circles-description");
let active = false;

function toggleCirclesProject() {
    circlesContainer?.classList.add("transition-all", "duration-500", "ease-in-out");
    if (active) {
        circlesDescription?.classList.add("hidden");
        circlesTabButton?.firstElementChild?.classList.remove("fa-solid", "fa-circle-dot");
        circlesTabButton?.firstElementChild?.classList.add("fa-solid", "fa-chevron-down");
        active = false;
    } else {
        circlesDescription?.classList.remove("hidden");
        circlesTabButton?.firstElementChild?.classList.remove("fa-solid", "fa-chevron-down");
        circlesTabButton?.firstElementChild?.classList.add("fa-solid", "fa-circle-dot");

        active = true;
    }
}

function toggleCirclesProjectInTabletView() {
    const viewportWidth = window.innerWidth;
    if (viewportWidth >= 768 && viewportWidth < 1024) {
        toggleCirclesProject();
    }
}

circlesTabButton?.addEventListener("click", toggleCirclesProject);
circlesContainer?.addEventListener("click", toggleCirclesProjectInTabletView);
