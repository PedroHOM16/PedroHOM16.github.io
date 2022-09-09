const getMusics = async (param) => {
  const request = await fetch(`https://api.deezer.com/search?q=${param}`);
  const requestJson = await request.json();
  return requestJson.results;
};

export default getMusics;
