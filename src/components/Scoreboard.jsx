import React from 'react';

const Scoreboard = (props) => (
	<div>
		<ul className="nav nav-fill bg-dark">
			<li className="nav-item text-white display-4">Current Score: {props.Score}</li>
			<li className="nav-item text-white display-4">High Score: {props.highScore}</li>
		</ul>
	</div>
);

export default Scoreboard;
