import React from 'react'

export default function Questions() {

    const [trivia, setTrivia] = React.useState({})

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => setTrivia(data))
    }, [])

    return (
        <div>
        </div>
    )
}