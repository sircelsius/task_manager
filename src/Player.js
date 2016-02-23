import React from 'react'

class Player extends React.Component {
	constructor(){
		super();

		this.state = {
			score: 0,
			prize: ""
		};

	}


	plusOne(event){
		event.preventDefault();

		function checkWinner(score) {
			var trophy = "https://d13yacurqjgara.cloudfront.net/users/647854/screenshots/1744226/trophy.png";
			
			if (score > 9) {
				return trophy
			};
		}

		var newState = {
			score: this.state.score +1,
			prize: checkWinner(this.state.score +1)
		};


		this.props.onChange(this.props.name, newState.score);

		this.setState(newState);

	}


	render(){
		return(
			<tr>
				<td>{this.props.name}</td>
				<td>{this.state.score}</td>
				<td><button onClick={this.plusOne.bind(this)}>+1</button></td>
				<td><img src={this.state.prize} width="50px" height="30px"/></td>
			</tr>
		);
	}
}

export default Player;