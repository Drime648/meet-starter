

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
      addEvent: 'false'
    }

  }

  // componentDidMount(){
    //window.open(URL, '_blank');
    // fetch('http://localhost:3001/', {
    //   mode: 'cors', // no-cors, *cors, same-origin
    //   cache: 'no-cache',
    //   credentials: 'same-origin',
    //   headers: {'Content-Type': 'application/json'},
    // })
    //   .then(res => res.json())
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err));


  // }

  // componentDidMount() {
  //   this.timerID = setInterval(() => 
  //   this.onTick(), 60000);
  // }

  // onTick = () =>{
  //   this.setState({time: new Date()});
  //   // this.state.events.array.forEach(element => {
  //   //   if(element.time.toLocaleTimeString().slice(0, 5))
  //   // });


  // }



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
          ? <Home userName = {this.state.userName} onRouteChange = {this.onRouteChange} setUser = {this.setUser}/>
          : (this.state.route === 'signin')
            ? <SignIn onRouteChange = {this.onRouteChange} setUser = {this.setUser}/>
            : (this.state.route === 'register')
              ? <Register onRouteChange = {this.onRouteChange} setUser = {this.setUser}/>
              : (this.state.route === 'loading')
                ? <Loading onRouteChange = {this.onRouteChange}/>
                : <EventForm onRouteChange = {this.onRouteChange} userName = {this.state.userName}/>
        }
        

      </div>
    )
  }


}



export default App;
