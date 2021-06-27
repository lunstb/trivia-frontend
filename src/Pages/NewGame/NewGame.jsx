import React, { Component} from 'react'
import { BackButton } from '../../Components/BackButton/BackButton';

export class NewGame extends Component {
  render() {
    return (
      <div>
        <h1>New Game</h1>
        <BackButton
          location = "/"
          text = "Back"
        />
      </div>
    );
  }
}