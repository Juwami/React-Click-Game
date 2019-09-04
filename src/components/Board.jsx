import React from 'react';
import Card from './Card';
import '../styles/Board.css';

const Board = (props) => (
	<div id="gameBoard" className="container mt-4 p-0">
		{props.Starlet.map((starlet) => (
			<Card key={starlet.id} id={starlet.id} name={starlet.name} image={starlet.image} clicked={props.Clicked} />
		))}
		{/* {console.log(props.Clicked)}   */}
	</div>
);

export default Board;
