const url = "https://raw.githubusercontent.com/kevinburle/dynamic-job-listings-master/main/data.json";

const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchData;
