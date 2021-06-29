import React, { Component} from 'react'
import { BackButton } from '../../Components/BackButton/BackButton';
import { CategorySelection } from '../../Components/CategorySelection/CategorySelection';
import { LargeButton } from '../../Components/LargeButton/LargeButton';
import { TextInput } from '../../Components/TextInput/TextInput';

export class NewGame extends Component {
  render() {
    return (
      <div>
        <h1 className="header">New Game</h1>
        <BackButton
          location = "/"
          text = "Back"
        />
        <TextInput
          label = "Your Name:"
        />
        <br/>
        <br/>
        <CategorySelection
          categories = {["Animals","Celebrities","Countries","World Records","All"]}
        />
        <br/>
        <br/>
        <LargeButton
          location = "/gamelobby"
          text = "Create Game"
        />
      </div>
    );
  }
}