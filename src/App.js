import React, { Component } from 'react';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Starlet from './data/Starlet.json';
import Board from './components/Board';

class App extends Component {
	state = {
		Score: 0,
		highScore: 0,
		Starlet,
		clickArr: []
	};

	shuffleArray = (Starlet) => {
		for (let i = Starlet.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const k = Starlet[i];
			Starlet[i] = Starlet[j];
			Starlet[j] = k;
		}
		return Starlet;
	};

	componentDidMount() {
		this.setState({ Starlet: this.shuffleArray(this.state.Starlet) });
	}

	imagedClicked = (id) => {
		console.log(this.state.clickArr.find(x => x === id));

		this.setState({
			clickArr: [ ...this.state.clickArr, id ],
			Score: this.state.newScore,
			highScore: this.state.newHighScore,
			Starlet: this.shuffleArray(this.state.Starlet)
		});
	};
	render() {
		return (
			<div>
				<Header />
				<Scoreboard Score={this.state.Score} highScore={this.state.highScore} />
				<Board Starlet={this.state.Starlet} Clicked={this.imagedClicked} />
			</div>
		);
	}
}

export default App;
