// Scroll event listener to move clouds
document.addEventListener('scroll', function() {
    const cloud1 = document.getElementById('cloud1');
    const cloud2 = document.getElementById('cloud2');
    const cloud3 = document.getElementById('cloud3');
    const scrollPosition = window.scrollY;

    // Clouds move on scroll with different speeds to create parallax effect
    cloud1.style.transform = `translate(-50%, ${scrollPosition * 0.2}px)`;
   // cloud2.style.transform = `translate(-50%, ${scrollPosition * 0.1}px)`;
    cloud2.style.transform = `translate(-50%, ${scrollPosition * 0.15}px)`;
});

// Intersection Observer for fade-in effect on sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
