const url = "../data.json";

const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchData;
