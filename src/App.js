import React from 'react';

export default (props) => {
  return (
  <div>
    <h1>hello</h1>
    <h2>world</h2>
    <h3>{props.x * props.y}</h3>
  </div>
);
}
