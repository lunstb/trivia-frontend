import React from 'react'
import { AlertSystem } from '../AlertSystem/AlertSystem'
import './LobbyCode.css'


export const LobbyCode = ({text}) => (
<div className="lobby-code-container">
  <div className="lobby-code" id="lobby-code">{text}</div>
  <img className="copy-code" src="/copy.svg" onClick = {() => {
    var lobbyCode = document.getElementById("lobby-code")

    navigator.clipboard.writeText(lobbyCode.textContent)

    AlertSystem.instance.addState("You copied the code", "info")
  }}></img>
</div>)