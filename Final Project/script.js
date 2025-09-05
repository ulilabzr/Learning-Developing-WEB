document.addEventListener("DOMContentLoaded", () => {
  const text = document.getElementById("marquee-text");
  let pos = text.offsetWidth;

  function move() {
    pos--;
    if (pos < -text.offsetWidth) {
      pos = window.innerWidth; // balik ke kanan layar
    }
    text.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(move); // animasi smooth
  }

  move();
});
