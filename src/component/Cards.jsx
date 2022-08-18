import React from "react";
import { Link } from "react-router-dom";

export const Cards=({props})=>{
  
  const uRL = `https://image.tmdb.org/t/p/w500/${props.poster_path}`
    return(
        
        <li >
          <span className="card" key={props.id}>
            <img
              src= {uRL}
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <div className="card__header-text">
                  <h3 className="card__title">{props.original_title}</h3>
                  <span className="card__status">{props.original_language}</span>
                </div>
                <Link to={"/details"} state={props}>
                  
                <button className="myButton" >More</button>
               
                </Link>
              </div>
              
            </div>
          </span>
        </li>
        
    )

}