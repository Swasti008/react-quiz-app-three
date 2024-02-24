import React from 'react'
import {Link} from 'react-router-dom'

export default function home() {
  return (
    <div className='home'>
    <h1>Quiz Minds</h1>
    <Link to={'/quizGame'}><button>Play</button></Link>
  </div>
  )
}
