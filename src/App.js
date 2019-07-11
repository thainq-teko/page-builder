import React from 'reactn';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';

import LeftMenu from 'components/Menu';
import CreateURL from 'components/CreateURL'

function App() {
  return (
    <div className='App'>
      <h1>Page builder</h1>
      <Router>
        <Switch>
          <Route exact path='/' component={LeftMenu}/>
          <Route path='/create' component={CreateURL} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
