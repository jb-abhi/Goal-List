import React from "react";
import ListItem from "./ListItem";
import './List.css'

const List = (props) => {

  const removeHandler = (id) => {
    props.onDelete(id)
  }

return (
  <ul className="list-text">
   {
    props.item.map((goal)=>(
    <ListItem onDelete={removeHandler}   key={goal.id} id={goal.id} text={goal.text}>
    </ListItem>
    ))
   }
  </ul>
);
};

export default List;