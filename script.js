// Existing function to reveal sections on scroll
function revealSections() {
    const sections = document.querySelectorAll('.scroll-section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        if (section.getBoundingClientRect().top < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Get the elements for the contact button, overlay, and close button
const contactBtn = document.getElementById('contactBtn');
const overlay = document.getElementById('contactOverlay');
const closeBtn = document.getElementById('closeBtn');

// Show the overlay when the "Contact Us" button is clicked
contactBtn.addEventListener('click', () => {
    overlay.style.display = 'flex'; // Show the overlay (set display to flex)
});

// Close the overlay when the close button is clicked
closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none'; // Hide the overlay (set display to none)
});

// Optional: Close the overlay if the user clicks anywhere outside the form
overlay.addEventListener('click', (event) => {
    if (event.target === overlay) { // Check if the click was on the overlay, not the form itself
        overlay.style.display = 'none'; // Close the overlay
    }
});

