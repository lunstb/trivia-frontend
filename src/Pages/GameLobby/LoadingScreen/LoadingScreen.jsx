import React from 'react'
import { LoadingAnimation } from '../../../Components/LoadingAnimation/LoadingAnimation';


export const LoadingScreen = () => (
  <div>
    <h1 className="header">Connecting...</h1>
    <LoadingAnimation />
  </div>
)
