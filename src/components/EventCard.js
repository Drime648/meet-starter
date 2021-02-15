import React from 'react';
import './EventCard.css';
import DeleteButton from './deleteButton.png';


class EventCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            load: false
        }
    }
    onDeleteClicked = () =>{
        fetch('https://mighty-river-01892.herokuapp.com/deleteEvent', {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {'Content-Type': 'application/json'},
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({
                id: this.props.id
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
            : <article className =" grow br2 ba dark-gray b--black-10 mv4  w-25-l mw5 center grow">
            
                <div id = "parent" className = 'bg-light-blue dib br3 pa3 ma2 bw2 shadow-5 tc'>
                    <div id = "wide">
                        <h2> {this.props.title} </h2>
                        <p> {this.props.actionTime} </p>
                        <p>password: {this.props.password}</p>
                    </div>
                    <div id = "narrow">
                        <img alt = 'deleteButton' src = {DeleteButton} onClick = {() => this.onDeleteClicked()}/>
                    </div>
                </div>
            </article>  
            }
            </div>
        );

    }

}

export default EventCard;
