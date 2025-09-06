document.addEventListener("DOMContentLoaded", () => {
  const text = document.getElementById("marquee-text");
  let pos = 0;
  const speed = 1;

  text.innerHTML = text.innerHTML + " \u00A0 \u00A0 " + text.innerHTML;

  function move() {
    pos -= speed;
    if (Math.abs(pos) >= text.scrollWidth / 2) {
      pos = 0;
    }
    text.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(move);
  }
  move();

  // Hamburger menu toggle
  const navToggle = document.getElementById("nav-toggle");
  const navList = document.getElementById("nav-list");

  navToggle.addEventListener("click", () => {
    navList.classList.toggle("nav-open");
  });

  // Optional: close nav when clicking outside
  document.addEventListener("click", (e) => {
    if (
      navList.classList.contains("nav-open") &&
      !navList.contains(e.target) &&
      !navToggle.contains(e.target)
    ) {
      navList.classList.remove("nav-open");
    }
  });
});
