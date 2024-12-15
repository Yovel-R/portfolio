document.addEventListener("DOMContentLoaded", function () {
    // Animate profile container
    const profileContainer = document.querySelector(".profile-container");
    const profileObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                profileContainer.classList.add("visible");
            } else {
                profileContainer.classList.remove("visible");
            }
        });
    });
    profileObserver.observe(profileContainer);

    // Animate boxes
    const boxes = document.querySelectorAll(".box");
    const boxObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    });

    boxes.forEach((box) => boxObserver.observe(box));
});
