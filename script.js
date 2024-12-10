// Show the full image in the modal
function showFullImage(img) {
    const modal = document.getElementById('imageModal');
    const fullImage = document.getElementById('fullImage');
    fullImage.src = img.src; // Set the clicked image's source
    modal.style.display = 'flex'; // Show the modal
}

// Close the modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none'; // Hide the modal
}
