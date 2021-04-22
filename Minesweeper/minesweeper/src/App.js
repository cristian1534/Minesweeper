import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/" component={ Register } />
            <Route  path="/login" component={ Login } />
            <Route  path="/home" component={ Home } />
            <Route  path="/api/admin" component={ Admin } />
            <Route  path="" component={ NotFound} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
