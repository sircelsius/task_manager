import React from 'react';
import ToDoList from './ToDoList.js';


class App extends React.Component {

	constructor(){
		super();
	}

	render() {
        return (
        	<div class="container">
        		<ToDoList />
            </div>
        );
    }
}

export default App;