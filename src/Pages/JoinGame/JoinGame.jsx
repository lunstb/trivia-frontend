import React, { Component} from 'react'
import { BackButton } from '../../Components/BackButton/BackButton';

export class JoinGame extends Component {
  render() {
    return (
      <div>
        <h1>Join Game</h1>
        <BackButton
          location = "/"
          text = "Back"
        />
      </div>
    );
  }
}