import React, { Component} from 'react'
import { LargeButton } from '../../Components/LargeButton/LargeButton'
import './Home.css'


export class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="header">Project Name</h1>
        <LargeButton
          location = "/newgame"
          text = "New Game"
        />
        <LargeButton
          location = "/joingame"
          text = "Join Game"
        />
        <LargeButton
          location = "/about"
          text = "About"
        />
      </div>
    );
  }
}