import React from 'react'
import './Countdown.css'


export const Countdown = ({text, timeLeft}) => (
  <div className="countdown-container">
    <div className="time-left">{timeLeft}</div>
    <div className="countdown-text">{text}</div>
  </div>
)