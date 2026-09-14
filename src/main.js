import './style.css';
import { PRODUCTS } from './data.js';

/* ── CART STATE (localStorage) ──────────────────────────────────────────── */
let cart = JSON.parse(localStorage.getItem('kurundu_cart') || '[]');

function saveCart() { localStorage.setItem('kurundu_cart', JSON.stringify(cart)); }
function cartCount() { return cart.reduce((s, i) => s + i.qty, 0); }
function cartTotal() { return cart.reduce((s, i) => s + i.price * i.qty, 0); }

/* ── BADGE ──────────────────────────────────────────────────────────────── */
function updateBadge() {
  const b = document.getElementById('cbadge');
  if (!b) return;
  const n = cartCount();
  b.textContent = n;
  b.classList.toggle('on', n > 0);
}

/* ── CART ACTIONS ───────────────────────────────────────────────────────── */
export function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const ex = cart.find(x => x.id === id);
  if (ex) ex.qty++;
  else cart.push({ id: p.id, name: p.name, spec: p.spec, price: p.price, unit: p.unit, image: p.image, qty: 1 });
  saveCart(); updateBadge(); renderDrawer();
  showToast(`Added: ${p.name}`);
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  saveCart(); updateBadge(); renderDrawer();
}

function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty = Math.max(0, item.qty + delta);
  if (item.qty === 0) removeFromCart(id);
  else { saveCart(); updateBadge(); renderDrawer(); }
}

/* ── DRAWER RENDER ──────────────────────────────────────────────────────── */
function renderDrawer() {
  const body = document.getElementById('d-body');
  const foot = document.getElementById('d-foot');
  const tot  = document.getElementById('d-tot');
  if (!body) return;

  if (!cart.length) {
    body.innerHTML = `
      <div class="drawer-empty">
        <div class="drawer-empty-icon">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="23" stroke="var(--amber)" stroke-width="1.5" opacity=".3"/>
            <path d="M16 20h16l-2 12H18L16 20z" stroke="var(--amber)" stroke-width="1.5" stroke-linejoin="round" fill="none" opacity=".7"/>
            <path d="M20 20v-3a4 4 0 018 0v3" stroke="var(--amber)" stroke-width="1.5" stroke-linecap="round" fill="none" opacity=".7"/>
          </svg>
        </div>
        <div class="drawer-empty-title">Your inquiry list is empty</div>
        <p class="drawer-empty-sub">Browse our premium Ceylon cinnamon range and add products to build your inquiry.</p>
        <a href="shop.html" class="btn btn-jade" style="margin-top:20px;font-size:14px;padding:12px 24px;">Explore Products →</a>
      </div>`;
    if (foot) foot.style.display = 'none';
    return;
  }

  body.innerHTML = cart.map(item => `
    <div class="ci-row">
      <div class="ci-thumb" style="background-image:url('${item.image}')"></div>
      <div class="ci-info">
        <div class="ci-name">${item.name}</div>
        <div class="ci-spec">${item.spec}</div>
        <div class="ci-ctrl">
          <div class="ci-qty-group">
            <button class="ci-qty-btn" onclick="window._chgQty(${item.id},-1)">−</button>
            <span class="ci-qty-num">${item.qty}</span>
            <button class="ci-qty-btn" onclick="window._chgQty(${item.id},1)">+</button>
          </div>
          <button class="ci-rm" onclick="window._rmCart(${item.id})">✕ Remove</button>
        </div>
      </div>
    </div>`).join('');

  if (foot) foot.style.display = 'block';
  if (tot) tot.textContent = `${cartCount()} item${cartCount() > 1 ? 's' : ''} ready to inquire`;
}

/* ── DRAWER OPEN / CLOSE ────────────────────────────────────────────────── */
export function openDrawer() {
  document.getElementById('veil')?.classList.add('on');
  document.getElementById('drawer')?.classList.add('on');
  document.body.style.overflow = 'hidden';
}
export function closeDrawer() {
  document.getElementById('veil')?.classList.remove('on');
  document.getElementById('drawer')?.classList.remove('on');
  document.body.style.overflow = '';
}

/* ── TOAST ──────────────────────────────────────────────────────────────── */
let _toastTimer;
export function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

