//import logo from './logo.svg';
import './App.css';
import {Search} from"./component/Search.jsx"
import {Footer} from"./component/Footer.jsx"
import {useLocation,Route,Routes}from 'react-router-dom';
import {CardDetails} from "./component/CardDetails.jsx"

function App() {
  const location = useLocation()
  var strurl = location.pathname.substring("/".length);
 
  return (
    <div>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path={strurl}element={<CardDetails/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
