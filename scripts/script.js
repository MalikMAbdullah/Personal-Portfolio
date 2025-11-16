
const texts = ["Front-end Developer", "Android App Developer", "Graphic Designer"];
let index = 0;
let char = 0;
let isDeleting = false;

function typeEffect() {
    const target = document.querySelector(".multiple");
    const current = texts[index];

    target.textContent = current.substring(0, char);

    if (!isDeleting) {
        char++;
        if (char === current.length + 1) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        char--;
        if (char === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();


// Scroll Effect - Header transitions on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
    header.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    header.style.backdropFilter = "blur(10px)";
  } else {
    header.classList.remove("scrolled");
    header.style.backgroundColor = "transparent";
    header.style.backdropFilter = "none";
  }
});

// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    // Only smooth scroll for anchor links (not empty hrefs)
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
