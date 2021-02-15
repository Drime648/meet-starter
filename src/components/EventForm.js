import React from 'react';
import './EventForm.css';
import BackButton from './backButton.png';

class EventForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            url: '',
            launchTime: '',
            password: '',
            mon: false,
            tue: false,
            wed: false,
            thu: false,
            fri: false,
            sat: false,
            sun: false,
            load: false

            

        }
    }

    onSubmitPress =() =>{
        console.log('done');
    }

    onTitleChange = (event) => {
        this.setState({title: event.target.value})
    }

    onUrlChange = (event) => {
        this.setState({url: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onTimeChange =(event) => {
        this.setState({launchTime: event.target.value})
    }

    onMonChange = () => {
        this.setState({mon: !this.state.mon})
    }

    onTueChange = () => {
        this.setState({tue: !this.state.tue})
    }

    onWedChange = () => {
        this.setState({wed: !this.state.wed})
    }

    onThuChange = () => {
        this.setState({thu: !this.state.thu})
    }

    onFriChange = () => {
        this.setState({fri: !this.state.fri})
    }

    onSatChange = () => {
        this.setState({sat: !this.state.sat})
    }

    onSunChange = () => {
        this.setState({sun: !this.state.sun})
    }

    onSubmitPress =() => {
        if(this.state.launchTime != ''){
            fetch('https://mighty-river-01892.herokuapp.com/addEvent', {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {'Content-Type': 'application/json'},
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify({
                    userName: this.props.userName,
                    title: this.state.title,
                    url: this.state.url,
                    actionTime: this.state.launchTime,
                    password: this.state.password,
                    mon: this.state.mon,
                    tue: this.state.tue,
                    wed: this.state.wed,
                    thu: this.state.thu,
                    fri: this.state.fri,
                    sat: this.state.sat,
                    sun: this.state.sun

                })
            })
            .then(response =>{
                return response.json();
            })
            .then(data => {
                if(data === 'success'){
                    this.setState({load: false});
                    this.props.onRouteChange('loading');
                }
            })
            .catch(err => console.log(err));

            this.setState({load: true});
        }
    }

    onBackClicked = () => {
        this.props.onRouteChange('home');
    }









    render(){
        
        return(
            <div>
                {this.state.load
                    ?<p></p>
                    :<main className="pa4 black-80">
                        <img alt = 'backButton' src = {BackButton} onClick = {() => this.onBackClicked()}/>

                        <form className="measure center">
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="title">Class Name</label>
                                <input 
                                onChange = {this.onTitleChange}
                                className="b pa2 input-reset ba bg-transparent w-100" 
                                type="text"
                                name="title"  
                                id="title"/>
                            </div>


                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="url">Meeting URL</label>
                                <input 
                                onChange = {this.onUrlChange}
                                className="b pa2 input-reset ba bg-transparent w-100" 
                                type="url"
                                name="url"  
                                id="url"/>
                                
                            </div>

                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Meeting Password</label>
                                <input 
                                onChange = {this.onPasswordChange}
                                className="b pa2 input-reset ba bg-transparent w-100" 
                                type="text"
                                name="password"  
                                id="password"/>
                                
                            </div>

                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="launch time">meeting launch time</label>
                                <input 
                                onChange = {this.onTimeChange}
                                className="b pa2 input-reset ba bg-transparent w-100" 
                                type="time"
                                name="launch time"  
                                id="launch time"/>
                            </div>

                            <div>
                                <div className="pa4">
                                    <fieldset id="favorite_movies" className="bn">
                                        <legend className="fw7 mb2">Days</legend>
                                        <div className="flex items-center mb2">
                                        <input className="mr2" type="checkbox" id="monday" value="monday" onClick = {() => this.onMonChange()}/>
                                        <label htmlFor="monday" className="lh-copy">Monday</label>
                                        </div>
                                        <div className="flex items-center mb2">
                                        <input className="mr2" type="checkbox" id="tuesday" value="tuesday" onClick = {() => this.onTueChange()}/>
                                        <label htmlFor="tuesday" className="lh-copy">Tuesday</label>
                                        </div>
                                        <div className="flex items-center mb2">
                                        <input className="mr2" type="checkbox" id="wednesday" value="wednesday" onClick = {() => this.onWedChange()}/>
                                        <label htmlFor="wednesday" className="lh-copy">Wednesday</label>
                                        </div>
                                        <div className="flex items-center mb2">
                                        <input className="mr2" type="checkbox" id="thursday" value="thursday" onClick = {() => this.onThuChange()}/>
                                        <label htmlFor="thursday" className="lh-copy">Thursday</label>
                                        </div>
                                        <div className="flex items-center mb2">
                                        <input className="mr2" type="checkbox" id="friday" value="friday" onClick = {() => this.onFriChange()}/>
                                        <label htmlFor="friday" className="lh-copy">Friday</label>
                                        </div>
                                        <div className="flex items-center mb2">
                                        <input className="mr2" type="checkbox" id="saturday" value="saturday" onClick = {() => this.onSatChange()}/>
                                        <label htmlFor="saturday" className="lh-copy">Saturday</label>
                                        </div>
                                        <div className="flex items-center mb2">
                                        <input className="mr2" type="checkbox" id="sunday" value="sunday" onClick = {() => this.onSunChange()}/>
                                        <label htmlFor="sunday" className="lh-copy">Sunday</label>
                                        </div>
                                    </fieldset>
                                </div>

                            </div>

                            <div className = "center">
                                <input 
                                className="center b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit" 
                                value="Submit"
                                onClick = {() => this.onSubmitPress()}/>
                            </div>







                        </form>
                    </main>
                }
            </div>




        )
    }


}

export default EventForm;