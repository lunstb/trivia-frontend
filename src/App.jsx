import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { About } from './Pages/About/About'
import { Home } from './Pages/Home/Home'
import { JoinGame } from './Pages/JoinGame/JoinGame'
import { NewGame } from './Pages/NewGame/NewGame'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/joingame">
            <JoinGame />
          </Route>
          <Route path="/newgame">
            <NewGame />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
