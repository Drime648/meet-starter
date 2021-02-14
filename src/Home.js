
import React from 'react';
import Navigation from './components/Navigation';
import AddButton from './components/addButton.png';
import SearchBox from './components/SearchBox';
import EventCardList from './components/EventCardList';
import Scroll from './components/Scroll';
import copy from "copy-to-clipboard";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.userName,
      day: '',
      events: [],
      time: new Date(),
      searchField: ''
    }
  }




  onAddClicked = () => {
    this.props.onRouteChange('eventForm')
  }

  onSearchChange = (event) => {
		this.setState({searchField: event.target.value});
	}



  componentDidMount() {
    // console.log(this.state.userName);
    // console.log(' is the user name');
    // console.log(this.state.day);
    fetch('https://mighty-river-01892.herokuapp.com/getprofile/' + this.state.userName).then(response =>{
      return response.json();
    })
    .then(eventData =>{
      this.setState({events: eventData})
      console.log(eventData);
    })

    this.timerID = setInterval(() => this.onTick(), 60000);
		
    
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  copyToClipboard = (copyText) => {
    var textField = document.createElement('textarea')
    textField.innerText = copyText
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }


  
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
            console.log(array[i].password);
            copy(array[i].password);
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
            <Navigation onRouteChange = {this.props.onRouteChange} setUser = {this.props.setUser}/>
            <div className = 'tc pa4 black-80 center App'>
              <img alt = 'addButton' src = {AddButton} onClick = {() => this.onAddClicked()}/>
              <SearchBox searchChange = {this.onSearchChange}/>
              <Scroll>
                <EventCardList events = {filteredEvents} onRouteChange = {this.props.onRouteChange}/>
              </Scroll>

            </div>
        </div>
    );
  }


}



export default App;
