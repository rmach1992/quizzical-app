import React from 'react'
import './App.css'
import Start from './Start'
import Questions from './Questions'

export default function App() {

  const [beginGame, setBeginGame] = React.useState(false)

  function startGame() {
    setBeginGame(prev =>!prev)
  }

  return (
    <div className="App">
      {
        !beginGame ? 
        <Start 
          beginGame={startGame}
        /> 
        : <Questions />
      }
    </div>
  )
}

