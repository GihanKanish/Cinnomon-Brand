import { addToCart, openModal, initScrollReveal } from './main.js';
import { PRODUCTS, GRADES } from './data.js';

let activeG = 0;
let unit = 'g';

/* ── PRODUCT GRID ───────────────────────────────────────────────────────── */
export function renderShop() {
  const grid = document.getElementById('prod-grid');
  if (!grid) return;
  grid.innerHTML = PRODUCTS.map(p => `
    <div class="pcard rv">
      <div class="pc-img" style="background-image:url('${p.image}')"></div>
      <div class="pc-body">
        <span class="pc-spec">${p.spec}</span>
        <div class="pc-title">${p.name}</div>
        <p class="pc-desc">${p.desc}</p>
        <div class="pc-foot">
          <button class="btn-add" onclick="window._addCart(${p.id})">Add to Inquiry</button>
        </div>
        <button class="btn-vd" onclick="window._openModal(${p.id})">VIEW DETAILS →</button>
      </div>
    </div>`).join('');

  // Re-observe newly created .rv elements
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0.08 });
  grid.querySelectorAll('.rv').forEach(el => obs.observe(el));
}

/* ── GRADE BUTTONS ──────────────────────────────────────────────────────── */
export function renderGradeButtons() {
  const cont = document.getElementById('g-btns');
  if (!cont) return;
  cont.innerHTML = GRADES.map((g, i) => `
    <button class="g-btn${i === 0 ? ' on' : ''}" onclick="window._setGrade(${i})">
      <b>${g.label}</b><small>${g.spec}</small>
    </button>`).join('');
}

/* ── CALC UPDATE ────────────────────────────────────────────────────────── */
function calcUpdate() {
  const note  = document.getElementById('g-note');
  const pcb   = document.getElementById('pcb');
  const pcp   = document.getElementById('pcp');
  const pcu   = document.getElementById('pcu');

  const g = GRADES[activeG];

  if (pcp) pcp.style.display = 'none';
  if (pcu) pcu.style.display = 'none';

  if (pcb) pcb.innerHTML = [
    `<span>Grade: <strong style="color:var(--amber)">${g.label}</strong></span>`,
    `<span>Diameter: <strong style="color:var(--amber)">${g.spec}</strong></span>`,
  ].join('');
  if (note) note.textContent = g.note;
}

export function initGradeCalc() {
  renderGradeButtons();
  calcUpdate();
  document.getElementById('qty-in')?.addEventListener('input', calcUpdate);
}

/* ── WINDOW BINDINGS ────────────────────────────────────────────────────── */
window._setGrade = (i) => {
  activeG = i;
  document.querySelectorAll('.g-btn').forEach((b, j) => b.classList.toggle('on', j === i));
  calcUpdate();
};
window._setUnit = (u) => {
  unit = u;
  document.getElementById('u-g')?.classList.toggle('on', u === 'g');
  document.getElementById('u-kg')?.classList.toggle('on', u === 'kg');
  calcUpdate();
};
window._calcUp = calcUpdate;
