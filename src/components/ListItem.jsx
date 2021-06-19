import React, { useState } from "react";

function List(props) {
  let [click, makeClick] = useState(false);
  function onclick() {
    // Simpler approach
    makeClick((prevValue) => {
      return !prevValue;
    });
    // if(!click)
    //   	{makeClick(true)}
    // else
    //   {makeClick(false)};
  }
  return (
    <div>
      {" "}
      <li
        onClick={onclick}
        style={{ textDecoration: click ? "line-through" : "none" }}
      >
        {props.value}
      </li>
    </div>
  );
}

export default List;
