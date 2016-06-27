import App from './App';
import Sum from './Sum';
import Temperature from './Temperature';
import Product from './Product';
import Statistics from './Statistics';
import Counter from './Counter';
import Greeting from './Counter';
import Like from './Like';
import Bucket from './Bucket';
import Forecast from './Forecast';
import React from 'react';
import { render } from 'react-dom';

let tags = [];
for(let i = 0; i < 10; i++){
  let rnd1 = Math.floor(Math.random() * 1000);
  let rnd2 = Math.floor(Math.random() * 1000);
  let tag = <Sum key={i} x={rnd1} y={rnd2} />
  tags.push(tag);
}

// render(
//   <div>
//     <Temperature city='chicago' tempf='10' />
//     <Product img='http://cdn.macrumors.com/article-new/2013/01/ipad5_2.jpg' name='ipad' price={1000} discount={10} />
//     <Statistics nums={[1,1,2,3,4,5,6,8,9,10]} />
//   </div>, document.getElementById('root')
// );

// render(
//   <div>
//     <Like />
//   </div>, document.getElementById('root')
// );

// render(
//   <div>
//     <Greeting />
//   </div>, document.getElementById('root')
// );

render(
  <div>
    <Forecast />
  </div>, document.getElementById('root')
);
