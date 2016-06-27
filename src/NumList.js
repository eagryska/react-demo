import React from 'react';

export default (props) => {
  const arr = props.nums;

  return (
    <div>
      <ul>
        {arr.map((x,i) => <li key={i}>{x}</li>)}
      </ul>
      <div>
        Sum: {arr.reduce((acc,x) => acc*1 + x*1, 0)}
      </div>

    </div>
  )
}
