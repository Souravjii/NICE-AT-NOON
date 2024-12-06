// Select all slider cards
const sliderCards = document.querySelectorAll('.slider-card');

// Variable to track the scroll position
let lastScrollTop = 0;

// Add a scroll event listener
window.addEventListener('scroll', () => {
    // Get the current scroll position
    const currentScrollTop = window.scrollY;

    // Determine scroll direction
    const scrollDirection = currentScrollTop > lastScrollTop ? -1 : 1;

    // Move cards based on scroll direction
    sliderCards.forEach((card, index) => {
        // Calculate new translateX value for each card
        const currentTransform = parseFloat(getComputedStyle(card).transform.split(',')[4]) || 0;
        const newTransform = currentTransform + scrollDirection * 10;

        // Apply the new transform value
        card.style.transform = `translateX(${newTransform}px)`;
    });

    // Update the last scroll position
    lastScrollTop = currentScrollTop;
});
document.addEventListener("DOMContentLoaded", () => {
    const paragraphs = document.querySelectorAll(".mid p");

    const observerOptions = {
        root: null, // Use the viewport
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("appear");
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    paragraphs.forEach(p => observer.observe(p));
});
document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll(".scroll-effect");

    const elementInView = (el, offset = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            (window.innerHeight || document.documentElement.clientHeight) * offset
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("visible");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", handleScrollAnimation);
});
