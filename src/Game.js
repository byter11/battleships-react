import React from 'react';
import Board from './Board.js'
import GameBoard from './GameBoard.js'

function Game(){
	const {myBoard, setMyBoard} = useState( GameBoard() );
	const {enemyBoard, setEnemyBoard} = useState ( GameBoard() );
	const {isPlaying, setIsPlaying} = useState(False);
	onDrop = () => {

	}
	handleAttack = () => {
		
	}
	startGame = () => {
		const newMyBoard = GameBoard();
		newMyBoard.getRandomShips();
		setMyBoard( newMyBoard );
		const newEnemyBoard = GameBoard();
		newEnemyBoard.getRandomShips();
		setEnemyBoard( newEnemyBoard );
		setIsPlaying( True );
	}
	return (
		<div id="Game">
			<Board 
			id="my-board" 
			className="board"
			onClick = {this.onDrop}
			ships = {myBoard.ships}
			/>

			<Board 
			id="enemy-board" 
			className="board"
			onClick = {this.handleAttack}
			ships = {enemyBoard.ships}
			/>
			
			<button
			id="start-button"
			onClick = {startGame}
			>
			{isPlaying ? 'Reset' : 'Start'}
			</button>
		</div>	
	);
}
export const ItemTypes = {
	SHIP: 'ship'
  }
export default Game;