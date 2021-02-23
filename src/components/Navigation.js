import React from 'react';
import './Navigation.css';

class Navigation extends React.Component {
    constructor(props){
        super(props);
    }
    reset = () =>{
        this.props.setUser('');
        this.props.onRouteChange('signin');
    }

    render(){
        return (
            <nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick = {this.reset} 
                    className = ' big grow f2 link pr4 underline shadow-1 dim black underline pa5 pointer'>Sign Out</p>
            </nav>
        );

    }

}

export default Navigation;