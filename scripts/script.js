
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


// Scroll Effect 
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});
