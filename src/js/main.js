import svg4everybody from 'svg4everybody';
import {
  handleClickEmail,
  handleClickMenu,
  handleClickSearchMobile,
  handleClickSearchDesktop
} from './components/modals';
import {
  toggleClass,
  initOnceEvent
} from './helpers';
import { slider } from './components/slider';
import 'overlayscrollbars/js/OverlayScrollbars';
import { handleClickOpenMap } from './components/map';

const email = document.querySelector('.btn_email');
const hamburger = document.querySelector('.btn_menu');
const search = document.querySelector('.btn_search');
const formWriteUs = document.querySelector('.write-us');
const headerNav = document.querySelector('.header__nav');
const btnOpenMap = document.querySelector('.btn_see-map');

const domLoaded = function () {
  const WIDTH_WINDOW = 1024;
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
  let isDesktop = widthWindows >= WIDTH_WINDOW;
  // eslint-disable-next-line prefer-const
  let scrollBarNav = null;

  /**
   * Инициализация скроллбара на мобилке в навигации.
   * @param isDesktop
   * @param scrollBarNav
   */
  const initOverlayScrollbarMobile = (isDesktop, scrollBarNav) => {
    // eslint-disable-next-line no-undef
    scrollBarNav = OverlayScrollbars(headerNav, configScrollBars);

    if (isDesktop) {
      scrollBarNav.destroy();
    }
  };

  svg4everybody();
  // eslint-disable-next-line no-undef
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

  initOnceEvent(hamburger, 'click', handleClickMenu);
  initOnceEvent(search, 'click', function () {
    if (isDesktop) {
      handleClickSearchDesktop();
    } else {
      handleClickSearchMobile();
    }
  });

  initOnceEvent(btnOpenMap, 'click', handleClickOpenMap);

  window.onresize = function () {
    widthWindows = window.innerWidth;

    isDesktop = widthWindows >= WIDTH_WINDOW;
    initOverlayScrollbarMobile(isDesktop, scrollBarNav);
  };
};

initOnceEvent(document, 'DOMContentLoaded', domLoaded);
