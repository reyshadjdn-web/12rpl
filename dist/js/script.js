// =====================
// AUDIO PLAYER (FIX)
// =====================
const bgMusic = document.getElementById("bgMusic");
const playBtn = document.getElementById("playBtn");

if (bgMusic && playBtn) {
  const icon = playBtn.querySelector("i");

  playBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
      icon.classList.remove("fa-play");
      icon.classList.add("fa-pause");
    } else {
      bgMusic.pause();
      icon.classList.remove("fa-pause");
      icon.classList.add("fa-play");
    }
  });
}



// =====================
// SCROLL UP BUTTON (FIX) - OPTIMIZED
// =====================
const scrollBtn = document.querySelector(".scroll-up");
let scrollTimeout;

window.addEventListener("scroll", () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    if (scrollBtn) {
      scrollBtn.style.display = window.scrollY > 300 ? "flex" : "none";
    }
  }, 50);
}, { passive: true });


// =====================
// SMOOTH SCROLL - OPTIMIZED
// =====================
document.addEventListener("click", (e) => {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
});


// =====================
// GALERI INTERAKTIF - OPTIMIZED
// =====================
document.addEventListener("click", (e) => {
  if (e.target.matches(".siswa-photo img")) {
    e.target.classList.toggle("zoom");
  }
});




const randomImg = document.getElementById("randomImage");
const randomBtn = document.getElementById("randomBtn");

const galleryImages = Array.from(
  document.querySelectorAll("#gallery-source img")
).map(img => img.src);

if (randomBtn && randomImg) {
  randomBtn.addEventListener("click", () => {
    randomImg.classList.add("fade");

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * galleryImages.length);
      randomImg.src = galleryImages[randomIndex];
      randomImg.classList.remove("fade");
    }, 300);
  });
}
// =====================
// PARTICLES BACKGROUND
// =====================
if (typeof particlesJS !== "undefined") {
  particlesJS("particles-js", {
    particles: {
      number: { value: 40 },
      color: { value: ["#11ff00", "#f74125", "#b5179e"] },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 2.5, random: true },
      line_linked: {
        enable: true,
        distance: 100,
        color: "#4cf052",
        opacity: 0.3,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.5
      }
    },
    interactivity: {
      events: {
        onhover: { enable: false, mode: "grab" },
        onclick: { enable: false, mode: "push" }
      },
      modes: {
        grab: { distance: 150 },
        push: { particles_nb: 2 }
      }
    }
  });
}


AOS.init({
  once: true,
  disable: () => window.innerWidth < 768
});





const heroImage = document.getElementById("heroImage");

const images = [
  "assets/images/hero1.jpeg",
  "assets/images/hero2.jpeg",
  "assets/images/hero3.jpeg",
  "assets/images/hero4.jpeg",
  "assets/images/hero5.jpeg",
];

let index = 0;
let heroInterval;

function rotateHero() {
  heroImage.style.opacity = 0;
  heroInterval = setTimeout(() => {
    index = (index + 1) % images.length;
    heroImage.src = images[index];
    heroImage.style.opacity = 1;
  }, 500);
}

setInterval(rotateHero, 4000);


console.log("slider jalan");






