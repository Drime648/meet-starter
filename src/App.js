

import React from 'react';
import SignIn from './components/signIn';
import Register from './components/register';
import Home from './Home';
import EventForm from './components/EventForm'
import Loading from './components/Loading'

//const URL = "https://reactnativeforyou.com"

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      route: 'signin',
      userName: '',
      day: '',
      events: [],
      time: new Date(),
      apikey: ''
    }

  }

  keyChange = (key) => {
    this.setState({apikey: key});
  }




  onRouteChange = (route) => {
    this.setState({route: route});
  }

  setUser = (user) => {
    this.setState({userName: user});
  }

  render() {
    

    return (
      


      <div>

        
        {this.state.route === 'home' 
          ? <Home userName = {this.state.userName} onRouteChange = {this.onRouteChange} setUser = {this.setUser} apikey = {this.state.apikey}/>
          : (this.state.route === 'signin')
            ? <SignIn onRouteChange = {this.onRouteChange} setUser = {this.setUser} apikey = {this.state.apikey} keyChange = {this.state.keyChange}/>
            : (this.state.route === 'register')
              ? <Register onRouteChange = {this.onRouteChange} setUser = {this.setUser} keyChange = {this.state.keyChange}/>
              : (this.state.route === 'loading')
                ? <Loading onRouteChange = {this.onRouteChange}/>
                : <EventForm onRouteChange = {this.onRouteChange} userName = {this.state.userName} apikey = {this.state.apikey}/>
        }
        

      </div>
    )
  }


}



export default App;
