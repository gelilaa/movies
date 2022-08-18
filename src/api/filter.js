export const filter = async () =>{
    const data = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=28a91d69e3e119b854632d929ffb9e80&language=en-US`
    );
    const dataJ = await data.json();
    return dataJ;
}