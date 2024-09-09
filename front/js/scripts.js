const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});