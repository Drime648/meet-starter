import React from 'react';
import './taskCard.css';
class TaskCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            load: false
        }
    }
    onDeleteClicked = () =>{
        fetch(process.env.REACT_APP_API_SITE + '/deleteTask', {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {'Content-Type': 'application/json'},
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({
                id: this.props.id,
                key: this.props.apikey,
                username: this.props.username
            })
        }).then(response =>{
            return response.json();
        })
        .then(data =>{
            if(data === 'success'){
                this.setState({load: false});
                this.props.onRouteChange('loading');
            }
        })
        this.setState({load: true})
      

    }



    render(){
        return (
            <div>
            {this.state.load
            ? <p></p>
            :
                    <li className = "pointer">
                        <span onClick = {() => this.onDeleteClicked()} className = " measure center white hover-white dib br3 pa3 ma2 bw2 shadow-5">
                            <p>{this.props.name}</p>
                        </span>
                    </li >
    }
            <br></br>
            </div>
        );

    }

}

export default TaskCard;
