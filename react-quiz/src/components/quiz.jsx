import React from "react";
import {Link} from 'react-router-dom'


export default function quiz({question,handlePrevious,handleNext,handleQuit,scoreCalculate,Data}) {
  return (
    <div className="QuizComponent">
      <h1>Question</h1>
      <p>{question + 1} of {Data.length}</p>
      <h3>{Data[question].question}</h3>
      <div className="options">
        {Object.values(Data[question]).slice(1,5).map((option, index) => (
          <option key={index} onClick={(e) => scoreCalculate(e)} className="choose">{option}</option>
        ))}
      </div>
      <div className="buttons">
        <button className="button1" onClick={handlePrevious}>Previous</button>
        <button className="button2" onClick={handleNext}>Next</button>
        <button className="button3" onClick={handleQuit}>Quit</button>
        <Link to={'/resultPage'}><button className="button4">Finish</button></Link>
      </div>
    </div>
  )
}

