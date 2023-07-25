import { useState } from "react";
function Register() {
	const [users, setUsers] = useState([]); // store user objects

	const [username, setUsername] = useState("");
	const [dob, setDob] = useState("");
	const [gender, setGender] = useState("")
	const [phone, setPhone] = useState("")

	const handleUsernameChange = function (event) {
		setUsername(event.target.value);
	};

	const handleClick = function (event) {
		setUsers([
			...users,
			{
				username: username,
				dob: dob,
				gender: gender,
				phone : phone
			},
		]);
	};

	const handleGender = function(event){
		if(event.target.checked){
			setGender(event.target.value)
		}
	}

	const handlePhone = function(event){
		let text = event.target.value
		if(!isNaN(text) && text.length < 11){
			setPhone(text)
		}
	}


	return (
		<div>
			Enter name :
			<input
				type="text"
				name="name"
				value={username}
				onChange={handleUsernameChange}
			/>
			<br />
			Enter dob :
			<input
				type="date"
				name="dob"
				value={dob}
				onChange={(event) => {
					setDob(event.target.value);
				}}
			/>
			<br/>
			Gender: 
				<input type="radio" name="gender" value="male" onChange={handleGender}/> Male
				<input type="radio" name="gender" value="Female" onChange={handleGender}/> Female
				<input type="radio" name="gender" value="Others" onChange={handleGender}/> Others
			<br />
			<br/>
			Phone : <input type="text" value={phone} onChange={handlePhone}/>
			<br/>
			<button onClick={handleClick}>Save</button>
			<table border="1">
				<thead>
					<tr>
						<th>Name</th>
						<th>Dob</th>
						<th>Gender</th>
					</tr>
				</thead>
				<tbody>
					{users.map((item) => {
						return (
							<tr>
								<td>{item.username}</td>
								<td>{item.dob}</td>
								<td>{item.gender}</td>
								<td>{item.phone}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
export default Register;
