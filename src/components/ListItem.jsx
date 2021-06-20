import React from "react";

function List(props) {
  return (
    <div>
      <li onClick={() => props.onCheck(props.id)}>{props.value}</li>
    </div>
  );
}

export default List;
