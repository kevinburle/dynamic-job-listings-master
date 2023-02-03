import fetchData from "./fetchData.js";
import { getElement } from "./utils.js";
import setupFiltering from "./setupFiltering.js";

const cardContainer = getElement(".card-container-section");

const displayJobs = (jobs) => {
  cardContainer.innerHTML = jobs
    .map((job) => {
      const { company, position, id, location, logo, postedAt, contract } = job;
      const tags = [job.role, job.level, ...job.languages, ...job.tools]
        .map((tag) => {
          return `<button class="btn">${tag}</button>`;
        })
        .join("");
      const newTag = job.new ? "<span class='new tag'>new!</span>" : "";
      const featuredTag = job.featured
        ? "<span class='featured tag'>featured</span>"
        : "";

      return ` <article class="card-wrapper container ${
        job.featured ? "featured-card" : ""
      }" data-id="${id}">
    <!-- resume -->
    <div class="card-resume">
      <img src="${logo}" alt="logo" class="logo" />

      <div class="card-info">
        <div class="card-items">
          <span class="company">${company}</span>
          ${newTag}
          ${featuredTag}
        </div>
        <h2 class="card-title">${position}</h2>
        <p class="card-list-items">
        ${postedAt} <span>•</span> ${contract} <span>•</span> ${location}
        </p>
      </div>
    </div>
    <!-- filters -->
    <div class="card-filters">${tags}</div>
  </article>`;
    })
    .join("");
};

cardContainer.addEventListener("click", function (e) {
  const element = e.target;

  if (element.classList.contains("btn")) {
    const id = element.parentElement.parentElement.dataset.id;
    setupFiltering(id, element);
  }
});

export default displayJobs;
