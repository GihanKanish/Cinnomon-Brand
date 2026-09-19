export const PRODUCTS = [
  {
    id: 1,
    spec: '≤6MM · WHOLE QUILL',
    name: 'Alba Quills',
    image: '/images/product-alba.webp',
    desc: 'The finest roll we grade — pale, delicate, barely-there bite. Sold in small tins to keep it fresh.',
    long: 'Alba is the highest grade in Ceylon cinnamon classification — quills rolled to under 6mm by the most skilled peelers. The texture is almost papery, the color pale buff, the flavor distinctly sweet rather than spicy. The grade for gifting, fine cooking, and understanding the ceiling of the spice.',
    price: 14.50, unit: '50g', ppg: 0.29,
    det: { Grade:'ALBA', Diameter:'≤ 6mm', Origin:'Kandy, Sri Lanka', 'Best for':'Gifting, fine cooking', Harvest:'2024 Main' }
  },
  {
    id: 2,
    spec: '6–10MM · WHOLE QUILL',
    name: 'C5 Special Quills',
    image: '/images/product-c5special.webp',
    desc: 'Smooth, sweet, and the grade most chefs reach for first. A step down from Alba, a step up in value.',
    long: 'C5 Special sits just below Alba and is the choice of most serious cooks. Still very tight and consistent, the flavor balanced between sweet and warm. Most professional kitchens that specify Ceylon cinnamon use this grade.',
    price: 11.00, unit: '100g', ppg: 0.11,
    det: { Grade:'C5 SPECIAL', Diameter:'6–10 mm', Origin:'Kandy, Sri Lanka', 'Best for':'Professional cooking', Harvest:'2024 Main' }
  },
  {
    id: 3,
    spec: '12–16MM · WHOLE QUILL',
    name: 'C4 Quills',
    image: '/images/product-c4.webp',
    desc: 'Our everyday cooking grade — full flavor, honest price, the one we keep in our own kitchens.',
    long: "C4 is the workhorse grade. The quill diameter is wider, but the flavor intensity is comparable to higher grades — you're paying less because the rolling is less precise, not because the raw material differs. The grade to buy in bulk for everyday cooking.",
    price: 8.50, unit: '100g', ppg: 0.085,
    det: { Grade:'C4', Diameter:'12–16 mm', Origin:'Kandy, Sri Lanka', 'Best for':'Daily cooking, bulk use', Harvest:'2024 Main' }
  },
  {
    id: 4,
    spec: 'MIXED · BROKEN PIECE',
    name: 'Quillings',
    image: '/images/product-quillings.webp',
    desc: 'Broken pieces from grading the whole quills. Best value, ideal for tea, chai, and slow-cooked infusions.',
    long: "Quillings are the broken pieces from rolling — same bark as the whole quills, just not in stick form. Ideal for infusions: chai, mulled wine, cinnamon tea, stocks. Better flavor-per-dollar than any whole stick grade if you're steeping or grinding anyway.",
    price: 7.00, unit: '200g', ppg: 0.035,
    det: { Grade:'QUILLINGS', Form:'Broken pieces', Origin:'Kandy, Sri Lanka', 'Best for':'Tea, chai, infusions', Harvest:'2024 Main' }
  },
  {
    id: 5,
    spec: 'STONE-MILLED',
    name: 'Ground Cinnamon',
    image: '/images/product-ground.webp',
    desc: 'Milled in small batches close to shipping date — no warehouse dust sitting around for years.',
    long: "Milled from C5 grade quills within weeks of shipping. The difference in aroma when you open the bag is noticeable — volatile oils are still intact, the color warm tan not gray-brown, the flavor hasn't oxidized into blandness.",
    price: 9.00, unit: '100g', ppg: 0.09,
    det: { Form:'Ground', Source:'C5 quills', Origin:'Kandy, Sri Lanka', 'Best for':'Baking, spice blends', Milled:'Within 30 days' }
  },
  {
    id: 6,
    spec: 'STEAM-DISTILLED',
    name: 'Cinnamon Bark Oil',
    image: '/images/product-oil.webp',
    desc: 'Distilled from offcuts of the same quills — nothing wasted, full aromatic intensity.',
    long: 'Steam-distilled from quill offcuts — too small to grade as sticks, but with the same aromatic compounds. Lower coumarin than cassia oil. Use very sparingly — it is potent. Culinary and therapeutic applications.',
    price: 16.00, unit: '30ml', ppg: null,
    det: { Form:'Essential Oil', Method:'Steam distilled', Origin:'Kandy, Sri Lanka', 'Best for':'Culinary & aromatherapy', Dilute:'Always' }
  }
];

export const GRADES = [
  { key:'alba',  label:'ALBA',     spec:'≤6mm',    ppg:0.29,  note:'The highest classification. Diameter under 6mm, pale color, intensely sweet with almost no spice edge. The choice for gifting, fine dining, and understanding what the spice can actually be.' },
  { key:'c5s',   label:'C5 SPEC',  spec:'6–10mm',  ppg:0.11,  note:'The professional kitchen grade. Tight, consistent, priced for regular use. Most serious cooks who switch from cassia settle here.' },
  { key:'c5',    label:'C5',       spec:'10–12mm', ppg:0.095, note:'The most widely exported Ceylon grade. A good balance of quality and price, suitable for retail brands and foodservice at scale.' },
  { key:'c4',    label:'C4',       spec:'12–16mm', ppg:0.085, note:'Everyday cooking grade. Less precise roll, but comparable flavor intensity. Best value for anything blended or infused rather than displayed.' },
  { key:'m5',    label:'M5',       spec:'16–18mm', ppg:0.06,  note:'A thicker quill for large-volume cooking. Used in tea blends and as a base for grinding.' },
  { key:'ql',    label:'QUILLINGS',spec:'Mixed',   ppg:0.035, note:'Broken pieces from grading — same bark as the sticks, just not in roll form. Best value for infusions, grinding, and bulk use.' }
];
