document.addEventListener('DOMContentLoaded', () => {
    // 1. Run Typewriter
    typewriterEffect();
    // 2. Run Lazy Loader
    lazyLoadImages();
    // 3. Navbar scroll effect
    handleNavbarScroll();
});

function typewriterEffect() {
    const title = document.querySelector('.hero__title');
    if (title) {
        const text = "JAI SINGH RATHORE";
        title.textContent = '';
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                title.classList.add('animate-blink');
                setTimeout(() => { title.style.borderRight = 'none'; }, 3000);
            }
        }, 100);
    }
}

function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.onload = () => img.classList.add('fade-in-complete');
                observer.unobserve(img);
            }
        });
    }, { threshold: 0.1 });
    images.forEach(img => observer.observe(img));
}

function handleNavbarScroll() {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-black/60', 'py-4');
            header.classList.remove('py-6');
        } else {
            header.classList.remove('bg-black/60', 'py-4');
            header.classList.add('py-6');
        }
    });
}