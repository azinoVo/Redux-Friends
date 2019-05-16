import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <h1>TESTING</h1>
      <Router>
        <nav className="navbar">
          <Link to='/login'>Login</Link>
          <Link to='/private'>Private Page</Link>
        </nav>


        <Route path='/login' component={Login} />
      </Router>
    </div>
  );
}

export default App;
