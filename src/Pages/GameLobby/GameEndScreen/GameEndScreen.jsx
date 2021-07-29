import React from 'react'
import { BackButton } from '../../../Components/BackButton/BackButton'
import { Leaderboard } from '../../../Components/Leaderboard/Leaderboard'

export const GameEndScreen = (props) => (
  <div>
    <h1 className="header">Game Results:</h1>
    <BackButton 
      location = "/"
      text = "Exit"
    />

    <Leaderboard
      players = {props.playerScores}
    />

    <div>Game ended</div>
  </div>
)
