// Function to reveal sections on scroll
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

// Get the elements for the contact button, overlay, close button, and form
const contactBtn = document.getElementById('contactBtn');
const overlay = document.getElementById('contactOverlay');
const closeBtn = document.getElementById('closeBtn');
const contactForm = document.querySelector("#contactOverlay form");

// Show the overlay when the "Contact Us" button is clicked
contactBtn.addEventListener('click', () => {
    overlay.style.display = 'flex'; // Show the overlay
});

// Close the overlay when the close button is clicked
closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none'; // Hide the overlay
});

// Close the overlay when clicking outside the form
overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        overlay.style.display = 'none';
    }
});

// Handle form submission
contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission (for testing)

    // (Optional) Show a success message
    alert("Your inquiry has been submitted! You will receive a response soon.");

    // Close the overlay after submission
    overlay.style.display = "none";

    // (Optional) Reset the form fields
    contactForm.reset();
});
