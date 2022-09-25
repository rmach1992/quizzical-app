import React from 'react'

export default function Question(props) {

    const answerArray = props.incorrectAnswers
    answerArray.push(props.answer)
    
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    shuffle(answerArray)

    const answerBtn = answerArray.map(answer => {
        return (
            <button>
                {answer}
            </button>
        )
    })


    return (
        <div>
            <h2>{props.question}</h2>
            {answerBtn}
        </div>
    )
}