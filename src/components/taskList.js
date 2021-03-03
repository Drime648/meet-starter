import React from 'react';
import TaskCard from './TaskCard';

const taskList = ({tasks, onRouteChange, apikey, username}) => {
	const cardComp = tasks.map(task =>{
		return <TaskCard key = {task.id} id = {task.id} name = {task.name} onRouteChange = {onRouteChange} apikey = {apikey} username = {username}/>
	});
	return(
		<div>
			{cardComp}
		</div>
	);
}

export default taskList;