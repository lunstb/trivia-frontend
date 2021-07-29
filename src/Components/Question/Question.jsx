import React from 'react'
import './Question.css'


export const Question = ({question, unit, handleChange}) => (
  <div className="question-container">
    <div className="question-text">{question}</div>
    <div className="question-answer">
      <input onChange={handleChange} type="number"></input>
      <div>{unit}</div>
    </div>
    <div className="countdown"></div>
  </div>
)