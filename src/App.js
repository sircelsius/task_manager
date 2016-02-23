import React from 'react';
import ListInput from './listInput';
import ListItem from './listItem';


class App extends React.Component {

	constructor(){
		super();
		this.state = {
			items: [{
        done: false,
        value: "Call my mom"
      }, {
        done: false,
        value: "Do the groceries"
      }, {
        done: true,
        value: "Find my cat"
      }, 
      {
        done: false,
        value: "Finish my homework"
      }]
		};
	}

	onChangeDestroy(item){

		this.state.items.splice(item, 1);

		this.setState({
			items: this.state.items
		});
	}

	onMarkDone(val){
		var items = this.state.items;
 		var item = this.state.items.find(function(element) {
      return element.value == val;
    });
   		
    if(item){
      item.done = true;
    }

    this.setState({
      items: this.state.items
    });
	}

	renderItems(item){
		return <ListItem itemname={item.value} done={item.done} onChange={this.onChangeDestroy.bind(this)} onMark={this.onMarkDone.bind(this)} key={item.value}/>;
	}

	onAddListItem(item) {
		var newItem = {
      done: false,
      value: item
    };
		var newItems = this.state.items.concat(newItem);
		this.setState({
			items: newItems
		});
	}

	render() {
        return (
        	<div class="container">
            	<h1>My First To Do App</h1>
            	<ListInput onSubmit={this.onAddListItem.bind(this)} />
            	<div>
                {this.state.items.map(this.renderItems.bind(this))}
              </div>
          </div>
        );
    }
}

export default App;