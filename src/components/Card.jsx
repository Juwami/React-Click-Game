import React from 'react';
import '../styles/Card.css'

const Card = (props) => (
	<div id="starletCard" className="m-2" key={props.id} onClick="">
		<img className="rounded-circle" id={props.id} alt={props.name} src={props.image} />
	</div>
);

export default Card;
