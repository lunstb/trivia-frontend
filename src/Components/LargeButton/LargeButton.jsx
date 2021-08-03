import React from 'react'
import './LargeButton.css'


export const LargeButton = ({callback, text}) => <a className="large-button-container"><button onClick={()=>callback()} className="large-button button-decorator">{text}</button></a>

