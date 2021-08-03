import React from 'react'
import './CategorySelection.css'
import './CardDecoration.css'

export const CategorySelection = ({categories, selected, setCategory}) => 
  <div className="category-selection">
    {categories.map((category) => (
      <div key={category.Name} onClick={()=>setCategory(category.Name)}className={"category-card "+(selected === category.Name ? "category-selected":"")}>{category.Name}</div>
    ))}
  </div>