import React from 'react';
import NumList from './NumList';

class Bucket extends React.Component{
  constructor(props){
    super(props);
    this.state = {evens: [], odds: []}
    this.update = this.update.bind(this);
  }

  render(){
    return (
      <div>
        <h3>Buckets</h3>
        <input ref='number' type='number' />
        <button onClick={this.update}>Add Number</button>
        <h1>Evens</h1>
        <NumList nums={this.state.evens} />
        <h1>Odds</h1>
        <NumList nums={this.state.odds} />
      </div>
    )
  }

  update(){
    const numTest = this.refs.number.value % 2;
    let evens = this.state.evens;
    let odds = this.state.odds;
    if (numTest)
    {
      odds.push(this.refs.number.value);
    }
    else {
      evens.push(this.refs.number.value);
    }
    this.setState({evens, odds});
  }

}

export default Bucket;
