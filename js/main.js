/*var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 25
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 35
    }
  }
});*/

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 38
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 36
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 36
    },
    960: {
      slidesPerView: 2,
      spaceBetween: 36
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 36
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 36
    }
  }
});
