import React from 'react'
import { BackButton } from '../../../Components/BackButton/BackButton'
import { LargeButton } from '../../../Components/LargeButton/LargeButton'
import { PlayerList } from '../../../Components/PlayerList/PlayerList'

export const LobbyWaitScreen = (props) => (
  <div>
    <h1 className="header">Game Lobby</h1>
    <BackButton 
      location = "/"
      text = "Exit"
    />
    <PlayerList
      playerList = {props.players}
    />
    <LargeButton
      location = "/"
      text = "Start Game"
    />
  </div>
)

