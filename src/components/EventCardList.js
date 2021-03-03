import React from 'react';
import EventCard from './EventCard';

const EventCardList = ({events, onRouteChange, apikey, username}) => {
	const cardComp = events.map(event =>{
		return <EventCard key = {event.id} id = {event.id} title = {event.title} actionTime = {event.actiontime} password = {event.password} onRouteChange = {onRouteChange} 
				url = {event.url} apikey = {apikey} username = {username}/>
	});
	return(
		<div>
			{cardComp}
		</div>
	);
}

export default EventCardList;