import React from 'react'
import { BackButton } from '../../../Components/BackButton/BackButton'
import { LargeButton } from '../../../Components/LargeButton/LargeButton'


export const GameRoundScreen = (props) => (
  <div>
    <h1 className="header">Round BLANK</h1>
    <BackButton 
      location = "/"
      text = "Exit"
    />
    
    <LargeButton
      callback = {()=>{alert(1)}}
      text = "Submit Answer"
    />
  </div>
)

