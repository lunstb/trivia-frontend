import React from 'react'
import './TextInput.css'


export const TextInput = ({label}) => 
  <div className="text-input-container">
    <p className="text-input-label">{label}</p>
    <input type="text" className="text-input"></input>
  </div>
  