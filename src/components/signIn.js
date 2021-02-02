import React from 'react';
import './signIn.css';


class signIn extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            signInUser: '',
            signInPassword: '',
            signInFinish: false

        }
    }

    onUserChange = (event) => {
        this.setState({signInUser: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

     onSubmitPress =() => {
        if(this.state.signInUser !== '' && this.state.signInPassword !== ''){
            fetch('https://guarded-ocean-62217.herokuapp.com/login', {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {'Content-Type': 'application/json'},
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify({
                    userName: this.state.signInUser,
                    password: this.state.signInPassword
                })
            })
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data);
                // signCheck = data;
                if(data === 'fail'){
                    this.props.onRouteChange('signin');
                    this.props.setUser('');
                }
            
            })
            .catch(err => console.log(err))
            this.props.setUser(this.state.signInUser);
            this.props.onRouteChange('loading');
        }
    }

    

    render() {
        var {onRouteChange} = this.props;
        if(this.state.signInFinish){
            this.props.onRouteChange('home');
        }
        return(
            // <article className = "br2 ba dark-gray b--black-10 mv4 w-100 w-50 w-25-1 mw5 center">
                <main className="pa4 black-80">
                    <form className="measure center">
                        {/* <fieldset id="sign_up" className="ba b--transparent ph0 mh0"/> */}
                        <legend className="tc f4 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">User Name</label>
                            <input 
                            onChange = {this.onUserChange}
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            name="user-name"  
                            id="user-name"/>
                        </div>

                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input 
                            onChange = {this.onPasswordChange}
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password"
                            name="password"  
                            id="password"/>

                        </div>
                        {/* <fieldset/> */}
                        <div className = "center">
                            <input 
                            className="center b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Sign in"
                            onClick = {() => this.onSubmitPress()}/>
                        </div>
                        <div className="lh-copy mt3 pointer">
                            <p className="f6 link dim black db" onClick = {() => onRouteChange('register')}>Register</p>
                        </div>
                    </form>
                </main>
            // </article>
    
        );

    }
}

export default signIn;






















    // async onSubmitPress() {
    //     const url = 'http://localhost:3001/login';
    //     const data = {
    //         userName: this.state.signInUser,
    //         password: this.state.signInPassword
    //     }
    //     // Default options are marked with *
    //     const response = await fetch(url, {
    //       method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //       mode: 'cors', // no-cors, *cors, same-origin
    //       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //       credentials: 'same-origin', // include, *same-origin, omit
    //       headers: {
    //         'Content-Type': 'application/json'
    //         // 'Content-Type': 'application/x-www-form-urlencoded',
    //       },
    //       redirect: 'follow', // manual, *follow, error
    //       referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //       body: JSON.stringify(data) // body data type must match "Content-Type" header
    //     });
    //     return response.json(); // parses JSON response into native JavaScript objects
    //   }