/**
 * 非立即执行防抖函数
 * @param {Function} fn - 要节流的函数
 * @param {Number} delay - 节流时间
 */
export const debounce = (fn, delay) => {
  let timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  }
}
