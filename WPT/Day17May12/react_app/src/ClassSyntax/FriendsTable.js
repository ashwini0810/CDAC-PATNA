import { Component } from "react";

class FriendsTable extends Component {
	constructor(props) {
		super();
	}
	render() {
		return (
			<ol>
				{this.props.friends.map((item) => (
					<li>{item}</li>
				))}
			</ol>
		);
	}
}

export default FriendsTable


