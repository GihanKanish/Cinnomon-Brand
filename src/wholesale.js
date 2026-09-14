import './main.js';

export function submitB2B() {
  const emailEl = document.getElementById('b2b-email');
  const email   = emailEl?.value?.trim();
  if (!email || !email.includes('@')) {
    emailEl?.classList.add('error');
    emailEl?.focus();
    setTimeout(() => emailEl?.classList.remove('error'), 2000);
    return;
  }

  const nameEl    = document.querySelector('.inq-form input[placeholder="Your name"]');
  const companyEl = document.querySelector('.inq-form input[placeholder="Optional"]');
  const selects   = document.querySelectorAll('.inq-form select');
  const notesEl   = document.querySelector('.inq-form textarea');

  const name    = nameEl?.value    || 'Not provided';
  const company = companyEl?.value || 'Not provided';
  const grade   = selects[0]?.value || 'Not specified';
  const volume  = selects[1]?.value || 'Not specified';
  const notes   = notesEl?.value   || 'None';

  const subject = encodeURIComponent('Golden Aroma — Wholesale Inquiry');
  const body    = encodeURIComponent([
    'Wholesale Inquiry',
    '',
    `Name:    ${name}`,
    `Company: ${company}`,
    `Email:   ${email}`,
    `Grade:   ${grade}`,
    `Volume:  ${volume}`,
    `Notes:   ${notes}`,
    '',
    'Please respond within 24 hours.',
  ].join('\n'));

  window.open(`mailto:goldenaroma01@gmail.com?subject=${subject}&body=${body}`);

  // Success state on button
  const btn = document.querySelector('.inq-form .btn-gold');
  if (btn) {
    btn.textContent = '✓ Inquiry Sent!';
    btn.style.background = 'var(--jade)';
    btn.disabled = true;
  }
}

window.submitB2B = submitB2B;
