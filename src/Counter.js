import React from 'react';

class Counter extends React.Component{

  constructor(props){
    super(props);
    // this.state = {name: 'Bob'};
    this.state = {name: ''};
    this.update = this.update.bind(this);

  }

  update(){
    const name = this.refs.name.value;
    this.setState({name});
    console.log('name: ', name);

  }



  render(){
    return (
      <div>
        <h3>Counter</h3>
        <input ref='name' type='text' />
        <button onClick={this.update}>Set</button>
        <div>Hello, {this.state.name}</div>
      </div>
    )
  }
}

export default Counter;
