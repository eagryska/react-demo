import React from 'react';

class Forecast extends React.Component{
  constructor(props){
    super(props);
    this.state = {city: 'Chicago'}
    this.update = this.update.bind(this);
  }

  componentWillMount(){
    console.log('will');
  }

  componentDidMount(){
    console.log('did');
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=692d9840933cc93352daaab2d7bb4ac7&units=imperial')
    .then((rsp) => {
      this.setState({temp: rsp.main.temp})
    })
  }

  render(){
    console.log('render');
    return (
      <div>
        <h1>Weather in {this.state.city}</h1>
        <input ref='city' type='text' />
        <button onClick={this.update}>Update City</button>
        <h1>Temperature: {this.state.temp}</h1>
      </div>
    )
  }

  update(){
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.refs.city.value + '&appid=692d9840933cc93352daaab2d7bb4ac7&units=imperial')
    .then((rsp) => {
      this.setState({temp: rsp.main.temp, city: this.refs.city.value})
    })
  }

}

export default Forecast;
