import TaskItem from "./TaskItem";
import { useState, useEffect } from "react";

function TaskList(props) {
	

	// useEffect(()=>{}) //Call function in each render means every re-render also
	// useEffect(()=>{},[]) // call function on first render only after mount
	// useEffect(()=>{}, [VARIABLE]) // call function when variable changes

	useEffect(() => {
		props.fetchTasks();
	}, []);

	return (
		<div className="col-6 text-white">
			<div className="text-end">
				{props.showNewTask ? (
					""
				) : (
					<button
						className="btn btn-primary btn-sm"
						onClick={() => {
							props.setShowNewTask(true);
						}}
					>
						New task
					</button>
				)}
			</div>
			<div className="list-group">
				{props.tasks.map((task) => (
					<TaskItem key={task.id} task={task} fetchTasks={props.fetchTasks} />
				))}
			</div>
		</div>
	);
}
export default TaskList;
