import React from 'react';

const Card = (props) => (
	<div key={props.id} className="" onClick="">
		<img alt={props.name} src={props.image} />
	</div>
);

export default Card;
