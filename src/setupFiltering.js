import { getElement, getStorageItem } from "./utils.js";
import displayJobs from "./displayJobs.js";
import dataFiltering from "./dataFiltering.js";

const activeFilters = getElement(".active-filters");
const searchContainer = getElement(".search-container");
const clearBtn = getElement(".clear-btn");
let uniqueTags = [];

const setupFiltering = (id, element) => {
  //get unique values from btn
  if (!uniqueTags.includes(element.textContent)) {
    uniqueTags.push(element.textContent);
    activeFilters.innerHTML = uniqueTags
      .map((item) => {
        return `<h3 class="filter-tag">
    <span>${item}</span>
    <button class="remove-btn">
      <img src="/images/icon-remove.svg" class="remove-icon" alt="" />
    </button>
  </h3>`;
      })
      .join("");
  }

  //display tag container
  if (!searchContainer.classList.contains("show") && uniqueTags.length > 0) {
    searchContainer.classList.add("show");
  }

  //display filtering data
  displayJobs(dataFiltering(uniqueTags));
};

//clear tag function
clearBtn.addEventListener("click", () => {
  searchContainer.classList.remove("show");
  uniqueTags = [];
  displayJobs(getStorageItem("data"));
});

//remove tag function
activeFilters.addEventListener("click", function (e) {
  const removeTag = e.target.parentElement;
  if (removeTag.classList.contains("remove-btn")) {
    const tagName = removeTag.previousElementSibling.innerText;
    const filteredTag = uniqueTags.filter((tag) => tag !== tagName);
    //update unique tag array
    uniqueTags = [...filteredTag];
    //remove tag from the DOM
    removeTag.parentElement.remove();
    //if last item remove tag bar
    if (uniqueTags.length < 1) {
      searchContainer.classList.remove("show");
    }
    //display filtering data
    displayJobs(dataFiltering(uniqueTags));
  }
});

export default setupFiltering;
