import React from 'react';

export default (props) => {
  return (
    <div>
      <div>
        <h1>{props.name}</h1>
      </div>
      <div>
        <img src={props.img}></img>
      </div>
      <div>
        Price: ${props.price}
      </div>
      <div>
        Discount: {props.discount}% off
      </div>
      <div>
        Discount Price: ${(props.price * (1 - (props.discount / 100))).toFixed(2)}
      </div>
    </div>

  );
}
