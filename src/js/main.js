import svg4everybody from 'svg4everybody';
// import './components/slick-init'
// import './components/components';
import {
  handleClickEmail,
  handleClickMenu,
  handleClickSearch
} from './components/modals';

const email = document.querySelector('.btn_email');
const humburger = document.querySelector('.btn_menu');
const search = document.querySelector('.btn_search');
const formWriteUs = document.querySelector('.write-us');

svg4everybody();

if (email) {
  email.addEventListener('click', handleClickEmail);
  formWriteUs.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    alert(formData.get('tel'));
  });
}

if (humburger) {
  humburger.addEventListener('click', handleClickMenu);
}

if (search) {
  search.addEventListener('click', handleClickSearch);
}
