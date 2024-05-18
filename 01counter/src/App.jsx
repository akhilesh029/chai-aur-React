import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


/*
function App() {
 
  let [counter, setCounter] = useState(15)

  //let counter = 15;

  const addValue = () =>{
    if(counter>=20){
      console.log("You can't addValue more than 20 !!!")
    }
    else
   
    setCounter(counter+1)
  }

  const removeValue = () =>{
    if(counter==1){
      console.log("now can't decrease counter !!!")
    }
    else
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
       <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}
*/


function App() {
 
  let [counter, setCounter] = useState(15)

  //let counter = 15;

  const addValue = () =>{
    if(counter>=20){
      console.log("You can't addValue more than 20 !!!")
    }
    else
   setCounter((preCounter) => preCounter+1);
   setCounter((preCounter) => preCounter+1);
   setCounter((preCounter) => preCounter+1);
   setCounter((preCounter) => preCounter+1);
   setCounter((preCounter) => preCounter+1);
  }

  const removeValue = () =>{
    if(counter==1){
      console.log("now can't decrease counter !!!")
    }
    else
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
       <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}


export default App
