import React from 'react'
import { BackButton } from '../../../Components/BackButton/BackButton'
import { LargeButton } from '../../../Components/LargeButton/LargeButton'
import { LobbyCode } from '../../../Components/LobbyCode/LobbyCode'
import { PlayerList } from '../../../Components/PlayerList/PlayerList'


export const LobbyWaitScreen = (props) => (
  <div>
    <h1 className="header">Game Lobby</h1>
    <BackButton 
      location = "/"
      text = "Exit"
    />
    <LobbyCode
      text = {props.code}
    />
    <PlayerList
      playerList = {props.players}
    />
    <LargeButton
      callback = {()=>{props.updateReady()}}
      text = {props.ready ? props.countdownText : "Ready"}
    />
  </div>
)
