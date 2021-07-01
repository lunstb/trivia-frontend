import React, { Component} from 'react'
import './CategorySelection.css'


// export class CategorySelection extends Component {
//   constructor(props){
//     super(props)

//     this.state = {
//       selected: ""
//     }
//   }

//   render() {
//     return (
//       <div className="category-selection">
//         {this.props.categories.map((category) => (
//           <div key={category} onClick={()=>this.setState({selected:category})}className={"category-card "+(this.state.selected === category ? "category-selected":"")}>{category}</div>
//         ))}
//       </div>
//     );
//   }
// }

export const CategorySelection = ({categories, selected, setCategory}) => 
  <div className="category-selection">
    {categories.map((category) => (
      <div key={category} onClick={()=>setCategory(category)}className={"category-card "+(selected === category ? "category-selected":"")}>{category}</div>
    ))}
  </div>