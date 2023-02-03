import { getElement, setStorageItem } from "./src/utils.js";
import displayJobs from "./src/displayJobs.js";
import fetchData from "./src/fetchData.js";

const showJobs = async () => {
  const jobs = await fetchData();
  setStorageItem("data", jobs);
  displayJobs(jobs);
};

window.addEventListener("DOMContentLoaded", showJobs());
