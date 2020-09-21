export const handleClickOpenMap = (evt) => {
  evt.preventDefault();
  const map = document.querySelector('.map');
  if (map) {
    map.classList.add('map_open-mobile-js');
  }
};
