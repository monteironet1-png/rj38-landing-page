// STARFIELD ANIMATION
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let stars = [];
const STAR_COUNT = 180;

function resize() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}

function initStars() {
  stars = [];
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x:       Math.random() * canvas.width,
      y:       Math.random() * canvas.height,
      r:       Math.random() * 1.5 + 0.3,
      speed:   Math.random() * 0.25 + 0.05,
      opacity: Math.random(),
      delta:   (Math.random() * 0.008 + 0.003) * (Math.random() < 0.5 ? 1 : -1),
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(s => {
    s.opacity += s.delta;
    if (s.opacity >= 1 || s.opacity <= 0) s.delta *= -1;
    s.y -= s.speed;
    if (s.y < 0) { s.y = canvas.height; s.x = Math.random() * canvas.width; }
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${Math.max(0, Math.min(1, s.opacity))})`;
    ctx.fill();
  });
  requestAnimationFrame(drawStars);
}

window.addEventListener('resize', () => { resize(); initStars(); });
resize();
initStars();
drawStars();
