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
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
        e.preventDefault();
        alert('Copying is disabled on this website.');
    }
});