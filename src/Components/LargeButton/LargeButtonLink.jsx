import React from 'react'
import { AlertSystem } from '../AlertSystem/AlertSystem'
import './LargeButton.css'

export const LargeButtonLink = ({location, text, disabled = false, disabledMsg="This button is disabled"}) =>   
<a className={"large-button-container"} href={disabled?"javascript:void(0)":location} onClick={()=>{
  if(disabled){
    AlertSystem.instance.addState(disabledMsg, "error")
  }
}}>
  <button className={"large-button button-decorator"+(disabled?" button-disabled":"")}>{text}</button>
</a>
