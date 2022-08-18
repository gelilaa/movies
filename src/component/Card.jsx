import { useQuery } from 'react-query';
import { fetchApi } from '../api/main.js';
import "./style.css"
import { User } from "./User.jsx";

export const Card =()=>{
 const id = Math.floor(Math.random() * 100)
const { data, error, isError, isLoading } = useQuery("homepage", fetchApi);

   if (isLoading) {
     return <div>Loading...</div>;
   }
   if (isError) {
     return <div>Error! {error.message}</div>;
   }
   
   return(
    <div>
    <ul >
      <User key ={id}filteredPersons={data} />
    </ul> 
  </div>
   )
}