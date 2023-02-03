import { getStorageItem } from "./utils.js";

const dataFiltering = (array) => {
  const dataStored = getStorageItem("data");
  const filteredData = dataStored.filter((item) => {
    const tags = [item.role, item.level, ...item.languages, ...item.tools];
    const { id } = item;
    //convert tags in true of false for each and every job
    const tagStatus = tags.map((tag) => array.includes(tag));
    const returnTrueTag = tagStatus.filter((tag) => tag);
    //new filtred object
    const newObject = { id, returnTrueTag };
    if (newObject.returnTrueTag.length === array.length) {
      return item;
    }
  });
  return filteredData;
};

export default dataFiltering;