/* ── MODAL ──────────────────────────────────────────────────────────────── */
export function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const body = document.getElementById('mbody');
  if (!body) return;

  const details = Object.entries(p.det)
    .filter(([k]) => k !== 'price')
    .map(([k, v]) => `
      <div class="md-row">
        <span class="md-label">${k}</span>
        <span class="md-value">${v}</span>
      </div>`).join('');

  body.innerHTML = `
    <div class="modal-hero">
      <img src="${p.image}" alt="${p.name}" class="modal-hero-img" onerror="this.parentElement.style.background='var(--cream-2)'">
      <div class="modal-hero-overlay">
        <span class="modal-grade-badge">${p.spec}</span>
      </div>
    </div>
    <div class="modal-content">
      <h2 class="modal-product-name">${p.name}</h2>
      <p class="modal-product-desc">${p.long}</p>
      <div class="modal-specs">
        ${details}
      </div>
      <div class="modal-actions">
        <button class="btn btn-jade modal-add-btn" onclick="window._addCart(${p.id});window._closeModal()">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
          Add to Inquiry
        </button>
        <p class="modal-note">Inquiry only — we confirm availability within 24 hrs</p>
      </div>
    </div>`;

  document.getElementById('mveil')?.classList.add('on');
  document.body.style.overflow = 'hidden';
}

export function closeModal(e) {
  if (e && e.target !== document.getElementById('mveil')) return;
  _closeModalInner();
}
function _closeModalInner() {
  document.getElementById('mveil')?.classList.remove('on');
  document.body.style.overflow = '';
}

/* ── SEND INQUIRY ───────────────────────────────────────────────────────── */
export function sendInquiry() {
  if (!cart.length) return;
  const lines = cart.map(i => `${i.name} (${i.spec}) × ${i.qty}  —  $${(i.price*i.qty).toFixed(2)}`).join('\n');
  const subject = encodeURIComponent('Golden Aroma — Product Inquiry');
  const body = encodeURIComponent(
    `Hello,\n\nI'd like to inquire about the following products:\n\n${lines}\n\nEstimated total: $${cartTotal().toFixed(2)}\n\nPlease confirm pricing, availability, and shipping.\n\nThank you.`
  );
  window.open(`mailto:goldenaroma01@gmail.com?subject=${subject}&body=${body}`);
}

/* ── GO (SMOOTH SCROLL) ─────────────────────────────────────────────────── */
export function go(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

/* ── NAV ────────────────────────────────────────────────────────────────── */
function initNav() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  const tick = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', tick, { passive: true });
  tick();

  // Highlight active page link
  const page = window.location.pathname.split('/').pop() || 'index.html';
  nav.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (
      (page === 'index.html' && href === 'index.html') ||
      (page !== 'index.html' && href.includes(page.replace('.html', '')))
    ) a.classList.add('active');
  });
}

/* ── MOBILE MENU ────────────────────────────────────────────────────────── */
function initMobileMenu() {
  const btn   = document.getElementById('mbtn');
  const panel = document.getElementById('mpanel');
  const veil  = document.getElementById('mob-veil');
  if (!btn || !panel) return;
  const open  = () => { panel.classList.add('on'); veil?.classList.add('on'); document.body.style.overflow = 'hidden'; };
  const close = () => { panel.classList.remove('on'); veil?.classList.remove('on'); document.body.style.overflow = ''; };
  btn.addEventListener('click', () => panel.classList.contains('on') ? close() : open());
  veil?.addEventListener('click', close);
  document.getElementById('mob-close')?.addEventListener('click', close);
  panel.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
}

/* ── SCROLL REVEAL ──────────────────────────────────────────────────────── */
export function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0.10 });
  document.querySelectorAll('.rv').forEach(el => obs.observe(el));
}

/* ── GLOBAL WINDOW BINDINGS ─────────────────────────────────────────────── */
window._addCart    = addToCart;
window._rmCart     = removeFromCart;
window._chgQty     = changeQty;
window._openModal  = openModal;
window._closeModal = _closeModalInner;
window.openDrawer  = openDrawer;
window.closeDrawer = closeDrawer;
window.closeModal  = closeModal;
window.sendInquiry = sendInquiry;
window.go          = go;

/* ── AUTO-INIT ──────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initMobileMenu();
  initScrollReveal();
  updateBadge();
  renderDrawer();
});
