import React from 'react';
import './register.css';


class register extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            registerUser: '',
            registerPassword: ''

        }
    }

    onUserChange = (event) => {
        this.setState({registerUser: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({registerPassword: event.target.value})
    }

    onSubmitPress = () =>{
        if(this.state.registerUser !== '' && this.state.registerPassword !== ''){
            fetch('https://guarded-ocean-62217.herokuapp.com/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    userName: this.state.registerUser,
                    password: this.state.registerPassword
                })
            })
            .then(res => {
                return res.json()
            })
            .then(data => {
                if(data === 'fail'){
                    this.props.onRouteChange('register')
                }

            })
            .catch(err => console.log(err));

            this.props.onRouteChange('signIn');
        }
    }

    render(){
        return (
            <form className = "measure center" action="sign-up_submit" method="get" acceptCharset="utf-8">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="tc f4 fw6 ph0 mh0 tc">Register</legend>
                    <div className="mt3">
                        <label className = "db fw4 lh-copy f6" htmlFor="email-address">User Name</label>
                        <input 
                        onChange = {this.onUserChange}
                        className = "pa2 input-reset ba bg-transparent w-100 measure" 
                        name="user-name"  
                        id="user-name"/>
                    </div>
                    <div className="mt3">
                        <label className ="db fw4 lh-copy f6" htmlFor="password">Password</label>
                        <input 
                        onChange = {this.onPasswordChange}
                        className ="b pa2 input-reset ba bg-transparent" 
                        type="password" 
                        name="password"  
                        id="password"/>
                    </div>
                </fieldset>
                <div className="mt3">
                    <input 
                    onClick = {() => this.onSubmitPress()} 
                    className ="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" 
                    type="submit" 
                    value="Register"/>
                </div>
            </form>
        )

    }
}

export default register;