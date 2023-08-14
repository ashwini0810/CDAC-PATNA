import { useContext } from "react";
import { FriendsContext } from "./FriendsContext.js";

function Fourth() {
	var {friends} = useContext(FriendsContext);

	return (
		<div className="border">
			This is Fourth component
			<ol>
				{friends.map((item) => (
					<li>{item}</li>
				))}
			</ol>
		</div>
	);
}
export default Fourth;
