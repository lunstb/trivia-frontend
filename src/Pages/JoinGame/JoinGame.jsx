import React, { Component} from 'react'
import { BackButton } from '../../Components/BackButton/BackButton';
import { LargeButtonLink } from '../../Components/LargeButton/LargeButtonLink';
import { TextInput } from '../../Components/TextInput/TextInput';

export class JoinGame extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: "",
      code: ""
    }

    this.changeName = this.changeName.bind(this)
    this.changeCode = this.changeCode.bind(this)
  }

  changeName(event) {
    this.setState({name: event.target.value})
  }

  changeCode(event) {
    this.setState({code: event.target.value})
  }

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
          value = {this.state.code}
          handleChange = {this.changeCode}
        />
        <TextInput
          label = "Your Name:"
          value = {this.state.name}
          handleChange = {this.changeName}
        />
        <br/>
        <br/>
        <LargeButtonLink
          location = {`/gamelobby?status=joingame&name=${encodeURI(this.state.name)}&gamecode=${encodeURI(this.state.code)}`}
          text = "Join Game"
        />
      </div>
    );
  }
}