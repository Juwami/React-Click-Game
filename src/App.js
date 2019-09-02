import React, { Component } from 'react';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Starlet from './data/Starlet.json';
import Board from './components/Board'

class App extends Component {
	state = {
		Score: 0,
		highScore: 0,
		Starlet
	};

	shuffleArray = Starlet => {
		for ( i = Starlet.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			const k = Starlet[i];
			Starlet[i] = Starlet[j];
			Starlet[j] = k
		}
		return Starlet
	}
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
