import React from 'react';
import "./Ship.css";
import {ItemTypes} from './Game.js';
import { useDrag } from 'react-dnd';

export default function Ship ({length, isVertical}) {

    const [{isDragging}, drag] = useDrag({
        item: { type: ItemTypes.SHIP },
        collect: monitor => ({
          isDragging: !!monitor.isDragging(),
        }),
      })

    return (
        <div 
            ref={drag} 
            className="ship"
            style={{
                width: length,
                opacity: isDragging ? 0.5: 1,
            }}
            >
        </div>
    );
}