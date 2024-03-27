const swiperServices = new Swiper('.swiper-container-services', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    960: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
