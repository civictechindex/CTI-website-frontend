import React, { useState } from "react";
import useStyles from "./styles.js";

const GenerateTag = ({ tags }) => {
  const classes = useStyles();
  // const displayTag =() => {
  //   return (
  //     <>

  //       <ul>
  //         {tags.map(tag=> (
  //           <li key={tag.id}>{tag.value}</li>
  //         ))}
  //       </ul>
  //     </>
  //   );
  // }
  return (
    <div>
      <div>
        <p>Add these topics to your repository</p>
        {/* {displayTag()} */}
      </div>
      <div className={classes.flexContainer}>
        <div className={classes.flexItem}>
          <p>Checkout our automated process</p>
          <p>
            This process uses GitHub’s API to log into your project’s repository
            (you must have admin rights). It will add the topic tags you have
            created.
          </p>
          <button className={classes.generateButton}>Automated</button>
        </div>
        <div className={classes.flexItem}>
          <p>Leran how to manually add your own tags</p>
          <p>
            If you prefer to add the topic tags manually, this tutorial will
            guide you through the process. If you don’t have admin rights on the
            repository, it also provides a handy template for you to communicate
            with the repository admin.
          </p>
          <button className={classes.generateButton}>Manual Entry</button>
        </div>
      </div>
    </div>
  );
};

export default GenerateTag;
