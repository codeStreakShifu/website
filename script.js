// script.js

// Hamburger menu toggle
document.getElementById('hamburger').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active'); // Toggle the active class on click
});

// Submenu toggle functionality
const submenuToggles = document.querySelectorAll('.submenu-toggle');
submenuToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
        this.classList.toggle('active'); // Toggle the active class on submenu toggle
        const submenu = this.nextElementSibling; // Get the next sibling (submenu)
        if (submenu) {
            submenu.classList.toggle('active'); // Toggle the submenu display
        }
    });
});

// Navigation link active state
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(nav => nav.classList.remove('active')); // Remove active class from all links
        this.classList.add('active'); // Add active class to the clicked link
    });
});

// Change header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50); // Toggle the scrolled class based on scroll position
});

// Scroll Animation for sections
const sections = document.querySelectorAll('.hero, .featured-book, .about');
const observerOptions = {
    root: null,
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Uncomment the next line if you want to stop observing once it becomes visible
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Scroll Animation for book images
const boxes = document.querySelectorAll('.bookButimg');
const observer1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer1.unobserve(entry.target); // Stop observing once it becomes visible
        }
    });
}, observerOptions);

boxes.forEach(box => {
    observer1.observe(box);
});
