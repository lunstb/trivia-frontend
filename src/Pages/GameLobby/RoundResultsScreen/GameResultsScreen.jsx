import React from 'react'
import { Leaderboard } from '../../../Components/Leaderboard/Leaderboard'


export const GameResultsScreen = (props) => (
  <div>
    <h1 className="header">Round Results:</h1>

    <div>Round Results</div>

    <div>Current Standing</div>

    <Leaderboard
      players = {props.playerScores}
    />

    <div>Next round in {props.countdownText} seconds</div>
  </div>
)

