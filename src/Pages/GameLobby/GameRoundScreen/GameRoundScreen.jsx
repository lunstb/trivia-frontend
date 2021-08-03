import React from 'react'
import { BackButton } from '../../../Components/BackButton/BackButton'
import { Countdown } from '../../../Components/Countdown/Countdown'
import { Question } from '../../../Components/Question/Question'


export const GameRoundScreen = (props) => (
  <div>
    <h1 className="header">Enter Your Best Guess</h1>
    <BackButton 
      location = "/"
      text = "Exit"
    />

    <Question
      question = {props.question.question}
      unit = {props.question.unit}
      handleChange = {props.enterAnswer}
    />
   
    <Countdown
      text = "Seconds Left in Round"
      timeLeft = {props.countdownText}
    />
  </div>
)
