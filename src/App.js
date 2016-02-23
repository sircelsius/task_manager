import React from 'react';
import Counter from './Counter';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			message: "there are no scores.",
			players: ["Wouter", "Rory", "Andrew"]
		};
	}

	onScoreChanged(player, score){

		this.setState({
			message: player + " scored, and now has " + score
		});
	}

	renderPlayer(player) {
		return <Player name={player} onChange={this.onScoreChanged.bind(this)} />;
	}

	onAddPlayer(playerName){
		var currentPlayers = this.state.players;
		var newPlayers = currentPlayers.concat(playerName);
		this.setState({
			players: newPlayers
		});
	}



    render() {
        return (
        	<div>
            	<h1>Hello World!</h1>
            	<table>
            		<tbody>
            			{this.state.players.map(this.renderPlayer.bind(this))}
            		</tbody>
            	</table>
            	{this.state.message}
            	<AddPlayerForm onSubmit={this.onAddPlayer.bind(this)}/>
            </div>
        );
    }
}

export default App;