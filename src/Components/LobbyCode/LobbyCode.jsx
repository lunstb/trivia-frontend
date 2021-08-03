import React from 'react'
import './LobbyCode.css'


export const LobbyCode = ({text}) => (
<div className="lobby-code-container">
  <div className="lobby-code" id="lobby-code">{text}</div>
  <img className="copy-code" src="/copy.svg" onClick = {() => {
    var lobbyCode = document.getElementById("lobby-code")

    navigator.clipboard.writeText(lobbyCode.textContent)

    alert("copied the text " + lobbyCode.textContent)
  }}></img>
</div>)