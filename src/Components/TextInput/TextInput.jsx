import React from 'react'
import './TextInput.css'


export const TextInput = ({label, value, handleChange}) => 
  <div className="text-input-container">
    <p className="text-input-label">{label}</p>
    <input value={value} onChange={handleChange} type="text" className="text-input"></input>
  </div>
  