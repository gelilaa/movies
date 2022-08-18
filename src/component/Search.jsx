import React from "react";
import { searchApi } from "../api/search";
import { useState } from "react";
import { User } from "./User.jsx";
import { Card } from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const Search =()=>{
const id = Math.floor(Math.random() * 100)
const[input,SetInput]=useState('');
const [output,SetOutput]=useState([])
const [hidden, setHidden] = useState(false);

 const inputHandler =(e)=>{
  var lowerCase = e.target.value.toLowerCase();
    SetInput(lowerCase);
 }
 

 const handelEvent= async(e)=>{
if(!input) return alert("write something")
setHidden(true)
const inData = await searchApi(input);
  SetOutput(inData)
 

}  
      
    return(<>
<div className="searchBox"> 
    <input type="text" className="searchInput" onChange={inputHandler} />
    <button type="button" className="searchButton" onClick={handelEvent}>
      <FontAwesomeIcon icon={faSearch} />
      </button> 
</div>
<br/>
<div>
      {!hidden ? <Card/> : null}
    </div>

 <ul className="cards">
  <User key={id} filteredPersons={output} />
</ul> 
  
</>
    )
}

