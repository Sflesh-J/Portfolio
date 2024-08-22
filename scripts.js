let toggleBtn = document.getElementById("toggle-btn");
let menuItems = document.querySelectorAll(".menu a");
let menuActive = false;
toggleBtn.addEventListener("click", () => {
  if (!menuActive) {
    menuItems[0].style.transform = "translate(150px,0)";
    menuItems[1].style.transform = "translate(150px,90px)";
    menuItems[2].style.transform = "translate(90px,150px)";
    menuItems[3].style.transform = "translate(0,150px)";
    menuActive = true;
    toggleBtn.classList.add("active");
  } else {
    menuItems.forEach((menuItem) => {
      menuItem.style.transform = "translate(0,0)";
    });
    menuActive = false;
    toggleBtn.classList.remove("active");
  }
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Vielen Dank für Ihre Nachricht!');
});

// Anime.js Animationen
anime({
    targets: '#showcase h1',
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeOutExpo'
});

anime({
    targets: '#showcase p',
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeOutExpo',
    delay: 500
});

// Scroll-Animationen
document.querySelectorAll('.content').forEach((section, index) => {
    section.classList.add('animate__animated', 'animate__fadeInUp');
    section.style.animationDelay = `${index * 0.5}s`;
});

// Dropdown Menü
document.getElementById('nav-toggle').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    if (navMenu.classList.contains('hidden')) {
        navMenu.classList.remove('hidden');
    } else {
        navMenu.classList.add('hidden');
    }
});
