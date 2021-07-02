import React, { Component} from 'react'
import { LargeButtonLink } from '../../Components/LargeButton/LargeButtonLink'
import './Home.css'


export class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="header">Project Name</h1>
        <LargeButtonLink
          location = "/newgame"
          text = "New Game"
        />
        <LargeButtonLink
          location = "/joingame"
          text = "Join Game"
        />
        <LargeButtonLink
          location = "/about"
          text = "About"
        />
      </div>
    );
  }
}