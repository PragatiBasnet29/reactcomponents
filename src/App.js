import logo from './logo.svg';
import './App.css';
import Accordion from './component/accordian/index';
import RandomColour from './component/RandomColour/index';
import StarRating from "./component/star-rating";


function App() {
  return (
    <div className="App">
     {/*accordion*/}
     <  Accordion/>

     {/*random colour*/}
     <RandomColour/>

     {/*star rating*/}
    <StarRating noOfStars={10}/>

     
    </div>
  );
}

export default App;
