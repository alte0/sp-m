/**
 * Клик по кнопке почты.
 */
export const handleClickEmail = (evt) => {
  const writeUs = document.querySelector('.write-us');
  const input = writeUs.querySelector('input');

  if (writeUs) {
    const close = writeUs.querySelector('.write-us__btn-close');
    const closeText = writeUs.querySelector('.write-us__btn-close-text');

    const handleClickClose = (evt) => {
      const { type, code } = evt;
      /**
       * закрываем форму и удаляем события
       */
      const closeForm = () => {
        writeUs.classList.remove('write-us_open-js');
        close.removeEventListener('click', handleClickClose);
        closeText.removeEventListener('click', handleClickClose);
        window.removeEventListener('keydown', handleClickClose);
      };

      if (type === 'keydown' && code === 'Escape') {
        closeForm();
      } else if (type === 'click') {
        closeForm();
      }
    };

    writeUs.classList.add('write-us_open-js');
    input.focus();

    if (close && closeText) {
      close.addEventListener('click', handleClickClose);
      closeText.addEventListener('click', handleClickClose);
      window.addEventListener('keydown', handleClickClose);
    }
  }
};
/**
 * Клик по кнопке меню на мобилке.
 */
export const handleClickMenu = () => {
  const nav = document.querySelector('.header__nav');

  if (nav) {
    const close = nav.querySelector('.btn_close-modal');

    const handleClickCloseNav = () => {
      nav.classList.remove('header__nav_open-js');
      close.removeEventListener('click', handleClickCloseNav);
    };

    nav.classList.add('header__nav_open-js');

    if (close) {
      close.addEventListener('click', handleClickCloseNav);
    }
  }
};
/**
 * Клик по кнопке поиска.
 */
export const handleClickSearch = () => {
  const formSearch = document.querySelector('.header__form-search');
  const inputSearch = formSearch.querySelector('.header__form-input-search');

  if (formSearch) {
    const close = formSearch.querySelector('.btn_close-modal');

    const handleClickCloseNav = () => {
      formSearch.classList.remove('header__form-search_open-js');
      close.removeEventListener('click', handleClickCloseNav);
    };

    formSearch.classList.add('header__form-search_open-js');
    inputSearch.focus();

    if (close) {
      close.addEventListener('click', handleClickCloseNav);
    }
  }
};
