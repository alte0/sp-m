/**
 * Переключает класс у elem
 * @param {Element} elem
 * @param {String} classToggle
 */
export const toggleClass = (elem, classToggle) => {
  elem.classList.toggle(classToggle);
};
/**
 * Проверяет есть ли HTMLElement и добавляет событие.
 * @param {HTMLElement} el
 * @param {String} eventName
 * @param {Function} eventHandler
 */
export const initOnceEvent = (el, eventName, eventHandler) => {
  if (el) {
    el.addEventListener(eventName, eventHandler);
  }
};
