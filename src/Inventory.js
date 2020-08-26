import React from 'react';
import Ship from './Ship.js';
import "./Inventory.css";

export default function Inventory(){
    const SHIP_LENGTHS = ['2em','4em','4em','6em'];
    
    const ships = SHIP_LENGTHS.map(function(_,i){
        return <Ship length={SHIP_LENGTHS[i]} isVertical={false} />
    });

    return (
        <div className="inventory">
            {ships}
        </div>
    )
}