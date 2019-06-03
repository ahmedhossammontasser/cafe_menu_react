import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import MenuForm from './form'
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
         {/*     
           <Route exact path='/team' component={TeamComponent}></Route>
        */}
          <Route exact path='/form' component={MenuForm}></Route>
          <Route exact path='/' component={List}></Route>

        </div>
      </Router>

    </div>
  );
}

export default App;
