export const searchApi = async (name) => {
  //const apiKey = process.env.REACT_APP_API_KEY;
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`
  );
  const dataJ = await data.json();
  return dataJ;
};
