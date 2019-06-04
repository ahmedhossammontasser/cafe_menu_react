import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import MenuForm from './form'
import List from './list';
require('dotenv').config()

    // <script src="https://www.gstatic.com/firebasejs/6.1.0/firebase.js"></script>
function App() {
  return (
    <div className="App">

      <header className="app_header">
      <h1 className="h1_tag">Cafe React</h1>
      </header>
      <Router>
        <div>
          <Route exact path='/form' component={MenuForm}></Route>
          <Route exact path='/' component={List}></Route>

        </div>
      </Router>

    </div>
  );
}

export default App;
