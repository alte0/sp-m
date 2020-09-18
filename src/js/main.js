import svg4everybody from 'svg4everybody';
import {
  handleClickEmail,
  handleClickMenu,
  handleClickSearchMobile,
  handleClickSearchDesktop
} from './components/modals';
import { slider } from './components/slider';
import 'simplebar';

const email = document.querySelector('.btn_email');
const hamburger = document.querySelector('.btn_menu');
const search = document.querySelector('.btn_search');
const formWriteUs = document.querySelector('.write-us');

const domLoaded = function () {
  const widthDesktop = 980;
  let widthWindows = window.innerWidth;
  let isDesktop = widthWindows >= widthDesktop;

  svg4everybody();
  slider();

  if (email) {
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
    console.log('windowsWidth - ', widthWindows);
    console.log('isDesktop - ', isDesktop);
  };
};

document.addEventListener('DOMContentLoaded', domLoaded);
