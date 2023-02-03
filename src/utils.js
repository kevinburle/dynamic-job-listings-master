function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
}

const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

const getStorageItem = (name) => {
  return JSON.parse(localStorage.getItem(name));
};

export { getElement, setStorageItem, getStorageItem };
