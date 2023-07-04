import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Home from './components/Home/Home';
import Forms from './components/Form/Forms';
// import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/forms" component={Forms} />
        
      </Switch>
    </Router>
  );
}

export default App;
