/* eslint-disable no-unused-vars */
const localStorage = (store) => (next) => (action) => {
  const response = next(action);
  const { meta } = action;
  if (meta && meta.addToLocalStorage) {
    meta.addToLocalStorage.forEach(({ key, value }) => {
      window.localStorage.setItem(key, JSON.stringify(value));
    });
  }
  if (meta && meta === 'clearLocalStorage') {
    window.localStorage.clear();
  }
  return response;
};

export default localStorage;
