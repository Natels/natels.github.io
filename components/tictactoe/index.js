import React from 'react'
import { useState } from 'react'

function Square({ value, onClick }) {
	return (
		<button className="square" onClick={ onClick }>
			{ value }
		</button>
	)
}

function Board() {
	const [statusMessage, setStatusMessage] = useState(null)
	const [isX, setIsX] = useState(true)
	const [squares, setSquares] = useState(Array(9).fill(null))

	function renderSquare(i) {
		return <Square value={ squares[i] } onClick={() => handleClick(i) } />;
	}

	function handleClick(i) {
		if (statusMessage == null && squares[i] == null) {
			squares[i] = isX ? "X" : "O"
			setSquares(squares)
			if (!checkForWinner()) {
				setIsX(!isX)
			}
		}
	}

	function checkForWinner() {
		if (
			squares[0] == squares[1] && squares[1] == squares[2] && squares[2] != null ||
			squares[3] == squares[4] && squares[4] == squares[5] && squares[5] != null ||
			squares[6] == squares[7] && squares[7] == squares[8] && squares[8] != null ||
			squares[0] == squares[3] && squares[3] == squares[6] && squares[6] != null ||
			squares[1] == squares[4] && squares[4] == squares[7] && squares[7] != null ||
			squares[2] == squares[5] && squares[5] == squares[8] && squares[8] != null ||
			squares[0] == squares[4] && squares[4] == squares[8] && squares[8] != null ||
			squares[2] == squares[4] && squares[4] == squares[6] && squares[6] != null 
		) {
			setStatusMessage(`${isX ? 'X' : 'O'}'s Win!!!`)
			return true
		}

		if (!squares.some((val) => val === null)) {
			setStatusMessage('Cats game')
			return true
		}
		return false
	}

	function resetGame() {
		setStatusMessage(null)
		setIsX(true)
		setSquares(Array(9).fill(null))
	}

return (
		<div>
			<div className="status">{ statusMessage }</div>
			<div className="board-row">
				{ renderSquare(0) }
				{ renderSquare(1) }
				{ renderSquare(2) }
			</div>
			<div className="board-row">
				{ renderSquare(3) }
				{ renderSquare(4) }
				{ renderSquare(5) }
			</div>
			<div className="board-row">
				{ renderSquare(6) }
				{ renderSquare(7) }
				{ renderSquare(8) }
			</div>
			{statusMessage != null && <button onClick={ resetGame } >Reset</button>}
		</div>
	);
}

export default function Game() {
	return (
		<div className="game">
			<div className="game-board">
				<Board />
			</div>
			<div className="game-info">
				<div>{/* status */}</div>
				<ol>{/* TODO */}</ol>
			</div>
		</div>
	);
}

