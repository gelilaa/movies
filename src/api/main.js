
export const fetchApi =async ()=>{
 const data = await fetch(
   `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`
 );
   const dataJ = await data.json();
   return dataJ;   
}