import React, {useState} from 'react';
import Ship from './Ship.js';

function Board(props){  
  
  
  const getTiles = (ships) =>{
    let tiles = [];
    for(let i=0; i<100; i++){
      if (!ships.includes(i))
        tiles.push(<Tile
		          key={i}
		          />)
		  else
		    tiles.push(<Ship
		                  
		                  />);
    }
    return tiles;
  }
  const randomize = () =>{
    const ships = getshipIndexes();
    const tiles = getTiles(ships);
    setTiles(tiles);
  }
	const [tiles, setTiles] = useState(getTiles(getshipIndexes()));
	return (
	      <div>
	        <div className="board">
	        {tiles}
		  		</div>
			  	<button onClick={randomize} style={{height: '20px', border: '1px solid black'}} ></button>
			  </div>);
}

function Tile(props){
	return(
		<button 
		className="tile"
	
		>
		</button>
	)
}

export default Board;