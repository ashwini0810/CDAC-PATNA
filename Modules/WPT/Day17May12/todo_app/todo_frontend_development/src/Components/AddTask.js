import {useState} from "react"
function AddTask(props) {
	const [msg, setMsg] = useState("")
	const saveTask = function (event) {
		event.preventDefault();
		var data = {
			taskName: event.target.taskName.value,
			taskEndTime: event.target.taskEndTime.value,
			createdBy: event.target.createdBy.value,
			priority: event.target.priority.value,
		};
		fetch("/task", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setMsg(data.msg)
				props.fetchTasks()
				setTimeout(()=>{
					setMsg("")
				},5000)
			})
			.catch((err) => console.log(err));
	};
	return (
		<div className="col-4 bg-white p-4 rounded">
			<form onSubmit={saveTask}>
				<div className="text-end">
					<span
						className="fs-4 text-muted"
						onClick={() => {
							props.setShowNewTask(false);
						}}
					>
						<i class="bi bi-x-lg"></i>
					</span>
				</div>
				<div className="text-center">
					<span className="text-success">{msg}</span>
				</div>
				<div className="mb-3">
					<label className="form-label">Task Name</label>
					<input
						type="text"
						className="form-control from-control from-control-sm"
						name="taskName"
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">End Time</label>
					<input
						type="datetime-local"
						className="form-control from-control from-control-sm"
						name="taskEndTime"
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Your Name</label>
					<input
						type="text"
						className="form-control from-control from-control-sm"
						name="createdBy"
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Priority</label>
					<select
						className="form-select form-select-sm"
						name="priority"
					>
						<option value="normal" selected>
							Normal
						</option>
						<option value="high">High</option>
						<option value="medium">Medium</option>
						<option value="low">Low</option>
					</select>
				</div>
				<div className="text-center">
					<button className="btn btn-outline-primary btn-sm px-5">
						Save
					</button>
				</div>
			</form>
		</div>
	);
}

export default AddTask;
