import Third from "./Third";
import {useContext} from "react"
import {FriendsContext} from "./FriendsContext"

function First() {

	const {saveFriends} = useContext(FriendsContext)

	const handleSubmit = function(event){
		event.preventDefault()
		var name = event.target.name.value
		saveFriends(name)
	}
	
	return (
		<div className="border border-success">
		This is First Component
			<form onSubmit = {handleSubmit}>
				Enter name : <input type="text" name="name"/>
				<button>Add to list</button>
			</form>
			<Third />
		</div>
	);
}

export default First;
