import React, {useState} from 'react';
import Ship from './Ship.js';
function Board(props){
  
  const getshipIndexes = () => {
    console.log('getship');
    let shipIndexes = [];
    const shipSizes = [1,3,3,4,5];
    for(let i=0; i<5; i++){
      const index = Math.floor( Math.random() * 100);
      const isVertical = Math.random() > 0.5;
      const coord = isVertical ? index/10 : index%10;
      const isReverse = coord + shipSizes[i] > 11;
      const multiplier = isVertical ? isReverse ? (-10) : 10 : isReverse? -1 : 1
      const indexes = Array.from(Array(shipSizes[i]).fill().map( (_,i) => index+(i*multiplier)));
      console.log(i+ ' ' + index + ' ' + indexes)
      if(indexes.some( i => shipIndexes.includes(i)) ){
        i--;
        console.log(shipIndexes + ' includes ' + indexes);
        continue;
      }
      shipIndexes.push(...indexes);
    }
    console.log('final ' + shipIndexes)
    return shipIndexes;
  }
  
  
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