import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function Form (){
  const [name, setName] = useState('')
  const [age, setAge] = useState(null)
  const [place, setPlace] = useState('')
  const onNameChange = (e) => {setName(e.target.value)}
  const onAgeChange = (e) => {setAge(e.target.value)}
  const onPlaceChange = (e) => {setPlace(e.target.value)}
  const onSubmit = () => {
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Place: " + place);
  } 

return(<div>
      Name:<input type='text' onChange={onNameChange}></input><br/>
      Age:<input type='number' onChange={onAgeChange}></input><br/>
      Place:<input type='text' onChange={onPlaceChange}></input><br/>
      <button onClick={onSubmit }>Submit</button>
  </div>);
}
function App(){
  return <Form />;
}


export default App;
