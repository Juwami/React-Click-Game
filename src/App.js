import React, { Component } from 'react';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';

class App extends Component {
  state = {
    Score: 0,
    highScore: 0
  }
	render() {
		return (
			<div>
				<Header />
				<Scoreboard Score={this.state.Score} highScore={this.state.highScore}/>
				{/* <Buddy /> */}
			</div>
		);
	}
}

export default App;
