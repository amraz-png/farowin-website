// Shared nav and footer HTML injected into every page
function renderNav(activePage) {
  const pages = [
    { href: 'index.html', label: 'Home' },
    { href: 'packages.html', label: 'Packages' },
    { href: 'flight.html', label: 'Flights' },
    { href: 'ship.html', label: 'Cruises' },
    { href: 'gallery.html', label: 'Gallery' },
    { href: 'contact.html', label: 'Contact' },
  ];
  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${p.label === activePage ? 'active' : ''}">${p.label}</a></li>`
  ).join('');
  const mobileLinks = pages.map(p =>
    `<a href="${p.href}">${p.label}</a>`
  ).join('');

  document.getElementById('nav-placeholder').innerHTML = `
    <nav>
      <a href="index.html" class="nav-logo">FAROWIN<span> TOURS & TRAVELS</span></a>
      <ul class="nav-links">${links}</ul>
      <a href="contact.html" class="nav-cta">Book Now</a>
      <div class="hamburger" onclick="toggleMobile()">
        <span></span><span></span><span></span>
      </div>
    </nav>
    <div class="mobile-menu" id="mobile-menu">${mobileLinks}</div>
  `;

  // Inject floating Instagram + WhatsApp buttons (on every page)
  renderFloatingButtons();
}

function renderFloatingButtons() {
  // Avoid duplicate injection
  if (document.getElementById('floating-buttons')) return;

  const css = `
    <style id="floating-buttons-css">
      .floating-buttons {
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        z-index: 9999;
      }
      .floating-btn {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        box-shadow: 0 4px 14px rgba(0,0,0,0.3);
        transition: transform 0.25s ease, box-shadow 0.25s ease;
        font-size: 1.6rem;
        color: #fff;
      }
      .floating-btn:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 20px rgba(0,0,0,0.4);
      }
      .floating-btn.whatsapp {
        background: #25D366;
      }
      .floating-btn.instagram {
        background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
      }
      .floating-btn svg {
        width: 28px;
        height: 28px;
        fill: #fff;
      }
      @media (max-width: 600px) {
        .floating-buttons { bottom: 16px; right: 16px; gap: 10px; }
        .floating-btn { width: 50px; height: 50px; }
        .floating-btn svg { width: 24px; height: 24px; }
      }
    </style>
  `;

  const html = `
    <div class="floating-buttons" id="floating-buttons">
      <a href="https://wa.me/919495768129?text=Hello%20FAROWIN%2C%20I%27d%20like%20to%20enquire%20about%20your%20travel%20packages."
         target="_blank" rel="noopener" class="floating-btn whatsapp" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
      <a href="https://www.instagram.com/farowin.tours_travels"
         target="_blank" rel="noopener" class="floating-btn instagram" aria-label="Follow on Instagram">
        <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
      </a>
    </div>
  `;

  document.head.insertAdjacentHTML('beforeend', css);
  document.body.insertAdjacentHTML('beforeend', html);
}

function renderFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer>
      <div class="footer-grid">
        <div>
          <div class="footer-brand">FAROWIN TOURS & TRAVELS</div>
          <p class="footer-desc">Crafting unforgettable travel experiences from the shores of Lakshadweep to the world's finest destinations.</p>
        </div>
        <div>
          <div class="footer-heading">Services</div>
          <ul class="footer-links">
            <li><a href="packages.html">Tour Packages</a></li>
            <li><a href="flight.html">Flight Booking</a></li>
            <li><a href="ship.html">Cruise & Ships</a></li>
            <li><a href="contact.html">Custom Tours</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-heading">Destinations</div>
          <ul class="footer-links">
            <li><a href="packages.html">Lakshadweep</a></li>
            <li><a href="packages.html">Maldives</a></li>
            <li><a href="packages.html">Kerala</a></li>
            <li><a href="packages.html">Dubai</a></li>
            <li><a href="packages.html">Europe</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-heading">Contact</div>
          <ul class="footer-links">
            <li><a href="tel:+919495768129">+91 94957 68129</a></li>
            <li><a href="tel:+919995588169">+91 99955 88169</a></li>
            <li><a href="mailto:farowin.travel@gmail.com">farowin.travel@gmail.com</a></li>
            <li style="color:var(--text-light);font-size:0.85rem;">Agatti Island, Lakshadweep</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-copy">© 2025 FAROWIN Tours & Travels LLP. All rights reserved.</div>
        <div class="footer-socials">
          <a class="social-btn" href="https://www.instagram.com/farowin.tours_travels" target="_blank" rel="noopener" aria-label="Instagram">IG</a>
          <a class="social-btn" href="https://wa.me/919495768129" target="_blank" rel="noopener" aria-label="WhatsApp">WA</a>
          <a class="social-btn" href="mailto:farowin.travel@gmail.com" aria-label="Email">✉</a>
        </div>
      </div>
    </footer>
  `;
}

function toggleMobile() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

function handleSubmit(btn, msg = 'Request Sent!') {
  const orig = btn.textContent;
  btn.textContent = '✓ ' + msg;
  btn.style.background = '#1B5E20';
  btn.style.color = '#fff';
  setTimeout(() => { btn.textContent = orig; btn.style.background = ''; btn.style.color = ''; }, 3000);
}

// Scroll reveal
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.animation = 'fadeUp 0.7s ease forwards';
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}
