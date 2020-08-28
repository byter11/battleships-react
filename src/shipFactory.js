
export default const shipFactory = (start,length) => {
	const shipTiles = Array(length);
	const isVertical = Math.random() > 0.5;
	const coord = isVertical ? start/10 : start%10;
	const isReverse = coord + length > 11;
	const multiplier = isVertical ? isReverse ? (-10) : 10 : isReverse? -1 : 1
	shipTiles.fill().map( (_,i) => start+(i*multiplier) ) );
	
	const hit = (tile) => {
		
	}
	return shipTiles;
}