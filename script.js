document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const fadeImage = document.getElementById('fade-image');
    
    // Check if the animation has already run in this session
    const hasAnimated = sessionStorage.getItem('hasAnimated');

    if (!hasAnimated) {
        // Start the fade-in animation
        setTimeout(() => {
            fadeImage.style.opacity = '0'; // Start fading out
            fadeImage.style.transform = 'rotate(360deg)'; // Spin

            // Wait for the fade-out to complete before hiding the overlay
            setTimeout(() => {
                overlay.style.opacity = '0'; // Fade out overlay
                setTimeout(() => {
                    overlay.style.display = 'none'; // Finally hide it
                }, 1000); // Match with CSS transition (1 second)
                sessionStorage.setItem('hasAnimated', 'true'); // Set flag in sessionStorage
            }, 1000); // Wait for the image to fade out
        }, 500); // Small delay before starting the fade
    } else {
        // If already animated, hide the overlay immediately
        overlay.style.display = 'none'; 
    }
});
