import React from 'react';

const Scoreboard = (props) => (
	<div>
		<ul class="nav nav-fill bg-dark">
			<li class="nav-item text-white display-4">Current Score: {props.Score}</li>
			<li class="nav-item text-white display-4">High Score: {props.highScore}</li>
		</ul>
	</div>
);

export default Scoreboard;
