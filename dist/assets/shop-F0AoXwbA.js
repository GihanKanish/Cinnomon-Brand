import{G as d,P as i}from"./main-CbzxxYpC.js";let a=0;function l(){const e=document.getElementById("prod-grid");if(!e)return;e.innerHTML=i.map(t=>`
    <div class="pcard rv">
      <div class="pc-img" style="background-image:url('${t.image}')"></div>
      <div class="pc-body">
        <span class="pc-spec">${t.spec}</span>
        <div class="pc-title">${t.name}</div>
        <p class="pc-desc">${t.desc}</p>
        <div class="pc-foot">
          <button class="btn-add" onclick="window._addCart(${t.id})">Add to Inquiry</button>
        </div>
        <button class="btn-vd" onclick="window._openModal(${t.id})">VIEW DETAILS →</button>
      </div>
    </div>`).join("");const n=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting&&(o.target.classList.add("in"),n.unobserve(o.target))})},{threshold:.08});e.querySelectorAll(".rv").forEach(t=>n.observe(t))}function r(){const e=document.getElementById("g-btns");e&&(e.innerHTML=d.map((n,t)=>`
    <button class="g-btn${t===0?" on":""}" onclick="window._setGrade(${t})">
      <b>${n.label}</b><small>${n.spec}</small>
    </button>`).join(""))}function s(){const e=document.getElementById("g-note"),n=document.getElementById("pcb"),t=document.getElementById("pcp"),o=document.getElementById("pcu"),c=d[a];t&&(t.style.display="none"),o&&(o.style.display="none"),n&&(n.innerHTML=[`<span>Grade: <strong style="color:var(--amber)">${c.label}</strong></span>`,`<span>Diameter: <strong style="color:var(--amber)">${c.spec}</strong></span>`].join("")),e&&(e.textContent=c.note)}function g(){var e;r(),s(),(e=document.getElementById("qty-in"))==null||e.addEventListener("input",s)}window._setGrade=e=>{a=e,document.querySelectorAll(".g-btn").forEach((n,t)=>n.classList.toggle("on",t===e)),s()};window._setUnit=e=>{var n,t;(n=document.getElementById("u-g"))==null||n.classList.toggle("on",e==="g"),(t=document.getElementById("u-kg"))==null||t.classList.toggle("on",e==="kg"),s()};window._calcUp=s;document.addEventListener("DOMContentLoaded",()=>{l(),g()});
