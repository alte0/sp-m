/**
 * Переключает класс у elem
 * @param {Element} elem
 * @param {String} classToggle
 */
export const toggleClass = (elem, classToggle) => {
  elem.classList.toggle(classToggle);
};
