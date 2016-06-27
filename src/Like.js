import React from 'react';

class Like extends React.Component{
  constructor(props){
    super(props);
    this.state = {like: true, img: 'http://cdn.movieweb.com/img.news.tops/NEi8Paw52dKgkr_2_b.jpg'};
    this.toggle = this.toggle.bind(this);
  }

  toggle(){
    let newimg = '';
    if(this.state.like){
      newimg = 'https://i.ytimg.com/vi/gYNUOkqzcVA/maxresdefault.jpg';
    }
    else{
      newimg = 'http://cdn.movieweb.com/img.news.tops/NEi8Paw52dKgkr_2_b.jpg';
    }
    this.setState({like: !this.state.like, img: newimg})
  }

  render(){
    return (
      <div>
        <h3>Like</h3>
        <img src={this.state.img} style={{width:200 + 'px'}, {height:200 + 'px'}}></img>
        <div><button onClick={this.toggle}>Click</button></div>
      </div>
    )
  }

}

export default Like;
