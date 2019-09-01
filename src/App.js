import React, { Component } from 'react';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Starlet from './data/Starlet.json';
import Board from './components/Board'

class App extends Component {
	state = {
		Score: 0,
		highScore: 0
	};
	render() {
		return (
			<div>
				<Header />
				<Scoreboard Score={this.state.Score} highScore={this.state.highScore} />
				<Board Starlet={this.state.Starlet} Clicked={this.Clicked} />
			</div>
		);
	}
}

export default App;
