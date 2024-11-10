import logo from './logo.svg';
import './App.css';
import React from 'react';
import Accordion from './component/accordian/index';
import RandomColour from './component/RandomColour/index';
import StarRating from "./component/star-rating";
//import ImageSlider from './component/image-slider';
import LoadMoreData from './component/load-more-data';
//import TreeView from './component/tree-view';
//import { treeData } from './component/tree-view/data';
import QRCodeGenerator from './component/qr-code-generator';
import LightDarkMode from './component/light-dark-mode';

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
    {/* <ImageSlider url="https://picsum.photos/v2/list" limit={10} page={1} /> */}

    {/*load more image*/} 
    <LoadMoreData/>

    {/*tree view*/}
    {/* <TreeView data={treeData}/> */}

    {/*qr code generator*/}
    <QRCodeGenerator/>

    {/*light dark mode*/}
    <LightDarkMode/>
    
    </div>
  );
}

export default App;
