import * as THREE from 'three';

export function initHero() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const W = window.innerWidth, H = window.innerHeight;
  const scene    = new THREE.Scene();
  const camera   = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(W, H);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  camera.position.z = 28;

  /* ── Floating quill cylinders ─────────────────────────────────────────── */
  const quills = [];
  const geo = new THREE.CylinderGeometry(0.07, 0.07, 5, 6);
  const mats = [
    new THREE.MeshBasicMaterial({ color: 0xC98A3E, transparent: true, opacity: 0.35 }),
    new THREE.MeshBasicMaterial({ color: 0xE2B370, transparent: true, opacity: 0.22 }),
    new THREE.MeshBasicMaterial({ color: 0x8B5E2A, transparent: true, opacity: 0.28 }),
    new THREE.MeshBasicMaterial({ color: 0xF3E8D6, transparent: true, opacity: 0.07 }),
  ];

  for (let i = 0; i < 55; i++) {
    const mesh = new THREE.Mesh(geo, mats[i % mats.length]);
    mesh.position.set(
      (Math.random() - 0.5) * 90,
      (Math.random() - 0.5) * 55,
      (Math.random() - 0.5) * 35
    );
    mesh.rotation.set(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    );
    mesh.userData = {
      rx: (Math.random() - 0.5) * 0.003,
      rz: (Math.random() - 0.5) * 0.002,
      dy: (Math.random() - 0.5) * 0.007,
      dx: (Math.random() - 0.5) * 0.005,
    };
    scene.add(mesh);
    quills.push(mesh);
  }

  /* ── Particle field ───────────────────────────────────────────────────── */
  const pCount = 300;
  const pos = new Float32Array(pCount * 3);
  const vel = new Float32Array(pCount);
  for (let i = 0; i < pCount; i++) {
    pos[i * 3]     = (Math.random() - 0.5) * 110;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 70;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 45;
    vel[i]          = (Math.random() - 0.5) * 0.012;
  }
  const pgeo = new THREE.BufferGeometry();
  pgeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const pmat = new THREE.PointsMaterial({ color: 0xC98A3E, size: 0.14, transparent: true, opacity: 0.5 });
  scene.add(new THREE.Points(pgeo, pmat));

  /* ── Ambient ring ─────────────────────────────────────────────────────── */
  const ringGeo = new THREE.RingGeometry(16, 16.4, 90);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xC98A3E, transparent: true, opacity: 0.05, side: THREE.DoubleSide });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = Math.PI * 0.35;
  scene.add(ring);

  /* ── Mouse parallax ───────────────────────────────────────────────────── */
  let mx = 0, my = 0;
  const onMove = e => {
    mx = (e.clientX / window.innerWidth  - 0.5) * 2;
    my = (e.clientY / window.innerHeight - 0.5) * 2;
  };
  window.addEventListener('mousemove', onMove, { passive: true });

  /* ── Animation loop ───────────────────────────────────────────────────── */
  let raf;
  function animate() {
    raf = requestAnimationFrame(animate);

    quills.forEach(q => {
      q.rotation.x += q.userData.rx;
      q.rotation.z += q.userData.rz;
      q.position.y += q.userData.dy;
      q.position.x += q.userData.dx;
      if (Math.abs(q.position.y) > 28) q.userData.dy *= -1;
      if (Math.abs(q.position.x) > 46) q.userData.dx *= -1;
    });

    const pArr = pgeo.attributes.position.array;
    for (let i = 0; i < pCount; i++) {
      pArr[i * 3 + 1] += vel[i];
      if (Math.abs(pArr[i * 3 + 1]) > 36) vel[i] *= -1;
    }
    pgeo.attributes.position.needsUpdate = true;

    ring.rotation.z += 0.0006;

    camera.position.x += (mx * 2.5 - camera.position.x) * 0.022;
    camera.position.y += (-my * 1.8 - camera.position.y) * 0.022;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  }
  animate();

  /* ── Resize ───────────────────────────────────────────────────────────── */
  const onResize = () => {
    const w = window.innerWidth, h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  };
  window.addEventListener('resize', onResize, { passive: true });

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener('mousemove', onMove);
    window.removeEventListener('resize', onResize);
    renderer.dispose();
  };
}
