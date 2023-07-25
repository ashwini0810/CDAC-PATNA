function TaskItem(props) {
	const deleteTask = function (event) {
		// create delete task request here
		fetch("/task", {
			method: "delete",
			body: JSON.stringify(props.task),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
				props.fetchTasks()
			})
			.catch((err) => console.log(err));
	};
	return (
		<li className="list-group-item list-group-item-action list-group-item-secondary">
			<div className="d-flex justify-content-between align-items-start">
				<div className="lh-sm">
					<div className="fw-bold">{props.task.taskName}</div>
					<small className="text-muted">{props.task.createdBy}</small>
				</div>
				<div className="d-flex align-items-center">
					<div className="lh-sm text-end ">
						<small className="text-muted">
							{props.task.taskEndTime}
						</small>
						<br />
						<span className="badge rounded-pill bg-primary">
							{props.task.priority}
						</span>
					</div>
					<div className="ms-4">
						<button
							className="btn btn-outline-primary btn-sm"
							onClick={deleteTask}
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</li>
	);
}

export default TaskItem;
