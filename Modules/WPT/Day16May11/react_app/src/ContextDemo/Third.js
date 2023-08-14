import { FriendsContext } from "./FriendsContext.js";

function Third() {
	return (
		<div class="border">
			This is third component
			<ol>
				<FriendsContext.Consumer>
					{(value) => value.friends.map(item => <li>{item}</li>)}
				</FriendsContext.Consumer>
			</ol>
		</div>
	);
}
export default Third;
