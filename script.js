// STARFIELD
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let stars = [];

function resize() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}

function initStars() {
  stars = [];
  for (let i = 0; i < 120; i++) {
    stars.push({
      x:       Math.random() * canvas.width,
      y:       Math.random() * canvas.height,
      r:       Math.random() * 1.2 + 0.2,
      speed:   Math.random() * 0.15 + 0.03,
      opacity: Math.random() * 0.6 + 0.1,
      delta:   (Math.random() * 0.005 + 0.002) * (Math.random() < 0.5 ? 1 : -1),
    });
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(s => {
    s.opacity += s.delta;
    if (s.opacity >= 0.7 || s.opacity <= 0.05) s.delta *= -1;
    s.y -= s.speed;
    if (s.y < 0) { s.y = canvas.height; s.x = Math.random() * canvas.width; }
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${s.opacity})`;
    ctx.fill();
  });
  requestAnimationFrame(draw);
}

window.addEventListener('resize', () => { resize(); initStars(); });
resize();
initStars();
draw();
