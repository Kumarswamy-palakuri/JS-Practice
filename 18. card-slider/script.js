// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  breakpoints: {
      768: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 30,
      },
  },
});
