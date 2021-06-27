import React from 'react'
import { Link } from 'react-router-dom'
import './BackButton.css'


export const BackButton = ({location, text}) => <Link className="back-button" to={location}>{text}</Link>