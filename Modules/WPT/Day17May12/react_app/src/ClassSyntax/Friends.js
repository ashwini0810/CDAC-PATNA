import {Component} from "react"
import FriendsTable from "./FriendsTable"

//Here class name is component name
class Friends extends Component{
	constructor(){
		super() // Must call it
		//Here this.state is the state and create object and propeties of object are states
		this.state = {
			friends : []
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		//Here binding the this scope
	}
	handleSubmit(event){
		event.preventDefault()
		var name = event.target.name.value
		//setState function is used to set the state
		//Assign value and re-render
		//this.setState({property: New_Value})
		this.setState({friends: [...this.state.friends, name]})
	}

	componentDidMount(){
		//write code to fetch data from server
	}
	compnentWillUnmount(){
		
	}

	render(){
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					Enter name : <input type="text" name="name" />
					<button>Add to list</button>
				</form>
				<FriendsTable friends={this.state.friends}/>
			</div>
		)
	}
}

export default Friends

//Mounting : Load component and rendering
/*
	constructor()
	getDerivedStateFromProps()
	render()
	componentDidMount()
*/
//Update : Re-render component
/*
	getDeriedStateFromProps()
	shouldComponentUpdate() -> called just before re-render
	render()
	getSnapshotBeforeUpdate()
	componentDidUpdate()
*/
//Unmount : Destroy the component
/*
	componentWillUnmount()
*/