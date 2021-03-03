import React from 'react';
import TaskCard from './TaskCard';

const taskList = ({tasks, onRouteChange, apikey}) => {
	const cardComp = tasks.map(task =>{
		return <TaskCard key = {task.id} id = {task.id} name = {task.name} onRouteChange = {onRouteChange} apikey = {apikey}/>
	});
	return(
		<div>
			{cardComp}
		</div>
	);
}

export default taskList;