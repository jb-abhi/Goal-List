import React, {useState} from "react";
import './Form.css'

const Form = (props) =>{

const [input,Setinput] = useState('');
const [isValid,setisValid] = useState(true);

const goalHandler = (e) => {
  Setinput(e.target.value);
  if(e.target.value.length > 0) setisValid(true);
}

const submitHandler = (e) => {
  e.preventDefault();
  const goalData = {
    goal:input
  }

  if(goalData.goal.trim().length === 0) { 
    setisValid(false);
    return;
  }

  props.onSubmission(goalData);
}

  return (
    <div>
      <form onSubmit={submitHandler}>
      <input className={`input ${!isValid ? 'invalid':''} `} placeholder="Learn React" onChange={goalHandler}></input>
      <button className="btn" type="submit">Add Goal</button>
      </form>
    </div>
  )
}

export default Form;