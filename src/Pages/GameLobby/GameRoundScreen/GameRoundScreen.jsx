import React from 'react'
import { BackButton } from '../../../Components/BackButton/BackButton'
import { Question } from '../../../Components/Question/Question'


export const GameRoundScreen = (props) => (
  <div>
    <h1 className="header">Round BLANK</h1>
    <BackButton 
      location = "/"
      text = "Exit"
    />

    <Question
      question = {props.question.question}
      unit = {props.question.unit}
      handleChange = {props.enterAnswer}
    />
   
    <div>{props.countdownText} Seconds Left to Guess</div>
  </div>
)
