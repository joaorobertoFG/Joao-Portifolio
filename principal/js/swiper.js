const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 1000,
    slidesPerView: 1,
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },   

    autoplay: {
        delay: 3000,
    },

    breakpoints: {
        720: {
            slidesPerView: 3,
            spaceBetween: 30
        },
    }
  });