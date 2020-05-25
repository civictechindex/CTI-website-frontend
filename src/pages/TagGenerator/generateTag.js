import React, { useState } from "react";
import useStyles from "./styles.js";
import AddTopic from "./addTopic";

const GenerateTag = () => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <p>Project Name:</p>

      <input type="text" name="projectName" placeholder="Food Oasis Algeria " />
      <p>Project Repository URL:</p>
      <input type="text" name="projectRepository" placeholder="text box" />
      <p>
        What topic(s), cause(s), or civic issue(s) does your project address?
      </p>
      <AddTopic />
      <button>Generate Tags</button>
      <button>Reset</button>
    </main>
  );
};

export default GenerateTag;
