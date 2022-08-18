import { filter } from "../api/filter";
import { useQuery } from 'react-query';
import { useNavigate } from "react-router-dom";
import { filterGenres } from "../api/filter-genres";
import "./style.css"
export const Filter =()=>{
const { data, error, isError, isLoading } = useQuery("filter", filter);
const navigate = useNavigate();
   if (isLoading) {
     return <option>isLoading ...</option>
   }
   if (isError) {
     return <option>Error! {error.message}</option>;
   }
const selectHandel= async(e)=>{
const incoming = e.target.value;
const filterdsearched = await filterGenres(incoming) 
   navigate("/genres",{state: filterdsearched});
  
}
 

return(
     <div className="option">
    <select onChange={selectHandel} defaultValue={'default'} >
      <option value={"default"} disabled>
         Genres...
        </option>
    { data.genres.map((option,id)=>{
        return(
       
        <option  key={id} value={option.id}>{option.name}</option>
        
    )})

    }
    </select>
    </div>
)
}