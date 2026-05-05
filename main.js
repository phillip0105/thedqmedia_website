document.addEventListener("DOMContentLoaded", () => {
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Intersection Observer for Scroll Reveal Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Auto-add animation classes to common elements
    const elementsToAnimate = document.querySelectorAll(`
        .section-header, 
        .value-card, 
        .process-step, 
        .pricing-card, 
        .module-card, 
        .showcase-item,
        .cta h2,
        .cta p,
        .timeline-step
    `);

    elementsToAnimate.forEach((el, index) => {
        // Add base animation class
        if (!el.classList.contains('animate-on-scroll')) {
            el.classList.add('animate-on-scroll');
        }
        
        // Determine stagger based on position in parent relative to siblings
        // A simple way is to use modulus
        const staggerIndex = (index % 4) + 1;
        el.classList.add(`stagger-${staggerIndex}`);

        // Start observing
        observer.observe(el);
    });
});
