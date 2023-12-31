import "./Styles.css"


function User(props) {
	const handleSubmit = function (event) {
		event.preventDefault();
		var temp = {
			name: event.target.name.value,
			dob: event.target.dob.value,
			gender: event.target.gender.value,
			lang: [...event.target.lang]
				.filter((item) => item.checked)
				.map((ele) => ele.value),
		};
		props.saveUser(temp);
	};

	return (
		<div style={{backgroundColor: "yellow", border: "1px solid black"}}>
			<form onSubmit={handleSubmit}>
				Enter name: <input type="text" name="name" />
				<br />
				Enter Dob: <input type="date" name="dob" />
				<br />
				Gender: <input type="radio" name="gender" value="male" />
				Male
				<input type="radio" name="gender" value="female" />
				female
				<input type="radio" name="gender" value="Others" />
				Others
				<br />
				Language:
				<input type="checkbox" name="lang" value="C" />C
				<input type="checkbox" name="lang" value="python" />
				Python
				<input type="checkbox" name="lang" value="Nodejs" />
				Nodejs
				<br />
				<button className="mybtn">Save</button>
			</form>
		</div>
	);
}

export default User;
