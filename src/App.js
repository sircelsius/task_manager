import React from 'react';
import ListInput from './listInput';
import ListItem from './listItem';


class App extends React.Component {
	constructor(){
		super();
		this.state = {
			items: ["Todo 1", "Todo"]
		};
	}

	onAddListItem(item) {
		this.setState({
			item: item
		});
	}

	render() {
        return (
        	<div class="container">
            	<h1>My First To Do App</h1>
            	<ListInput onSubmit={this.onAddListItem.bind(this)} />
            	<ListItem />
            	<div>{this.state.item}</div>
            </div>
        );
    }
}

export default App;