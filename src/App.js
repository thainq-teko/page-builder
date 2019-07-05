import React from 'react';
import './App.css';
import SimpleSwiperWithParams from './components/slider'
import "react-id-swiper/lib/styles/scss/swiper.scss";
import axios from 'axios'

const getData = async () => {
  const resp = await axios.get('https://phongvu.vn/api-v2/banner/gethomepagebannergroup?position=hp-de-slider-660x390&category=home&version=1')
  let temp = resp.data.data
  let array = []
  temp.forEach(i => {
    array = array.concat(i.images)
  });
  console.log(array)
  return array
}
getData()
function App() {
  return (
    <div className="App">
      <h1>Header</h1>
      <br/>
      <SimpleSwiperWithParams props={getData()}/>
    </div>
  );
}

export default App;
