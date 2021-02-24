import React from 'react';
import './App.css';
import './style/table-style.css';
import "./style/chart.css"
import Sidebar from './components/sidebar/sidebar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Router>
       <Sidebar/>
          <Switch>
          <Route path="/omborxona" exact component={Main}/>
          </Switch>
      </Router>
    </div>
  );
}
export default App;
