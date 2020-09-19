import Swiper from 'swiper/bundle';

export const slider = () => {
  const configSwiper = {
    // init: false,
    autoplay: {
      delay: 3000
    },
    wrapperClass: 'slider-main__wrap',
    slideClass: 'slider-main__item',
    // setWrapperSize: true,
    // autoHeight: true,
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    simulateTouch: false,

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
      nextEl: '.slider-main__btn-prev',
      prevEl: '.slider-main__btn-next'
    }
  };
  const sliderContainer = document.querySelector('.slider-main');
  const mySwiper = new Swiper(sliderContainer, configSwiper);

  const handleMouseenterAndMouseleaveEvents = (evt) => {
    const { type } = evt;

    if (type === 'mouseenter') {
      mySwiper.autoplay.stop();
    } else if (type === 'mouseleave') {
      mySwiper.autoplay.start();
    }
  };

  sliderContainer.addEventListener('mouseenter', handleMouseenterAndMouseleaveEvents);
  sliderContainer.addEventListener('mouseleave', handleMouseenterAndMouseleaveEvents);

  console.log('slider');
};
