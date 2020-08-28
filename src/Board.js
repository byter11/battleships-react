import React, {useState} from 'react';

function Board(props){
  const getshipIndexes = () => {
    let tiles = [];
    let shipIndexes = [];
    const shipSizes = [1,3,3,4,5];
    for(let i=0; i<5; i++){
      const index = Math.floor( Math.random() * 100);
      const isVertical = Math.random() > 0.5;
      const coord = isVertical ? index/10 : index%10;
      const isReverse = coord + shipSizes[i] > 10;
      const indexes = Array.from(Array(shipsizes[i]).fill().map( (_,i) => return i));
      if(indexes.some( i => shipIndexes.includes(i)) ){
        i--;
        continue;
      }
      shipIndexes.push(indexes);
    }
    return shipIndexes;
  }
  
  const getTiles = (ships) =>{
    let tiles = [];
    for(let i=0; i<100; i++){
      if (!ships.includes(i))
        tiles.push(<Tile
		          key={i}
		          onClick=props.handleClick/>)
		  else
		    tiles.push(<Ship
		                  
		                  />);
    }
    return tiles;
  }
	const tiles = useState(getTiles(getshipIndexes()));
	for(let i=0;i<100;i++)
		tiles.push(<Tile
		          key={i}
		          onClick=props.handleClick/>)
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