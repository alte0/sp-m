import svg4everybody from 'svg4everybody';
import {
  handleClickEmail,
  handleClickMenu,
  handleClickSearchMobile,
  handleClickSearchDesktop
} from './components/modals';
import {toggleClass} from './helpers';
import { slider } from './components/slider';
import 'overlayscrollbars/js/OverlayScrollbars';

const email = document.querySelector('.btn_email');
const hamburger = document.querySelector('.btn_menu');
const search = document.querySelector('.btn_search');
const formWriteUs = document.querySelector('.write-us');
const headerNav = document.querySelector('.header__nav');

const domLoaded = function () {
  const widthDesktop = 980;
  const configScrollBars = {
    scrollbars: {
      visibility: 'visible',
      clickScrolling: true
    },
    textarea: {
      inheritedAttrs: null
    }
  };
  let widthWindows = window.innerWidth;
  let isDesktop = widthWindows >= widthDesktop;
  let scrollBarNav = null;

  /**
   * Инициализация скроллбара на мобилке в навигации.
   * @param isDesktop
   * @param scrollBarNav
   */
  const initOverlayScrollbarMobile = (isDesktop, scrollBarNav) => {

    scrollBarNav = OverlayScrollbars(headerNav, configScrollBars);

    if (isDesktop) {
      scrollBarNav.destroy();
    }
  };

  svg4everybody();
  OverlayScrollbars(document.querySelectorAll('[data-overlayscrollbars]'), configScrollBars);
  slider();
  initOverlayScrollbarMobile(isDesktop, scrollBarNav);

  if (email) {
    const textarea = formWriteUs.querySelector('.write-us__textarea');
    const hostTextarea = formWriteUs.querySelector('.os-host-textarea');

    textarea.addEventListener('focus', () => {
      toggleClass(hostTextarea, 'scrollbar-focus-js');
    });
    textarea.addEventListener('blur', () => {
      toggleClass(hostTextarea, 'scrollbar-focus-js');
    });

    email.addEventListener('click', handleClickEmail);
    formWriteUs.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const formData = new FormData(evt.target);
      alert(formData.get('tel'));
    });
  }

  if (hamburger) {
    hamburger.addEventListener('click', handleClickMenu);
  }

  if (search) {
    search.addEventListener('click', function () {
      if (isDesktop) {
        handleClickSearchDesktop();
      } else {
        handleClickSearchMobile();
      }
    });
  }

  window.onresize = function () {
    widthWindows = window.innerWidth;

    isDesktop = widthWindows >= widthDesktop;
    initOverlayScrollbarMobile(isDesktop, scrollBarNav);
    console.log('windowsWidth - ', widthWindows);
    console.log('isDesktop - ', isDesktop);
  };
};

document.addEventListener('DOMContentLoaded', domLoaded);
