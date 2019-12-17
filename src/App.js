import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesList from './MoviesList.js';
import MovieDetail from './MovieDetail.js';
import { CLIENT_RENEG_LIMIT } from 'tls';


import {
  BrowserRouter as Router,  //if my code does not work, i'll try BrowserRouter as Router since it did work on VScode
  Route,
  Switch,
  Link,
} from 'react-router-dom';


const App =() => (
  <Router>
     <div className="App">
       <header className="App-header">
       <Link to="/" >
       <img src={logo} className="App-logo" alt="logo" />
       </Link>
       </header>
       <Switch>
       <Route exact path='/' component={MoviesList} />
       <Route path="/:id" component={MovieDetail} />
       </Switch>
     </div>
  </Router>
);


export default App;
