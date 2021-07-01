import React, { Component} from 'react'
import { BackButton } from '../../Components/BackButton/BackButton';
import { CategorySelection } from '../../Components/CategorySelection/CategorySelection';
import { LargeButton } from '../../Components/LargeButton/LargeButton';
import { TextInput } from '../../Components/TextInput/TextInput';

export class NewGame extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: "",
      category: ""
    }

    this.changeName = this.changeName.bind(this)
  }

  changeName(event) {
    this.setState({name: event.target.value})
    console.log(this.state)
  }

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
          value = {this.state.name}
          handleChange = {this.changeName}
        />
        <br/>
        <br/>
        <CategorySelection
          categories = {["Animals","Celebrities","Countries","World Records","All"]}
          selected = {this.state.category}
          setCategory = {(category) => this.setState({category: category})}
        />
        <br/>
        <br/>
        <LargeButton
          location = {`/gamelobby?name=${encodeURI(this.state.name)}&status=creategame&category=${encodeURI(this.state.category)}`}
          text = "Create Game"
        />
      </div>
    );
  }
}