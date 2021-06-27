import React from 'react'
import { Link } from 'react-router-dom'
import './LargeButton.css'


export const LargeButton = ({location, text}) => <Link className="large-button" to={location}>{text}</Link>