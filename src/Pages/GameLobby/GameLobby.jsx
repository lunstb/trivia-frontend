import React, { Component} from 'react'
import { BackButton } from '../../Components/BackButton/BackButton';
import { LoadingScreen } from './LoadingScreen/LoadingScreen';
import { LobbyWaitScreen } from './LobbyWaitScreen/LobbyWaitScreen';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { GameRoundScreen } from './GameRoundScreen/GameRoundScreen';
import { RoundResultsScreen } from './RoundResultsScreen/RoundResultsScreen';
import { GameEndScreen } from './GameEndScreen/GameEndScreen';
import { AlertSystem } from '../../Components/AlertSystem/AlertSystem';

export class GameLobby extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gameState: "loading",
      players: [],
      playerID: "",
      gameCode: "",
      countdownText: "Waiting",
      ready: false,
      currentQuestion: {},
      playerScores: []
    }

    this.websocket = null;

    this.enterAnswer = this.enterAnswer.bind(this)
    this.updateReady = this.updateReady.bind(this)
    this.handleLoading = this.handleLoading.bind(this)
  }

  enterAnswer(event) {
    // Make sure that the target value is a valid parsable int
    if(event.target.value.length === 0 || isNaN(event.target.value)){
      AlertSystem.instance.addState("Make sure your answer is a valid number","error") 
    }else{
      this.websocket.send(JSON.stringify({"type":1,"content":JSON.stringify({"answer":event.target.value})}))
    }
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
            countdownText: msg.body
          })
          break
        case 4:
          const parsedQuestion = JSON.parse(msg.body)
          console.log(parsedQuestion)
          self.setState({
            gameState: "round",
            currentQuestion: parsedQuestion
          })
          break
        case 5:
          const parsedPlayerScores = JSON.parse(msg.body)

          parsedPlayerScores.sort(function(a,b) {
            return b.Score - a.Score
          });
          console.log(parsedPlayerScores)
          self.setState({
            gameState: "roundend",
            playerScores: parsedPlayerScores
          })
          break
        case 6:
          self.setState({
            gameState: "gameend"
          })
          break
        case 7:
          self.setState({
            gameState: "gameend"
          })
          AlertSystem.instance.addState("Host left", "warning")
          break
          
        default:
          break
      }
      
    }
  }

  componentWillUnmount() {
    this.websocket.send(JSON.stringify({"type":2,"content":JSON.stringify({"status":"Leaving the game"})}))
    this.websocket.close()
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
        break
      case "lobby":
        currentScene = <LobbyWaitScreen 
          players = {this.state.players}
          code = {this.state.gameCode}
          ready = {this.state.ready}
          updateReady = {this.updateReady}
          countdownText = {this.state.countdownText}
        />
        break
      case "round":
        currentScene = <GameRoundScreen 
          question = {this.state.currentQuestion}
          enterAnswer = {this.enterAnswer}
          countdownText = {this.state.countdownText}
        />
        break
      case "roundend":
        currentScene = <RoundResultsScreen
          countdownText = {this.state.countdownText}
          playerScores = {this.state.playerScores}
          question = {this.state.currentQuestion}
        />
        break
      case "gameend":
        currentScene = <GameEndScreen
          playerScores = {this.state.playerScores}
        />
        break
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