window.addEventListener("DOMContentLoaded", () => {

const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');

let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
});

function animateCursor() {
  if (!cursor || !ring) return;

  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';

  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;

  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';

  requestAnimationFrame(animateCursor);
}

animateCursor();

    // Hover effect on interactive elements
    document.querySelectorAll('a, button, .program-card, .trainer-card, .pricing-card').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        ring.style.width = '52px';
        ring.style.height = '52px';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '12px';
        cursor.style.height = '12px';
        ring.style.width = '36px';
        ring.style.height = '36px';
      });
    });

    // Navbar scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Reveal on scroll
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));

    // Smooth anchor links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href');
        if (id === '#') return;
        e.preventDefault();
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Form submit
    function handleSubmit(e) {
      e.preventDefault();
      const btn = document.getElementById('submitBtn');
      btn.textContent = '✓ Message Sent!';
      btn.style.background = '#1a7a3c';
      setTimeout(() => {
        btn.textContent = 'Send Message →';
        btn.style.background = '';
        e.target.reset();
      }, 3000);
    }

    // Animated counter for hero stats
    function animateCount(el, target, suffix = '') {
      let current = 0;
      const step = target / 60;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.querySelector('span').textContent = (current >= target ? target : Math.floor(current)) + suffix;
        if (current >= target) clearInterval(timer);
      }, 20);
    }
  });