import React from 'react'
import './PlayerList.css'


export const PlayerList = ({playerList}) => (
  <div className="player-list-container">
    {playerList.map((player)=>(
      <div className="player-container">
        <div className={"player-icon "+(player.isReady?"player-ready":"player-not-ready")}></div>
        <div>{player.name}</div>
      </div>
    ))}
  </div>
)