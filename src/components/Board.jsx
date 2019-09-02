import React from 'react';
import Card from './Card';
import '../styles/Board.css'

const Board = props => (
    <div class="container">
        {props.Starlet.map(starlet => <Card key={starlet.id} id={starlet.id} name={starlet.name} image={starlet.image} Clicked={props.Clicked} />)}
    </div>
)

export default Board