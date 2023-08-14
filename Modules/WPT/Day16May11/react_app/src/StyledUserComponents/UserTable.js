function UserTable(props) {
	return props.users.length > 0 ? (
		<div className="col-6">
			<table className="table table-hover table-stripped">
				<thead className="table-light">
					<tr>
						<th>Name</th>
						<th>Dob</th>
						<th>Gender</th>
						<th>Language</th>
					</tr>
				</thead>
				<tbody className="text-white">
					{props.users.map((item) => (
						<tr>
							<td>{item.name}</td>
							<td>{item.dob}</td>
							<td>{item.gender}</td>
							<td>{item.lang}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	) : (
		""
	);
}

export default UserTable;
