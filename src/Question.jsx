//Individual component for each question
import React from 'react'

export default function Question(props) {
    return (
        <div>
            <h2>{props.question}</h2>
        </div>
    )
}