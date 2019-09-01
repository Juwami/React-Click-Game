import React from 'react';
import Card from './Card';

const Board = props => (
    <div>
        {props.Starlet.map(starlet => <Card key={starlet.id} id={starlet.id} name={starlet.name} img={starlet.image} Clicked={props.Clicked} />)}
    </div>
)

export default Board