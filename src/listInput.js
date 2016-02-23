import React from 'react';

class ListInput extends React.Component {
	constructor() {
		super();
	}

	onSubmitForm(event){
		event.preventDefault();

		this.props.onSubmit(this.refs.todoItem.value);
	}

	render() {
		return (
			<section>
				<form onSubmit={this.onSubmitForm.bind(this)}>
				<input ref="todoItem" />
				<button>Add</button>
				</form>
			</section>
		);
	}
}

export default ListInput;