import React from 'react';
import Board from './Board.js'


class Game extends React.Component{

	onDrop = () => {

	}
	handleAttack = () => {
		
	}
	render(){
		return (
			<div id="Game">
				<Board 
				id="my-board" 
				className="board"
				onDrop = {this.onDrop}
				/>

				<Board 
				id="enemy-board" 
				className="board"
				handleAttack = {this.handleAttack}
				/>
			</div>
		);
	}
}
export const ItemTypes = {
	SHIP: 'ship'
  }
export default Game;