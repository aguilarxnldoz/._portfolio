const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const technologies = entry.target.querySelectorAll(".used-technology");
            technologies.forEach((tech, index) => {
                setTimeout(() => {
                    tech.classList.add("show");
                }, index * 50);
            });
        } else {
            const technologies = entry.target.querySelectorAll(".used-technology");
            technologies.forEach((tech) => {
                tech.classList.remove("show");
            });
        }
    });
});

const stackContainer = document.querySelector("#stack-container");
if (stackContainer) {
    observer.observe(stackContainer);
}
