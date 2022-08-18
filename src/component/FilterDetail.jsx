
import { useLocation } from "react-router-dom";
import { Cards } from "./Cards";


export const FilterDetail= ()=>{
 
const location = useLocation()
const data = location.state

    return(
      <div>
        <ul className="cards">
  {data.map((item,id)=>{
    return <Cards props={item} key={id}/>
  })}
</ul> 
</div>
    )
}