document.querySelectorAll(".viewMoreBtn").forEach((btn, index) => {
    const moreContent = document.querySelectorAll(".moreContent")[index];
    const icon = btn.querySelector("i");

    moreContent.style.display = 'none'; // Initially hidden

    btn.addEventListener('click', () => {
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'block'; // Show content
            btn.firstChild.textContent = 'View Less '; // Change button text
            icon.style.transform = 'rotate(180deg)'; // Rotate icon
        } else {
            moreContent.style.display = 'none'; // Hide content
            btn.firstChild.textContent = 'View More '; // Reset button text
            icon.style.transform = 'rotate(0deg)'; // Reset icon rotation
        }
    });
});
