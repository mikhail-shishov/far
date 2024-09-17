document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });

  const lightbox = new PhotoSwipeLightbox({
    gallery: '#gallery--getting-started',
    children: 'a',
    pswpModule: () => import('photoswipe.esm.js')
  });
  lightbox.init();
});