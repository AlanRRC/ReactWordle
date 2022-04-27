import { useState } from "react"

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) // each guess is an array
    const [history, setHistory] = useState([]) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)

    //  format a new guess
    const formatGuess = () => {

    }

    //  add a new guess to the guesses state
    //  update isCorrect state if guess is correct
    //  add one to the turn number
    const addNewGuess = () => {

    }

    //  handle keyup event and track current guess
    //  if user presses enter, add the new guess
    const handleKeyup = () => {

    }

    return { turn, currentGuess, guesses, isCorrect, handleKeyup }
}

export default useWordle