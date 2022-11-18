import { React, useState } from 'react'
import heart from '../../shopImgs/heart.png'  
 
export default function Likes() {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(count => count + 1);
  };
 
  return (
    <div>
      <div>
        <img src={heart} alt="heart" className="heart" onClick={increase}  style={{innerWidth:'20px'}}/>
      </div>
      <span>{counter}</span>
    </div>
  );
}