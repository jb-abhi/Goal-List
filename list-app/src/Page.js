import React, {useState} from "react";
import Card from "./Card";
import Form from "./Form";
import List from "./List";

const Page = () => {
const [goal,setGoal] = useState([]);

const goalDataHandler = (enteredText) => {
setGoal(prevGoals => {
  const updatedGoals = [...prevGoals];
  updatedGoals.unshift({ text: enteredText.goal, id: Math.random().toString() });
  return updatedGoals;
});
}

const deleteGoalHandler = (id) => {
  setGoal(prevGoals => {
    const updatedGoals = prevGoals.filter(goal => goal.id !== id);
    return updatedGoals;
  });
}

return (
  <div>
    <Card>
    <p>Course Goal</p>
    <Form onSubmission = {goalDataHandler}></Form>
    </Card>
    {goal.length === 0 ? <p>No goals found. Maybe add one?</p>:<List onDelete = {deleteGoalHandler} item = {goal}></List>}
  </div>
)
}

export default Page;