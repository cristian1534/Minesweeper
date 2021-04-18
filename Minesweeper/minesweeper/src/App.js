import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Admin from './pages/Admin';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/" component={ Register } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/Home" component={ Home } />
            <Route exact path="/api/admin" component={ Admin } />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
