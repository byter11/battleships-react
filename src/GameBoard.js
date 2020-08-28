import shipFactory from './shipFactory.js';

export default const gameBoard = () => {
	const ships = [];
	const shipSizes = [1,3,3,4,5];
	
	const getRandomShip = (size) =>{
		const start = Math.floor( Math.random() * 100 );
		const newShip = shipFactory(start, size);
		if ( ships.some( ship => newShip.includes(ship) ) )
			return getRandomShip(size);
		
		return newShip;
	}
	
	const getRandomShips = () =>{
		for(let i=0; i < shipSizes.length; i++)
			ships.push( getRandomShip( shipSizes[i] ) );
	}
	const getTiles(ships){
		
	}
	return {ships,getRandomShips};
}