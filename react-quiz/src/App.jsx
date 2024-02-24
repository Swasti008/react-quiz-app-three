import './App.css'
import React, { useState } from 'react';
import { Routes ,Route,useNavigate} from 'react-router-dom';
import Home from './components/home';
import Quiz from './components/quiz';
import Result from './components/result';
import Data from "./components/resources/quizQuestion.json";

function App() {
 const result=useNavigate()
 const [question,setQNo]=useState(0)
 const [score,setScore]=useState(0)
 const [attempted,setAttempted]=useState(0)

const handlePrevious = () => {
  if (question > 0) {
   setQNo(question-1)
  }
};

const handleNext = () => {
  if (question < Data.length - 1) {
    setQNo(question+1)
  }
  else{
    result('/resultPage')
    setQNo(0)
  }
};

const handleQuit =()=>{
  if (window.confirm("Are you sure you want to quit ?")) {
    result("/resultPage")
    setQNo(0)
  }
}

const scoreCalculate = (e) => {
  setAttempted(attempted + 1)
  if (e.target.innerHTML == Data[question].answer) {
    alert("Correct answer 🟢")
    setScore(score + 1)
    setQNo(question+1)
  }
  else {
    alert("Wrong answer 🔴")
    setQNo(question+1)
  }
}

return(
  <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/quizGame' element={<Quiz handlePrevious={handlePrevious} handleNext={handleNext} handleQuit={handleQuit}  scoreCalculate={scoreCalculate} question={question} Data={Data}/>}></Route>
        <Route path='/resultPage' element={<Result score={score} attempted={attempted}/>}></Route>       
      </Routes>
    </div>
)


}

export default App
