// Initialize Animate On Scroll library with custom settings
// duration: animation duration in milliseconds
// once: only animate elements once
AOS.init({
    duration: 800,
    once: true
});

// Implement smooth scrolling for navigation links
// Selects all anchor tags with href starting with #
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer configuration for fade-in animations
// threshold: percentage of element visible before triggering
const observerOptions = {
    root: null, // use viewport as root
    threshold: 0.1 // trigger when 10% visible
};

// Create observer instance to add 'visible' class to elements
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all container elements for fade-in effect
document.querySelectorAll('.container').forEach((element) => {
    observer.observe(element);
});

// Typing animation configuration
const typingName = document.getElementById('typing-name');
const fullName = 'Yongsuk Prasertsuk';
let nameIndex = 0;
let isDeleting = false;
let typingDelay = 200;

// Function to create typing effect
function typeEffect() {    
    if (!isDeleting && nameIndex <= fullName.length) {
        // Add one character at a time
        typingName.textContent = fullName.slice(0, nameIndex);
        nameIndex++;
        typingDelay = 150;
    }

    setTimeout(typeEffect, typingDelay);
}

// Start typing animation when element is in view
const nameObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        typeEffect();
        nameObserver.disconnect(); // Stop observing after animation starts
    }
});

// Begin observing the typing-name element if it exists
if (typingName) {
    nameObserver.observe(typingName);
}
