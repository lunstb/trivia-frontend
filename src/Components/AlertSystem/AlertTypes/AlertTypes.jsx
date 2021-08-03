import React from 'react'
import './AlertTypes.css'


export const InfoMsg = ({msg}) => (
  <div className="info-msg">
    <i className="fa fa-info-circle"></i>
    {msg}
  </div>
)
export const SuccessMsg = ({msg}) => (
  <div className="success-msg">
    <i className="fa fa-check"></i>
    {msg}
  </div>
)
export const WarningMsg = ({msg}) => (
  <div className="warning-msg">
    <i className="fa fa-warning"></i>
    {msg}
  </div>
)

export const ErrorMsg = ({msg}) => (
  <div className="error-msg">
    <i className="fa fa-times-circle"></i>
    {msg}
  </div>
)