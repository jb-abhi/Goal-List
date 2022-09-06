import React from "react";
import './ListItem.css'


const ListItem = (props) => {

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="list" onClick={deleteHandler} style={{textAlign:'center',marginBottom:'1rem'}}>
{props.text}
  </li>
  )

}

export default ListItem;