import React from 'react'
import './Leaderboard.css'


export const Leaderboard = ({players, gameEnd = false}) => (
  <div>
    <div className="leaderboard-text">Leaderboard</div>
    <table className="leaderboard">
      {players.map((player, i)=>(
        <tr key={player.Name}>
          <td className="score-position">{i + 1}</td>
          <td>{player.Name}</td>
          <td>{player.Score} points</td>
          { !gameEnd && <td className="score-increase">+{player.ScoreIncrease}</td>}
        </tr>
      ))}
    </table>
    
  </div>
)