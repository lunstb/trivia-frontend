import React from 'react'
import './PlayerList.css'


export const PlayerList = ({playerList}) => (
  <div className="player-list-container">
    {playerList.map((player)=>(
      <div key={player.Name} className="player-container">
        <div className={"player-icon "+(player.Ready?"player-ready":"player-not-ready")}></div>
        <div>{player.Name}</div>
      </div>
    ))}
  </div>
)