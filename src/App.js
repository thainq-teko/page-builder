import React, { useState, useEffect } from 'reactn';
import './App.css';
// eslint-disable-next-line
import SimpleSwiperWithParams from 'components/SimpleSwiperWithParams';
import LeftMenu from 'components/Menu';
import ProductList from 'components/ProductList';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

function App() {
  // eslint-disable-next-line
  const [data, setData] = useState([]);

  const getData = async () => {
    const resp = await axios.get(
      'https://phongvu.vn/api-v2/banner/gethomepagebannergroup?position=hp-de-slider-660x390&category=home&version=1',
    );
    let temp = resp.data.data;
    let array = [];
    temp.forEach(i => {
      array = array.concat(i.images);
    });
    setData(array);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='App'>
      <h1>Page builder</h1>
      {/* <br />
      <div>{data.length ? <SimpleSwiperWithParams data={data} /> : null}</div> */}
      {/* <div>
        <LeftMenu />
      </div> */}
      <Router>
        <Switch>
          <Route path='/' component={LeftMenu}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
