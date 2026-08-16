/* ===========================================================
   GROW WITH MOHSIN — Global JS
   Custom cursor, cursor glow, back-to-top, mobile nav toggle
   =========================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- custom cursor (desktop only) ---------- */
  try {
    var isTouch = window.matchMedia('(max-width: 900px)').matches;
    if (!isTouch) {
      var dot = document.createElement('div');
      dot.className = 'cur-dot';
      var ring = document.createElement('div');
      ring.className = 'cur-ring';
      var glow = document.createElement('div');
      glow.className = 'glow';
      document.body.appendChild(glow);
      document.body.appendChild(ring);
      document.body.appendChild(dot);
      document.body.classList.add('custom-cursor-active');

      var rx = window.innerWidth / 2, ry = window.innerHeight / 2;
      dot.style.left = rx + 'px'; dot.style.top = ry + 'px';
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      glow.style.left = rx + 'px'; glow.style.top = ry + 'px';
      dot.style.opacity = '1'; ring.style.opacity = '1'; glow.style.opacity = '1';

      window.addEventListener('mousemove', function (e) {
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
        rx = e.clientX; ry = e.clientY;

        // toggle dark-mode cursor styling when hovering the dark hero/footer
        var el = document.elementFromPoint(e.clientX, e.clientY);
        var onDark = el && el.closest && el.closest('.hero-dark, footer.site-footer, .page-hero.dark');
        ring.classList.toggle('on-dark', !!onDark);
        glow.classList.toggle('on-dark', !!onDark);
      }, { passive: true });

      function loop() {
        var cur = ring.getBoundingClientRect();
        var cx = cur.left + cur.width / 2, cy = cur.top + cur.height / 2;
        var nx = cx + (rx - cx) * 0.18, ny = cy + (ry - cy) * 0.18;
        ring.style.left = nx + 'px';
        ring.style.top = ny + 'px';
        requestAnimationFrame(loop);
      }
      loop();

      document.querySelectorAll('a, button, .svc-card, .pf-card, .price-card, .blog-card, .soc, .hire-chip').forEach(function (el) {
        el.addEventListener('mouseenter', function () {
          ring.style.width = '50px'; ring.style.height = '50px';
        });
        el.addEventListener('mouseleave', function () {
          ring.style.width = '34px'; ring.style.height = '34px';
        });
      });
    }
  } catch (err) {
    // fail silently — never let cursor effect block the rest of the page's JS
    console.warn('Custom cursor skipped:', err);
  }

  /* ---------- back to top ---------- */
  var bt = document.getElementById('backtop');
  if (bt) {
    window.addEventListener('scroll', function () {
      bt.classList.toggle('show', window.scrollY > 400);
    });
    bt.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- mobile nav toggle ---------- */
  var burger = document.querySelector('.nav-burger');
  var links = document.querySelector('.nav-links');
  if (burger && links) {
    burger.addEventListener('click', function () {
      links.classList.toggle('mobile-open');
    });
  }

});
