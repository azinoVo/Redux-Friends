import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './components/Login';
import PrivateFriends from './components/PrivateFriends';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <h1>Private Friends</h1>
      <Router>
        <nav className="navbar">
          <Link to='/login'>Login</Link>
          <Link to='/private'>Private Page</Link>
        </nav>


        <Route path='/login' component={Login} />
        <PrivateRoute exact path="/private" component={PrivateFriends} />
      </Router>
    </div>
  );
}

export default App;
