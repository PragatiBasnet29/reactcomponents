import logo from './logo.svg';
import './App.css';
import Accordion from './component/accordian/index';
import RandomColour from './component/RandomColour/index';
import StarRating from "./component/star-rating";
import ImageSlider from './component/image-slider';

function App() {
  return (
    <div className="App">
     {/*accordion*/}
     <  Accordion/>

     {/*random colour*/}
     <RandomColour/>

     {/*star rating*/}
    <StarRating noOfStars={5}/>

    {/*image slider*/}
    <ImageSlider url="https://picsum.photos/v2/list" limit={10} page={1} />

    </div>
  );
}

export default App;
