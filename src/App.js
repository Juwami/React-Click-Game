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

	newGame = () => {
		this.setState({
			Score: 0,
			Starlet: this.shuffleArray(this.state.Starlet),
			clickArr: [],
		});
	};

	checkWin = () => {
		if (this.state.highScore === 20) {
			alert("You Win!");
			window.reload();
		}
		else {
			console.log("Return")
			return;
		}
	}

	componentDidMount() {
		this.setState({ Starlet: this.shuffleArray(this.state.Starlet) });
	}

	imagedClicked = (id) => {
		// console.log(this.state.clickArr.find((x) => x === id));
		if (this.state.clickArr.find((x) => x === id)) {
			this.newGame();
		} else {
			if (this.state.Score < this.state.highScore) {
				this.setState({
					clickArr: [ ...this.state.clickArr, id ],
					Score: this.state.Score + 1,
					Starlet: this.shuffleArray(this.state.Starlet)
				});
			}
			else {
				this.setState({
					clickArr: [ ...this.state.clickArr, id ],
					Score: this.state.Score + 1,
					highScore: this.state.highScore + 1,
					Starlet: this.shuffleArray(this.state.Starlet)
				});
				this.checkWin();
			}
		}
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
