import React from 'react';

export default (props) => {
  const arr = props.nums;
  const sum = arr.reduce((acc, x) => acc + x)
  const avg = (sum / arr.length).toFixed(2)
  const sorted = arr.sort();
  let median = -1;
  if((arr.length % 2) == 1){
    median = sorted[Math.floor(arr.length/2)]
  } else {
    median = ((sorted[arr.length/2] + sorted[arr.length/2 + 1]) / 2).toFixed(1)
  }
  let mode = -1;

  const test = arr.filter(() => { })
  console.log(arr);
  return (
    <div>
      <div>
        <h2>sum = {sum}</h2>
      </div>
      <div>
        <h2>average = {avg}</h2>
      </div>
      <div>
        <h2>median = {median}</h2>
      </div>
    </div>
  );
}
