import React, { Component} from 'react'
import { BackButton } from '../../Components/BackButton/BackButton';
import { LoadingScreen } from './LoadingScreen/LoadingScreen';
import { LobbyWaitScreen } from './LobbyWaitScreen/LobbyWaitScreen';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { GameRoundScreen } from './GameRoundScreen/GameRoundScreen';

export class GameLobby extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gameState: "loading",
      players: [],
      playerID: "",
      gameCode: "",
      ready: false
    }

    this.websocket = null;

    this.updateReady = this.updateReady.bind(this);
    this.handleLoading = this.handleLoading.bind(this);
  }

  handleLoading() {
    if(this.websocket !== null)
      return;
    const url = new URL(window.location.href);

    const status = url.searchParams.get("status");
    const name = url.searchParams.get("name");
    if(status === "creategame"){
      const category = url.searchParams.get("category");
      this.websocket = new W3CWebSocket(`ws://localhost:8080/creategame/${name}/${category}`)
    }else{
      const gameCode = url.searchParams.get("gamecode");
      this.websocket = new W3CWebSocket(`ws://localhost:8080/joingame/${gameCode}/${name}`)
    }

    const self = this;
    this.websocket.onmessage = function(event) {
      const msg = JSON.parse(event.data)
      console.log(msg)

      switch (msg.type) {
        case 0:
          self.setState({
            gameState: "lobby",
            gameCode: msg.body
          })
          break
        case 1:
          self.setState({
            players: JSON.parse(msg.body)
          })
          break
        case 2:
          self.setState({
            playerID: msg.body
          })
          break
        case 3: 
          self.setState({
            gameState: "round"
          })
          break
        default:
          break
      }
      
    }
  }

  updateReady() {
    const nextReady = !this.state.ready
    this.setState({
      ready: nextReady
    })
    this.websocket.send(JSON.stringify({"type":0,"content":JSON.stringify({"status":nextReady})}))
  }

  render() {
    let currentScene;

    switch (this.state.gameState) {
      case "loading":
        this.handleLoading()
        currentScene = <LoadingScreen />
        break;
      case "lobby":
        currentScene = <LobbyWaitScreen 
          players = {this.state.players}
          code = {this.state.gameCode}
          ready = {this.state.ready}
          updateReady = {this.updateReady}
        />
        break;
      case "round":
        currentScene = <GameRoundScreen />
        break;
      case "roundend":

        break;
      default:
        break;
    }

    return (
      <div>
        <BackButton 
          location = "/"
          text = "Exit"
        />
        {currentScene}
      </div>
    );
  }
}