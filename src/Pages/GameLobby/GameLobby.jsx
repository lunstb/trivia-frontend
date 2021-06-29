import React, { Component} from 'react'
import { BackButton } from '../../Components/BackButton/BackButton';
import { LargeButton } from '../../Components/LargeButton/LargeButton'
import { PlayerList } from '../../Components/PlayerList/PlayerList';


export class GameLobby extends Component {
  render() {
    return (
      <div>
        <h1 className="header">Game Lobby</h1>
        <BackButton 
          location = "/"
          text = "Exit"
        />
        <PlayerList
          playerList = {[
            {
              name: "Bill",
              isReady: true
            },
            {
              name: "Sally",
              isReady: false
            },
            {
              name: "Hannah",
              isReady: false
            },
            {
              name: "Joe",
              isReady: true
            }
          ]}
        />
        <LargeButton
          location = "/"
          text = "Start Game"
        />
      </div>
    );
  }
}