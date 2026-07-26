const nav = document.getElementById('main-nav');
const menu = document.querySelector('.menu-button');
const form = document.getElementById('cue-form');

document.getElementById('year').textContent = new Date().getFullYear();

menu.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menu.setAttribute('aria-expanded', String(open));
  menu.querySelector('span').textContent = open ? '—' : '+';
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menu.setAttribute('aria-expanded', 'false');
  menu.querySelector('span').textContent = '+';
}));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) { form.reportValidity(); return; }
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const game = document.getElementById('game').value;
  const note = document.getElementById('note').value.trim() || 'No notes provided yet.';
  const subject = encodeURIComponent(`Calitoy Cues build brief — ${name}`);
  const body = encodeURIComponent(`CALITOY CUES BUILD BRIEF\n\nName: ${name}\nEmail: ${email}\nGame: ${game}\n\nCue direction:\n${note}`);
  document.getElementById('notice').innerHTML = `Your build brief is ready. <a href="mailto:joseph@xcalitoy.com?subject=${subject}&body=${body}">SEND IT TO CALITOY CUES →</a>`;
});
