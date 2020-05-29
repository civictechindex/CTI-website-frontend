import React, { useState } from "react";
import useStyles from "./styles.js";
import GenerateTag from "./generateTag";
import vector from "./Vector.png";

const AddTopic = () => {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const [showGenerateTag, setShowGenerateTag] = useState(false);
  const [tags, setTags] = useState([{ value: "" }]);

  const addTag = (e) => {
    setTags([
      ...tags,
      {
        id: tags.length,
        value: e.target.value,
      },
    ]);
  };

  return (
    <div>
      <input
        className={classes.topicBox}
        placeholder="topic(s), cause(s), or civic issue(s) "
      />
      <button className={classes.addButton} onClick={() => setCount(count + 1)}>
        <img className={classes.vector} src={vector} alt="vector" />
      </button>
      {Array(count).fill(<AddTopic />)}
    </div>
  );
};

export default AddTopic;
