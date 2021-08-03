import React from 'react'
import { Link } from 'react-router-dom'
import './BackButton.css'


export const BackButton = ({location}) => <Link className="back-button" to={location}>&#8249;</Link>