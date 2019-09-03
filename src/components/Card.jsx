import React from 'react';
import '../styles/Card.css'

const Card = (props) => (
	<div id="starletCard" className="m-2" key={props.id}>
		<img className="rounded-circle" id={props.id} alt={props.name} src={props.image} onClick={() => props.clicked(props.id)}/>
	</div>
);

export default Card;
