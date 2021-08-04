import React from 'react'
import "./AlertSystem.css"
import { ErrorMsg, InfoMsg, SuccessMsg, WarningMsg } from './AlertTypes/AlertTypes';

export class AlertSystem extends React.Component {

  static instance = null;

  constructor(props) {
    super(props);

    this.state = {
      messages: [
        
      ]
    }

    this.addState = this.addState.bind(this);
    this.removeState = this.removeState.bind(this);
    AlertSystem.instance = this;
  }


  addState(msg, type) {
    const newMsg = {
      Message: msg,
      Type: type
    }

    let updatedMessages = this.state.messages;
    updatedMessages.push(newMsg);
    this.setState({
      messages: updatedMessages
    })
    
    setTimeout(() => {this.removeState(msg)}, 4000)
  }

  removeState(msg) {
    let updatedMessages = this.state.messages.filter(message => message.Message !== msg);
    this.setState({
      messages: updatedMessages
    })
  }

  render() {
    return (
      <div className="alert-system-container">
        {
          this.state.messages.map((message,i) => {
            switch (message.Type) {
              case "info":
                return <InfoMsg key={message.Message+i} msg={message.Message} />
              case "success":
                return <SuccessMsg key={message.Message+i} msg={message.Message} />
              case "warning":
                return <WarningMsg key={message.Message+i} msg={message.Message} />
              case "error":
                return <ErrorMsg key={message.Message+i} msg={message.Message} />
              default:
                console.log("The message type you entered does not exist")
                break;
            }
          })
        }
        
      </div>
    );
  }
}