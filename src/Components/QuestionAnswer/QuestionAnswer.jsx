import React from 'react'
import './QuestionAnswer.css'


export const QuestionAnswer = ({question, unit}) => (
  <div className="question-answer-container">
    <div className="question-text">{question.question}</div>
    <div className="question-answer">{question.answer} {unit}</div>
    <div className="countdown"></div>
  </div>
)