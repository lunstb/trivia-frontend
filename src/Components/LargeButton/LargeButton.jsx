import React from 'react'
import { AlertSystem } from '../AlertSystem/AlertSystem'
import './LargeButton.css'


export const LargeButton = ({callback, text, disabled = false, disabledText = "This button is disabled"}) => 
<a className="large-button-container">
  <button onClick={()=>{
      if(!disabled){
        callback()
      }else{
        AlertSystem.instance.addState(disabledText, "error")
      }
    }} className={"large-button button-decorator"+(disabled?" button-disabled":"")}>{text}</button>
</a>

