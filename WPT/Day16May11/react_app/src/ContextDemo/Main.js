import First from "./First";
import Second from "./Second";
import { useState } from "react";
import { FriendsContext } from "./FriendsContext.js";

function Main() {
	const [friends, setFriends] = useState([]);
	const saveFriends = function(data){
		setFriends([...friends, data])
	}

	return (
		<FriendsContext.Provider value={{friends,saveFriends}}>
			<div className="border border-dark">
				This is Main Component
				<First />
				<Second />
			</div>
		</FriendsContext.Provider>
	);
}

export default Main;
