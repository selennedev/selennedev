const button = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

button.addEventListener('click', () => {
  const open = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!open));
  button.setAttribute('aria-label', open ? 'Abrir menu' : 'Fechar menu');
  menu.classList.toggle('is-open', !open);
});

document.querySelectorAll('.menu a').forEach((link) => link.addEventListener('click', () => {
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-label', 'Abrir menu');
  menu.classList.remove('is-open');
}));
