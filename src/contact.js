import './main.js';

export function doSignup() {
  const input = document.getElementById('email-in');
  const email = input?.value?.trim();
  if (!email || !email.includes('@')) {
    input?.classList.add('error');
    input?.focus();
    setTimeout(() => input?.classList.remove('error'), 2000);
    return;
  }

  const subject = encodeURIComponent('Golden Aroma — Harvest Notify Me Signup');
  const body = encodeURIComponent(
    `Please add this address to the harvest notification list:\n\n${email}`
  );
  window.open(`mailto:goldenaroma01@gmail.com?subject=${subject}&body=${body}`);

  const btn = document.querySelector('.signup-row .btn-jade');
  if (btn) {
    btn.textContent = '✓ Subscribed!';
    btn.style.background = 'var(--jade-dark)';
    btn.disabled = true;
  }
  if (input) {
    input.value = '';
    input.placeholder = 'Thank you — we\'ll be in touch!';
  }
}

window.doSignup = doSignup;
