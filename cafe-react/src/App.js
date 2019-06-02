import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Form from './form'
import List from './list';
import TeamComponent from './TeamComponent';

function App() {
  return (
    <div className="App">
      <header className="app_header">
      <h1 className="h1_tag">Cafe React</h1>
      </header>
      <Router>
        <div>
          <Route exact path='/form' component={Form}></Route>
          <Route exact path='/' component={List}></Route>

        </div>
      </Router>

    </div>
  );
}

export default App;
