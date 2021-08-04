import React from 'react'
import { Countdown } from '../../../Components/Countdown/Countdown'
import { Leaderboard } from '../../../Components/Leaderboard/Leaderboard'
import { QuestionAnswer } from '../../../Components/QuestionAnswer/QuestionAnswer'


export const RoundResultsScreen = (props) => (
  <div>
    <h1 className="header">Round Results:</h1>

    <QuestionAnswer
      question = {props.question}
      unit = {props.question.unit}
    />

    <Leaderboard
      players = {props.playerScores}
    />

    <Countdown
      text = "Seconds Until Next Round"
      timeLeft = {props.countdownText}
    />
  </div>
)

