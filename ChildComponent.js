import logo from './logo.svg';
import React from 'react';
import './App.css';

function ChildComponent (props){
  console.log(props);
return(
<div>
    <span>Name: {props.myName}</span><br />
    <span>Updated at: {props.updatedAt} milliseconds</span>  
</div>
);
}

function App() {

  const myName = 'Kanish';
  const updatedAt = new Date()
  return( 
  <div>
    <ChildComponent myName={myName} updatedAt={updatedAt.toLocaleString()} />
  </div>
  );
}
export default App;
