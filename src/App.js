import React, { useState, useEffect } from 'reactn';
import './App.css';
import SimpleSwiperWithParams from './components/slider'
import "react-id-swiper/lib/styles/scss/swiper.scss";
import axios from 'axios'


function App() {
  const [data, setData] = useState([])

  const getData = async () => {
    const resp = await axios.get('https://phongvu.vn/api-v2/banner/gethomepagebannergroup?position=hp-de-slider-660x390&category=home&version=1')
    let temp = resp.data.data
    let array = []
    temp.forEach(i => {
      array = array.concat(i.images)
    });
    setData(array)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <h1>Header</h1>
      <br />
      <div>
        <SimpleSwiperWithParams data={data} />
      </div>
    </div>
  );
}

export default App;
