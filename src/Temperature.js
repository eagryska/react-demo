import React from 'react';

export default (props) => {
  return (
  <div>
    <h1>{props.city} {props.tempf} °F, {(((props.tempf *1) - 32) * (5/9)).toFixed(2)} °C</h1>
  </div>
);
}
