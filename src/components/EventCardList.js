import React from 'react';
import EventCard from './EventCard';

const EventCardList = ({events, onRouteChange}) => {
	const cardComp = events.map(event =>{
		return <EventCard key = {event.id} id = {event.id} title = {event.title} actionTime = {event.actiontime} password = {event.password} onRouteChange = {onRouteChange} 
				url = {event.url}/>
	});
	return(
		<div>
			{cardComp}
		</div>
	);
}

export default EventCardList;