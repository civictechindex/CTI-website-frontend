import React, { useState } from "react";
import useStyles from "./styles.js";

const AddTopic = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <input placeholder="topic(s), cause(s), or civic issue(s) " />
      <button onClick={() => setCount(count + 1)}>+</button>
      {Array(count).fill(<AddTopic />)}
    </div>
  );
};

export default AddTopic;
