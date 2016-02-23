import React from 'react';

class ListItem extends React.Component {
	constructor() {
		super();

		this.state = {
			items: []
		};
	}

// passes the selected itemname to the app.js controller and calls the onchange function there
	destroy() {
		this.props.onChange(this.props.itemname);
	}

// passes the selected itemname to the app.js controller and calls the onMarkDone function
	markDone() {
		this.props.onMark(this.props.itemname);
	}

	render() {
		return (
			<div className={this.props.done ? 'text-success' : ''}>
				<p>{this.props.itemname}</p>
				<button className="btn btn-warning" onClick={this.destroy.bind(this)}>Delete</button>
				<button className="btn btn-success" onClick={this.markDone.bind(this)}>Mark done</button>
			</div>
		);
	}
}

export default ListItem;