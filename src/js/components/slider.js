import Swiper from 'swiper/bundle';

export const slider = () => {
  const configSwiper = {
    autoplay: {
      delay: 3000
    },
    wrapperClass: 'slider-main__wrap',
    slideClass: 'slider-main__item',
    loop: true,
    simulateTouch: false,
    // Navigation arrows
    navigation: {
      nextEl: '.slider-main__btn-next',
      prevEl: '.slider-main__btn-prev'
    }
  };
  const sliderContainer = document.querySelector('.slider-main');
  const progressBar = document.querySelector('.slider-main__progress-bar');
  const mySwiper = new Swiper(sliderContainer, configSwiper);
  const TIME_OUT = configSwiper.autoplay.delay / 100;
  let percent = 0;
  let timerID = null;
  /**
   * Устанавливает ширину бара.
   * @param percent
   */
  const setWidthBar = (percent) => {
    progressBar.setAttribute('style', `transform: translateX(${-100 + percent}%);`);
  };
  /**
   * Обновляет ширину бара до 100% ширины.
   */
  const setWidthUpdateBar = () => {
    percent += 1;

    if (percent >= 100) {
      percent = 0;
      setWidthBar(percent);
      clearTimeout(timerID);
    }

    setWidthBar(percent);
  };

  timerID = setInterval(setWidthUpdateBar, TIME_OUT);

  const handleMouseenterAndMouseleaveEvents = ({ type }) => {
    if (type === 'mouseenter') {
      mySwiper.autoplay.stop();
      percent = 0;
      clearTimeout(timerID);
      setWidthBar(percent);
    } else if (type === 'mouseleave') {
      mySwiper.autoplay.start();
      timerID = setInterval(setWidthUpdateBar, TIME_OUT);
    }
  };

  sliderContainer.addEventListener('mouseenter', handleMouseenterAndMouseleaveEvents);
  sliderContainer.addEventListener('mouseleave', handleMouseenterAndMouseleaveEvents);
  mySwiper.on('slideChange', function () {
    clearTimeout(timerID);
    percent = 0;

    if (mySwiper.autoplay.running) {
      timerID = setInterval(setWidthUpdateBar, TIME_OUT);
    }
  });
};
