import React from 'react'
import Question from './Question'

export default function Questions() {

    const [trivia, setTrivia] = React.useState([])

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => setTrivia(data))
    }, [])

    // once submit button is clicked, check all selected answers
    // display count of answers right, highlight correct answers as green, highlight incorrect as red

    const questionElements = []

    if (trivia.length != 0) {
        for (let i = 0; i < 5; i++) {
            questionElements.push(
                <Question 
                    question={trivia.results[i].question}
                    answer={trivia.results[i].correct_answer}
                    incorrectAnswers={trivia.results[i].incorrect_answers}
                    key={i}
                />
        )}
    }

    return (
        <div>
            {/* After clicking button, render "You scored #/5 correct answers" <button>Play again</button> */}
            {questionElements}
            <button>Check answers</button> 
        </div>
    )
}