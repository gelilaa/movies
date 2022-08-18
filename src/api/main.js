export const fetchApi =async ()=>{
  const apiKey = process.env.REACT_APP_API_KEY;
 const data = await fetch(
   `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
 );
   const dataJ = await data.json();
   return dataJ;   
}