import React, { useState } from "react";
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Progress(props) {
  const [value, setValue] = useState(0);
  const [sum, setSum] = useState(0); 
  const [max, MaxValue] = useState(0);
   
  function currentValue (event){
    setValue(event.target.value);
  }
  function addHours (event){
    setSum(sum + Number(value));
    event.preventDefault();
  }
  function subHours (event){
    setSum(sum - Number(value));
    event.preventDefault();
  }
  
  return (
    <div className = "ProgressContainer">
      <label class = "goal"> Set Your Goal </label>
      <input value = {max} onChange = {(event) => MaxValue(event.target.value)} type = "number" name = "goalAmount" />
      <label>Hours</label>
      <input type="number" id="inputtext" onChange = {currentValue} min = "0.00"/>
      <div className = "ButtonContainer">
        <button className = "add" type = "button" id = "add" onClick = {addHours}>Add</button>
        <div className = "buttonSpace"></div>
        <button className = "subtract" type = "button" id = "subtract" onClick = {subHours}>Subtract</button>
      </div>
      <br></br>
      <div className="progressBar">
        <ProgressBar className = "progress" barContainerClassName = "bar"
  completedClassName = "barCompleted"
  labelClassName = "number" now = {sum} max = {max} label={`${(sum / max) * 100}% completed`} />
      </div>
      <br></br>
      <h4>Total Hours = {sum} </h4>      
    </div>
  );
}
export default Progress;