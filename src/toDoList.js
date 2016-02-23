import React from 'react';
import ListInput from './listInput';
import ListItem from './listItem';

class ToDoList extends React.Component {

	constructor(){
		super();
		this.state = {
			items: ["Call my mom", "Do the groceries", "Find my cat", "Finish my homework"]
		};
	}

	onChangeDestroy(item){

		this.state.items.splice(item, 1);

		this.setState({
			items: this.state.items
		});
	}

	onMarkDone(index){
		var items = this.state.items;
   		var item = this.state.items[index];
   		console.log(item);
	}

	renderItems(item){
		return <ListItem itemname={item} onChange={this.onChangeDestroy.bind(this)} onMark={this.onMarkDone.bind(this)}/>;
	}

	onAddListItem(item) {
		var newItem = item;
		var newItems = this.state.items.concat(newItem);
		this.setState({
			items: newItems
		});
	}

	render() {
        return (
        	<div>
        	<h1>My First To Do App</h1>
            	<ListInput onSubmit={this.onAddListItem.bind(this)} />
            	<div>{this.state.items.map(this.renderItems.bind(this))}</div>
            </div>
        );
	}
}

export default ToDoList;