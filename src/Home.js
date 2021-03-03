
import React from 'react';
import Navigation from './components/Navigation';
import AddButton from './components/addButton.png';
import SearchBox from './components/SearchBox';
import EventCardList from './components/EventCardList';
import Scroll from './components/Scroll';
import TaskList from './components/taskList';

import './Home.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.userName,
      day: '',
      events: [],
      time: new Date(),
      searchField: '',
      taskField: '',
      tasks: [],
      apikey: this.props.apikey
    }
  }

  enterPress = (event) => {
    if (event.keyCode === 13 && !/^\s*$/.test(this.state.taskField)) {
      fetch('https://mighty-river-01892.herokuapp.com/addTask', {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {'Content-Type': 'application/json'},
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify({
                    username: this.state.userName,
                    task: this.state.taskField,
                    key: this.state.apikey
                    
                })
            })
            .then(response =>{
                return response.json();
            })
            .then(data => {
                if(data === 'success'){
                    this.props.onRouteChange('loading');
                }
            })
            .catch(err => console.log(err));

            this.setState({taskField: ''});
    }
  }




  onAddClicked = () => {
    this.props.onRouteChange('eventForm')
  }

  onSearchChange = (event) => {
		this.setState({searchField: event.target.value});
	}

  onTaskChange = (event) => {
    this.setState({taskField: event.target.value});
  }



  componentDidMount() {
    // console.log(this.state.userName);
    // console.log(' is the user name');
    // console.log(this.state.day);
    fetch(process.env.REACT_APP_API_SITE +'/getprofile/' + this.state.userName + '/' + this.state.apikey).then(response =>{
      return response.json();
    })
    .then(eventData =>{
      this.setState({events: eventData})
      console.log(eventData);
    })

    fetch(process.env.REACT_APP_API_SITE +'/getTasks/' + this.state.userName + '/' + this.state.apikey).then(response => {
      return response.json();
    })
    .then(taskData => {
      this.setState({tasks: taskData})
    }) 

    

    this.timerID = setInterval(() => this.onTick(), 60000);
		
    
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  // copyToClipboard = (copyText) => {
  //   var textField = document.createElement('textarea')
  //   textField.innerText = copyText
  //   document.body.appendChild(textField)
  //   textField.select()
  //   document.execCommand('copy')
  //   textField.remove()
  // }


  
  onTick = () =>{
    this.setState({time: new Date()});
    var day = this.state.time.getDay();
    var array = this.state.events;
    // console.log(this.state.time.getTime());
    // var d = new Date();
    // var present = d.getTime();

    for(var i =0; i < array.length; i++){
      if((day === 0 && array[i].sun) ||
        (day === 1 && array[i].mon) ||
        (day === 2 && array[i].tue) ||
        (day === 3 && array[i].wed) ||
        (day === 4 && array[i].thu) ||
        (day === 5 && array[i].fri) ||
        (day === 6 && array[i].sat)){
          //check event times
          if(array[i].actiontime.slice(0, 5) === this.state.time.toTimeString().slice(0, 5)){
            window.open(array[i].url);
            // console.log(array[i].password);
            // copy(array[i].password);
          }

          
        }
    }
      
  }




    




  render() {
    const filteredEvents = this.state.events.filter(event => {
			return event.title.toLowerCase().includes(this.state.searchField.toLowerCase());
    })

    

    return (
        <div> 
            <nav className="navbar">
              <ul className="navbar-nav">
                <span>
                  <input
                  className = "nav-item text-item pa2 input-reset ba bg-transparent white w-100"
                      aria-hidden="true"
                      onKeyDown={(e) => this.enterPress(e)}
                      onChange = {this.onTaskChange}
                      >
                  </input>
                  <TaskList apikey = {this.state.apikey} tasks = {this.state.tasks} onRouteChange = {this.props.onRouteChange}/>

                </span>
              </ul>
            </nav>
            <Navigation onRouteChange = {this.props.onRouteChange} setUser = {this.props.setUser}/>
            <div className = 'tc pa4 black-80 App'>
              <div className = "image-container">
                <img alt = 'addButton' src = {AddButton} onClick = {() => this.onAddClicked()} className = "pointer grow"/>
              </div>
              <SearchBox searchChange = {this.onSearchChange}/>
              <Scroll>
                <EventCardList apikey = {this.state.apikey} events = {filteredEvents} onRouteChange = {this.props.onRouteChange}/>
              </Scroll>

            </div>
        </div>
    );
  }


}



export default App;
