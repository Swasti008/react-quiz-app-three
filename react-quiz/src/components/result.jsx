import React from 'react'
import {Link} from 'react-router-dom'

export default function result({score,attempted}) {
  return (
    <div className='ResultComponent'>
        <h1>Result</h1>
        <div className='result'>
            <h2>🚀You need more practice!🚀</h2>
            <h3>Your score is {score}</h3>
            <div className='info'><p>Total number of questions </p><p>15</p></div>
            <div className='info'><p>Number of attempted question</p><p>{attempted}</p></div>
            <div className='info'><p>Number of correct answers🟢</p><p>{score}</p></div>
            <div className='info'><p>Number of wrong answers🔴</p><p>{attempted-score}</p></div>
        </div>
        <div className='buttons'>
        <Link to={"/quizGame"}><button className='play'>Play Again</button></Link>
        <Link to={"/"}><button className='back'>Back to home</button></Link>
        </div>
      </div>
  )
}
