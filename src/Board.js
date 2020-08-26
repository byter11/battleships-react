import React from 'react';

function Board(props){
	let tiles = []
	for(let i=0;i<100;i++)
		tiles.push(<Tile key={i} id={i}/>)
	return (<div id="board">
				{tiles}
			</div>);
}

function Tile(props){
	return(
		<button id={"tile-"+props.id} className="tile"></button>
	)
}

export default Board;