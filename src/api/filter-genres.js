export const filterGenres = async (id) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=28a91d69e3e119b854632d929ffb9e80&with_genres=${id}`
  );
  const dataJ = await data.json();
  Promise.resolve(dataJ)
  return dataJ.results;
};
