import React from 'react';


const Scroll = (props) =>{
	return (
		<div className = "center scroll" style = {{overflowY: 'scroll', border: '1px solid black', height: '550px', width: '500px' }}>
			{props.children}
		</div>

	)
}

export default Scroll;