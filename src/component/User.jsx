import React from 'react';
import {Cards} from './Cards.jsx';

export const  User=({ filteredPersons,id })=> {
  id = Math.floor(Math.random() * 100)
  const filtered = filteredPersons.results?.map((person,id) => {
    return(<>
    <Cards key={id}  props={person} />
    </>
     )}); 
  return (
    <div className="cards" key={id}>
      {filtered}
      
    </div>
  );
}