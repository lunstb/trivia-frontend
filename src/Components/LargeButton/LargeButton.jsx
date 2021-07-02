import React from 'react'
import './LargeButton.css'


export const LargeButton = ({callback, text}) => <div className="large-button" onClick={()=>callback()}>{text}</div>