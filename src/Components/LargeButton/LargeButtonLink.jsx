import React from 'react'
import { Link } from 'react-router-dom'
import './LargeButton.css'


export const LargeButtonLink = ({location, text}) =>   <a className="large-button-container" href={location}><button  className="large-button button-decorator">{text}</button></a>


{/* <Link className="large-button" to={location}>{text}</Link> */}