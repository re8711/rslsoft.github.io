// Scroll to element function for Blazor interop
window.scrollToElement = (elementId) => {
const element = document.getElementById(elementId);
if (element) {
element.scrollIntoView({ behavior: 'smooth' });
}
};

// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', () => {
const observerOptions = {
root: null,
rootMargin: '0px',
threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.opacity = '1';
entry.target.style.transform = 'translateY(0)';
}
});
}, observerOptions);

// Observe all info cards
const cards = document.querySelectorAll('.info-card');
cards.forEach((card, index) => {
card.style.opacity = '0';
card.style.transform = 'translateY(30px)';
card.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
observer.observe(card);
});
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) {
target.scrollIntoView({
behavior: 'smooth',
block: 'start'
});
}
});
});
