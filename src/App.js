import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
     <Mycomponent band="Apple" price="10000"></Mycomponent>
     <Mycomponent band="Microsoft" price="1550"></Mycomponent>
     <Mycomponent band="google" price="00"></Mycomponent>
     <Mycomponent band="SpaceX" price="5000"></Mycomponent>
     <Mycomponent></Mycomponent>


    </div>
  );
}


function Mycomponent(props) {
  const [points,setPoints] = useState(1)

  const handalAddPoints = () => {
    const newPoints = points * 2
    setPoints(newPoints)
  } 
  console.log(props);

 return (
<div className="mystyle">
  <h1>Band: {props.band}</h1>
  <p>Price {props.price} , Points: {points}</p>
  <button onClick={handalAddPoints}>Add Points</button>
  <p>It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your</p>
</div>

 );
}

export default App;
