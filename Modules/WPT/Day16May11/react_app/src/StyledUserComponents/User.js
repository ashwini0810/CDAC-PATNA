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
		<div className="col-4 shadow text-white p-5">
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label className="from-label">Enter name:</label> 
					<input type="text" className="form-control from-control-sm" name="name" />	
				</div>
				<div className="mb-3">
					<label className="from-label">Enter Dob:</label>
					<input type="date" name="dob" className="form-control from-control-sm" />
				</div>
				<div className="mb-3">
					<label className="from-label">Gender:</label>
					<input type="radio" name="gender" value="male" /> Male
					<input type="radio" name="gender" value="female" /> female
					<input type="radio" name="gender" value="Others" /> Others
				</div>
				<div className="mb-3">
					<label className="from-label">Language:</label>
					<input type="checkbox" name="lang" value="C" /> C
					<input type="checkbox" name="lang" value="python" /> Python
					<input type="checkbox" name="lang" value="Nodejs" /> Nodejs
				</div>
				<div className="mb-3 text-center">
					<button className="btn btn-outline-light btn-sm">Save</button>	
				</div>
				
			</form>
		</div>
	);
}

export default User;
