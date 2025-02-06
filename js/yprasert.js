// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    once: true
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add intersection observer for fade-in effects
const observerOptions = {
    root: null,
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.container').forEach((element) => {
    observer.observe(element);
});

// Typing animation for name
const typingName = document.getElementById('typing-name');
const fullName = 'Yongsuk Prasertsuk';
let nameIndex = 0;
let isDeleting = false;
let typingDelay = 200;

function typeEffect() {
    const currentText = typingName.textContent;
    
    if (!isDeleting && nameIndex <= fullName.length) {
        typingName.textContent = fullName.slice(0, nameIndex);
        nameIndex++;
        typingDelay = 150;
    }

    setTimeout(typeEffect, typingDelay);
}

// Start typing animation when the element is in view
const nameObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        typeEffect();
        nameObserver.disconnect();
    }
});

if (typingName) {
    nameObserver.observe(typingName);
}
