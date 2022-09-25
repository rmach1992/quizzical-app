import React from 'react'

export default function Start(props) {
    return (
        <div className="start-menu">
            <h1>Quizzical</h1>
            <h2>This app will ask you 5 trivia questions and tell you your score after you submit!</h2>
            <button onClick={props.beginGame}>Start quiz</button>
        </div>
    )
}