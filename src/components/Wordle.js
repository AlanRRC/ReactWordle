import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'

export default function Wordle({ solution }) {

    const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordle(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        if (isCorrect) {
            console.log('congrats you win!')
            window.removeEventListener('keyup', handleKeyup)
        }

        if (turn > 5) {
            console.log('unlucky you suck at this')
            window.removeEventListener('keyup', handleKeyup)
        }

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup, isCorrect, turn])

    return (
        <>
            <div>solution - {solution} </div>
            <div>current guess - {currentGuess}</div>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
            <Keypad usedKeys={usedKeys} />
        </>

    )
}
