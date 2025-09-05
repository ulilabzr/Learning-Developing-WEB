document.addEventListener("DOMContentLoaded", () => {
  const text = document.getElementById("marquee-text");
  let pos = 0;
  const speed = 1;

  text.innerHTML = text.innerHTML + text.innerHTML;

  function move() {
    pos -= speed;
    if (Math.abs(pos) >= text.scrollWidth / 2) {
      pos = 0;
    }
    text.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(move);
  }

  move();
});