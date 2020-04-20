import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Home, Bar } from "./components";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Link to='/'>Home</Link>
      <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/bar'><Bar /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
