import React from 'react';

class Counter extends React.Component{

  constructor(props){
    super(props);
    this.state = {count: props.start};
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.power = this.power.bind(this);
  }

  increment(){
    console.log('increment:', this);
    this.setState({count: this.state.count + 1})
  }
  decrement(){
    console.log('decrement:', this);
    this.setState({count: this.state.count - 1})
  }
  power(){
    console.log('power:', this);
    this.setState({count: this.state.count * 2})
  }

  render(){
    return (
      <div>
        <h3>Counter</h3>
        <div>Count: {this.state.count}</div>
        <button onClick={this.increment}>++</button>
        <button onClick={this.decrement}>--</button>
        <button onClick={this.power}>**</button>
      </div>
    )
  }
}

export default Counter;
