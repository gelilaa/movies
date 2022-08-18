//import logo from './logo.svg';
import './App.css';
import {Search} from"./component/Search.jsx"
import {Footer} from"./component/Footer.jsx"
import {Route,Routes}from 'react-router-dom';
import {CardDetails} from "./component/CardDetails.jsx"
import { Filter} from "./component/Filter"
import {FilterDetail} from"./component/FilterDetail.jsx"
function App() {
 
  return (
    <div>
      <Filter />  
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/details" element={<CardDetails />} />
        <Route path="/genres" element={<FilterDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
