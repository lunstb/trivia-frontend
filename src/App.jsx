import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { About } from './Pages/About/About'
import { Home } from './Pages/Home/Home'
import { JoinGame } from './Pages/JoinGame/JoinGame'
import { NewGame } from './Pages/NewGame/NewGame'
import './App.css';
import { GameLobby } from './Pages/GameLobby/GameLobby';
import { AlertSystem } from './Components/AlertSystem/AlertSystem';

function App() {
  return (
    <div className="background">
      <div className="layer">
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
              <Route path="/gamelobby">
                <GameLobby />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
        </Router>
        <AlertSystem/>
      </div>
    </div>
    
  );
}

export default App;
