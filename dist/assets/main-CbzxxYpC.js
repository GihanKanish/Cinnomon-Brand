(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const p=[{id:1,spec:"≤6MM · WHOLE QUILL",name:"Alba Quills",image:"/images/product-alba.webp",desc:"The finest roll we grade — pale, delicate, barely-there bite. Sold in small tins to keep it fresh.",long:"Alba is the highest grade in Ceylon cinnamon classification — quills rolled to under 6mm by the most skilled peelers. The texture is almost papery, the color pale buff, the flavor distinctly sweet rather than spicy. The grade for gifting, fine cooking, and understanding the ceiling of the spice.",price:14.5,unit:"50g",ppg:.29,det:{Grade:"ALBA",Diameter:"≤ 6mm",Origin:"Kandy, Sri Lanka","Best for":"Gifting, fine cooking",Harvest:"2024 Main"}},{id:2,spec:"6–7MM · WHOLE QUILL",name:"C5 Special Quills",image:"/images/product-c5special.webp",desc:"Smooth, sweet, and the grade most chefs reach for first. A step down from Alba, a step up in value.",long:"C5 Special sits just below Alba and is the choice of most serious cooks. Still very tight and consistent, the flavor balanced between sweet and warm. Most professional kitchens that specify Ceylon cinnamon use this grade.",price:11,unit:"100g",ppg:.11,det:{Grade:"C5 SPECIAL",Diameter:"6–7 mm",Origin:"Kandy, Sri Lanka","Best for":"Professional cooking",Harvest:"2024 Main"}},{id:3,spec:"9–11MM · WHOLE QUILL",name:"C4 Quills",image:"/images/product-c4.webp",desc:"Our everyday cooking grade — full flavor, honest price, the one we keep in our own kitchens.",long:"C4 is the workhorse grade. The quill diameter is wider, but the flavor intensity is comparable to higher grades — you're paying less because the rolling is less precise, not because the raw material differs. The grade to buy in bulk for everyday cooking.",price:8.5,unit:"100g",ppg:.085,det:{Grade:"C4",Diameter:"9–11 mm",Origin:"Kandy, Sri Lanka","Best for":"Daily cooking, bulk use",Harvest:"2024 Main"}},{id:4,spec:"MIXED · BROKEN PIECE",name:"Quillings",image:"/images/product-quillings.webp",desc:"Broken pieces from grading the whole quills. Best value, ideal for tea, chai, and slow-cooked infusions.",long:"Quillings are the broken pieces from rolling — same bark as the whole quills, just not in stick form. Ideal for infusions: chai, mulled wine, cinnamon tea, stocks. Better flavor-per-dollar than any whole stick grade if you're steeping or grinding anyway.",price:7,unit:"200g",ppg:.035,det:{Grade:"QUILLINGS",Form:"Broken pieces",Origin:"Kandy, Sri Lanka","Best for":"Tea, chai, infusions",Harvest:"2024 Main"}},{id:5,spec:"STONE-MILLED",name:"Ground Cinnamon",image:"/images/product-ground.webp",desc:"Milled in small batches close to shipping date — no warehouse dust sitting around for years.",long:"Milled from C5 grade quills within weeks of shipping. The difference in aroma when you open the bag is noticeable — volatile oils are still intact, the color warm tan not gray-brown, the flavor hasn't oxidized into blandness.",price:9,unit:"100g",ppg:.09,det:{Form:"Ground",Source:"C5 quills",Origin:"Kandy, Sri Lanka","Best for":"Baking, spice blends",Milled:"Within 30 days"}},{id:6,spec:"STEAM-DISTILLED",name:"Cinnamon Bark Oil",image:"/images/product-oil.webp",desc:"Distilled from offcuts of the same quills — nothing wasted, full aromatic intensity.",long:"Steam-distilled from quill offcuts — too small to grade as sticks, but with the same aromatic compounds. Lower coumarin than cassia oil. Use very sparingly — it is potent. Culinary and therapeutic applications.",price:16,unit:"30ml",ppg:null,det:{Form:"Essential Oil",Method:"Steam distilled",Origin:"Kandy, Sri Lanka","Best for":"Culinary & aromatherapy",Dilute:"Always"}}],S=[{key:"alba",label:"ALBA",spec:"≤6mm",ppg:.29,note:"The highest classification. Diameter under 6mm, pale color, intensely sweet with almost no spice edge. The choice for gifting, fine dining, and understanding what the spice can actually be."},{key:"c5s",label:"C5 SPEC",spec:"6–7mm",ppg:.11,note:"The professional kitchen grade. Tight, consistent, priced for regular use. Most serious cooks who switch from cassia settle here."},{key:"c5",label:"C5",spec:"7–9mm",ppg:.095,note:"The most widely exported Ceylon grade. A good balance of quality and price, suitable for retail brands and foodservice at scale."},{key:"c4",label:"C4",spec:"9–11mm",ppg:.085,note:"Everyday cooking grade. Less precise roll, but comparable flavor intensity. Best value for anything blended or infused rather than displayed."},{key:"m5",label:"M5",spec:"11–13mm",ppg:.06,note:"A thicker quill for large-volume cooking. Used in tea blends and as a base for grinding."},{key:"ql",label:"QUILLINGS",spec:"Mixed",ppg:.035,note:"Broken pieces from grading — same bark as the sticks, just not in roll form. Best value for infusions, grinding, and bulk use."}];let a=JSON.parse(localStorage.getItem("kurundu_cart")||"[]");function u(){localStorage.setItem("kurundu_cart",JSON.stringify(a))}function c(){return a.reduce((t,e)=>t+e.qty,0)}function y(){return a.reduce((t,e)=>t+e.price*e.qty,0)}function l(){const t=document.getElementById("cbadge");if(!t)return;const e=c();t.textContent=e,t.classList.toggle("on",e>0)}function h(t){const e=p.find(o=>o.id===t);if(!e)return;const n=a.find(o=>o.id===t);n?n.qty++:a.push({id:e.id,name:e.name,spec:e.spec,price:e.price,unit:e.unit,image:e.image,qty:1}),u(),l(),d(),k(`Added: ${e.name}`)}function g(t){a=a.filter(e=>e.id!==t),u(),l(),d()}function w(t,e){const n=a.find(o=>o.id===t);n&&(n.qty=Math.max(0,n.qty+e),n.qty===0?g(t):(u(),l(),d()))}function d(){const t=document.getElementById("d-body"),e=document.getElementById("d-foot"),n=document.getElementById("d-tot");if(t){if(!a.length){t.innerHTML=`
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
      </div>`,e&&(e.style.display="none");return}t.innerHTML=a.map(o=>`
    <div class="ci-row">
      <div class="ci-thumb" style="background-image:url('${o.image}')"></div>
      <div class="ci-info">
        <div class="ci-name">${o.name}</div>
        <div class="ci-spec">${o.spec}</div>
        <div class="ci-ctrl">
          <div class="ci-qty-group">
            <button class="ci-qty-btn" onclick="window._chgQty(${o.id},-1)">−</button>
            <span class="ci-qty-num">${o.qty}</span>
            <button class="ci-qty-btn" onclick="window._chgQty(${o.id},1)">+</button>
          </div>
          <button class="ci-rm" onclick="window._rmCart(${o.id})">✕ Remove</button>
        </div>
      </div>
    </div>`).join(""),e&&(e.style.display="block"),n&&(n.textContent=`${c()} item${c()>1?"s":""} ready to inquire`)}}function b(){var t,e;(t=document.getElementById("veil"))==null||t.classList.add("on"),(e=document.getElementById("drawer"))==null||e.classList.add("on"),document.body.style.overflow="hidden"}function v(){var t,e;(t=document.getElementById("veil"))==null||t.classList.remove("on"),(e=document.getElementById("drawer"))==null||e.classList.remove("on"),document.body.style.overflow=""}let m;function k(t){const e=document.getElementById("toast");e&&(e.textContent=t,e.classList.add("show"),clearTimeout(m),m=setTimeout(()=>e.classList.remove("show"),2600))}function L(t){var i;const e=p.find(s=>s.id===t);if(!e)return;const n=document.getElementById("mbody");if(!n)return;const o=Object.entries(e.det).filter(([s])=>s!=="price").map(([s,r])=>`
      <div class="md-row">
        <span class="md-label">${s}</span>
        <span class="md-value">${r}</span>
      </div>`).join("");n.innerHTML=`
    <div class="modal-hero">
      <img src="${e.image}" alt="${e.name}" class="modal-hero-img" onerror="this.parentElement.style.background='var(--cream-2)'">
      <div class="modal-hero-overlay">
        <span class="modal-grade-badge">${e.spec}</span>
      </div>
    </div>
    <div class="modal-content">
      <h2 class="modal-product-name">${e.name}</h2>
      <p class="modal-product-desc">${e.long}</p>
      <div class="modal-specs">
        ${o}
      </div>
      <div class="modal-actions">
        <button class="btn btn-jade modal-add-btn" onclick="window._addCart(${e.id});window._closeModal()">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
          Add to Inquiry
        </button>
        <p class="modal-note">Inquiry only — we confirm availability within 24 hrs</p>
      </div>
    </div>`,(i=document.getElementById("mveil"))==null||i.classList.add("on"),document.body.style.overflow="hidden"}function E(t){t&&t.target!==document.getElementById("mveil")||f()}function f(){var t;(t=document.getElementById("mveil"))==null||t.classList.remove("on"),document.body.style.overflow=""}function I(){if(!a.length)return;const t=a.map(o=>`${o.name} (${o.spec}) × ${o.qty}  —  $${(o.price*o.qty).toFixed(2)}`).join(`
`),e=encodeURIComponent("Golden Aroma — Product Inquiry"),n=encodeURIComponent(`Hello,

I'd like to inquire about the following products:

${t}

Estimated total: $${y().toFixed(2)}

Please confirm pricing, availability, and shipping.

Thank you.`);window.open(`mailto:goldenaroma01@gmail.com?subject=${e}&body=${n}`)}function B(t){var e;(e=document.getElementById(t))==null||e.scrollIntoView({behavior:"smooth"})}function M(){const t=document.getElementById("main-nav");if(!t)return;const e=()=>t.classList.toggle("scrolled",window.scrollY>40);window.addEventListener("scroll",e,{passive:!0}),e();const n=window.location.pathname.split("/").pop()||"index.html";t.querySelectorAll(".nav-links a").forEach(o=>{const i=o.getAttribute("href")||"";(n==="index.html"&&i==="index.html"||n!=="index.html"&&i.includes(n.replace(".html","")))&&o.classList.add("active")})}function q(){var s;const t=document.getElementById("mbtn"),e=document.getElementById("mpanel"),n=document.getElementById("mob-veil");if(!t||!e)return;const o=()=>{e.classList.add("on"),n==null||n.classList.add("on"),document.body.style.overflow="hidden"},i=()=>{e.classList.remove("on"),n==null||n.classList.remove("on"),document.body.style.overflow=""};t.addEventListener("click",()=>e.classList.contains("on")?i():o()),n==null||n.addEventListener("click",i),(s=document.getElementById("mob-close"))==null||s.addEventListener("click",i),e.querySelectorAll("a").forEach(r=>r.addEventListener("click",i))}function C(){const t=new IntersectionObserver(e=>{e.forEach(n=>{n.isIntersecting&&(n.target.classList.add("in"),t.unobserve(n.target))})},{threshold:.1});document.querySelectorAll(".rv").forEach(e=>t.observe(e))}window._addCart=h;window._rmCart=g;window._chgQty=w;window._openModal=L;window._closeModal=f;window.openDrawer=b;window.closeDrawer=v;window.closeModal=E;window.sendInquiry=I;window.go=B;document.addEventListener("DOMContentLoaded",()=>{M(),q(),C(),l(),d()});export{S as G,p as P};
