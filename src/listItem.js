import React from 'react';

class ListItem extends React.Component {
	constructor() {
		super();

		this.state = {
			items: []
		};
	}

	render() {
		return (
			<div class="row">
				<p>This is an item</p>
			</div>
		);
	}
}

export default ListItem;