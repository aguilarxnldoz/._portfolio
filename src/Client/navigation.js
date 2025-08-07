/* Navigation */

const navigationButton = document.getElementById("navigation-button");
const navigationContents = document.getElementById("navigation-contents");
const navigationOverlay = document.getElementById("navigation-overlay");
const icon = document.getElementById("navigation-button-icon");
let menuOpen = false;

function openMenu() {
    // Show the overlay
    navigationOverlay?.classList.remove("hidden");

    // Show and animate the menu
    navigationContents?.classList.remove("hidden");
    navigationContents?.classList.add("flex", "flex-col");

    // Trigger animation after a small delay to ensure the element is rendered
    setTimeout(() => {
        navigationContents?.classList.remove("translate-x-full");
        navigationContents?.classList.add("translate-x-0");
    }, 10);

    // Change icon
    icon?.classList.remove("fa-bars");
    icon?.classList.add("fa-xmark");

    menuOpen = true;
}

function closeMenu() {
    // Animate menu out
    navigationContents?.classList.remove("translate-x-0");
    navigationContents?.classList.add("translate-x-full");

    // Hide overlay and menu after animation completes
    setTimeout(() => {
        navigationContents?.classList.add("hidden");
        navigationContents?.classList.remove("flex", "flex-col");
        navigationOverlay?.classList.add("hidden");
    }, 300); // Match the duration-300 class

    // Change icon
    icon?.classList.remove("fa-xmark");
    icon?.classList.add("fa-bars");

    menuOpen = false;
}

function toggleNavigationMenu() {
    if (menuOpen) {
        closeMenu();
        return;
    }

    openMenu();
}

// Close menu when clicking on overlay
navigationOverlay?.addEventListener("click", closeMenu);

navigationButton?.addEventListener("click", toggleNavigationMenu);

// Close menu when clicking on navigation links (mobile only)
const navigationLinks = document.querySelectorAll("#navigation-contents a");
navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        // Only close menu on mobile (when menu is open)
        if (menuOpen) {
            closeMenu();
        }
    });
});
