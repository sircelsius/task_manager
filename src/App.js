import React from 'react';
import ListInput from './listInput';
import ListItem from './listItem';


class App extends React.Component {
	constructor(){
		super();
		this.state = {
		};
	}

	render() {
        return (
        	<div class="container">
            	<h1>My First To Do App</h1>
            	<ListInput />
            	<ListItem />
            </div>
        );
    }
}

export default App;