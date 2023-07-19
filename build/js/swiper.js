
let swiper = new Swiper('.mainSwiper', {
    // Optional parameters
    // direction: 'horizontal',
    loop: true,
    slidesPerView: "1.5",
    centeredSlides: true,
    // spaceBetween: 40,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    // grabCursor: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    
});

const autoplayBtn = document.querySelector('.autoplayBtn');

// initial autoplay state
let isAutoplay = true;

autoplayBtn.addEventListener('click', function(){
  if(isAutoplay) {
    swiper.autoplay.stop();
    autoplayBtn.innerHTML = '<i class="fas fa-play fa-xs"></i>';
    isAutoplay = false;
  } else {
    swiper.autoplay.start();
    autoplayBtn.innerHTML = '<i class="fas fa-pause fa-xs"></i>';
    isAutoplay = true;
  }
});



// subSwiper
let subSwiper = new Swiper(".subSwiper", {
  spaceBetween: 13,
  slidesPerView: 5,
  centeredSlides: false,
  slidesPerGroup: 5,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
});
