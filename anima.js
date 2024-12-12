document.addEventListener("DOMContentLoaded", function () {
    const profileContainer = document.querySelector(".profile-container");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                profileContainer.classList.add("visible");
            } else {
                profileContainer.classList.remove("visible");
            }
        });
    });

    observer.observe(profileContainer);
});
