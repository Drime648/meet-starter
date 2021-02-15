import React from 'react';

class Loading extends React.Component { 
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.timerID = setInterval(() => this.onTick(), 2000);
    }

    onTick = () => {
        this.props.onRouteChange('home');
    }
    render(){

        return (
            <h2>Loading...</h2>
        );
    }
}

export default Loading;