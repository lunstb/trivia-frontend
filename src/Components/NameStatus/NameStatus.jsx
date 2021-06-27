import React from 'react'
import './NameStatus.css'


export const NameStatus = ({name, ready}) => <div className="name-status-container">
  <div data-testid="name-status-icon" className={"name-status " +(ready ? "name-status-ready":"name-status-not-ready")}></div>
  <p data-testid="name-status-text">{ name }</p>
</div>