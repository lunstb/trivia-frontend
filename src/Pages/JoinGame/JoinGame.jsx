import React, { Component} from 'react'
import { BackButton } from '../../Components/BackButton/BackButton';
import { LargeButton } from '../../Components/LargeButton/LargeButton';
import { TextInput } from '../../Components/TextInput/TextInput';

export class JoinGame extends Component {
  render() {
    return (
      <div>
        <h1 className="header">Join Game</h1>
        <BackButton
          location = "/"
          text = "Back"
        />
        <TextInput
          label = "Game Code:"
        />
        <TextInput
          label = "Your Name:"
        />
        <br/>
        <br/>
        <LargeButton
          location = "/gamelobby"
          text = "Join Game"
        />
      </div>
    );
  }
}