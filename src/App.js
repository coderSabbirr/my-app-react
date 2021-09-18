import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
    <LoadUser></LoadUser>
     <Mycomponent band="Apple" price="10000"></Mycomponent>
     <Mycomponent band="Microsoft" price="1550"></Mycomponent>
     <Mycomponent band="google" price="00"></Mycomponent>
     <Mycomponent band="SpaceX" price="5000"></Mycomponent>
     <Mycomponent></Mycomponent>


    </div>
  );
}

function LoadUser() {
  const [users,setUsers] = useState([])
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

  return (
<div>
  {
    users.map(user => <User name={user.name} phone={user.phone}></User>)
  }
</div>
  );
}

function User(props) {
return(
  <div className="mystyle">
    <h5>Name: {props.name}</h5>
    <h5>phone: {props.phone}</h5>
  </div>
)
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
