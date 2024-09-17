document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });

  const lightbox = new PhotoSwipeLightbox({
    gallery: '.img-container',
    children: 'a',
  });
  lightbox.init();
});