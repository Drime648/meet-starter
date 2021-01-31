import React from 'react';

// const Navigation =({onRouteChange, setUser}) =>{ 


//     return (
//         <nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
//             <p onClick = {this.reset} 
//                 className = ' grow f1 link dim black underline pa3 pointer'>Sign Out</p>
//         </nav>

//     );
// }

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
                    className = ' grow f1 link dim black underline pa3 pointer'>Sign Out</p>
            </nav>
        );

    }

}

export default Navigation;