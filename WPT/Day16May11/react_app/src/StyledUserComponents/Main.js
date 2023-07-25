import { useState } from "react";
import User from "./User.js";
import UserTable from "./UserTable";

function Main() {
	const [users, setUsers] = useState([]);

	const saveUser = function (data) {
		setUsers([...users, data]);
	};

	return (
		<div className="container-fluid">
			<div className="row justify-content-evenly align-items-center " style={{height: "100vh"}}>
				<User saveUser={saveUser} />
				<UserTable users={users} />
			</div>
		</div>
	);
}
export default Main;
