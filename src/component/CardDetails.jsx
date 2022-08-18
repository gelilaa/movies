
import {useLocation}from 'react-router-dom';


export const CardDetails =()=>{


 const location = useLocation()   
 const {state} = location

const uRL = `https://image.tmdb.org/t/p/original/${state.poster_path}`

 return(
  <div className="container">
   <div className='top'><h1>{state.original_title}</h1></div>
    <div className="image"><img src= {uRL} className="card__image"alt="" /></div>
  <div className="more">
   <h3>Relese Date: {state.release_date}</h3>
   <h3>Overview</h3>
   <p>{state.overview}</p>
  </div>
 
</div>
 )
}