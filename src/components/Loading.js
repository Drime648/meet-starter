import React from 'react';

class Loading extends React.Component { 
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.onRouteChange('home');
    }
    render(){

        return (
            <h2>Loading...</h2>
        );
    }
}

export default Loading;