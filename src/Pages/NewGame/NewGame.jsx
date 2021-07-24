import React, { Component} from 'react'
import { BackButton } from '../../Components/BackButton/BackButton';
import { CategorySelection } from '../../Components/CategorySelection/CategorySelection';
import { LargeButtonLink } from '../../Components/LargeButton/LargeButtonLink';
import { TextInput } from '../../Components/TextInput/TextInput';

export class NewGame extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: "",
      category: "",
      categories: []
    }

    this.getCategories = this.getCategories.bind(this)
    this.changeName = this.changeName.bind(this)
  }

  componentDidMount() {
    this.getCategories()
  }

  changeName(event) {
    this.setState({name: event.target.value})
  }

  async getCategories() {
    const categories = await fetch('http://localhost:8080/getcategories').then((response) => {
      return response.json()
    })

    this.setState({
      categories: categories
    })
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
          categories = {this.state.categories}
          selected = {this.state.category}
          setCategory = {(category) => this.setState({category: category})}
        />
        <br/>
        <br/>
        <LargeButtonLink
          location = {`/gamelobby?name=${encodeURI(this.state.name)}&status=creategame&category=${encodeURI(this.state.category)}`}
          text = "Create Game"
        />
      </div>
    );
  }
}