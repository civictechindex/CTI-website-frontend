import React, { useState, useContext } from "react";
import useStyles from "./styles.js";
import { TagGeneratorContext } from "../../context/tagGeneratorContext.js";
import { Redirect, Link } from "react-router-dom";

const AutoManualTags = () => {
  const classes = useStyles();
  const context = useContext(TagGeneratorContext);
  const [automated] = useState(false)


  if (automated) {
    const tags = [...context.topicTags, ...context.projectTags]
    console.log(context.topicTags)
    console.log(context.projectTags)
    console.log(tags)
    const uniqueSet = new Set(tags)
    const uniqueTags = [...uniqueSet]
    let str = '?tags=' + uniqueTags.toString();

    // for(let i=0; i<uniqueTags.length; i++){
    //   str =str+ '?tag='+uniqueTags[i]+','
    //}
    context.updateUrlStr(str)
    return <Redirect to="taggenerator/login" />;
  }


  const autoManualTags = () => {
    return (
      <div className={classes.flexContainer} style={{width: '100%', margin: '0 auto'}}>
        <div className={classes.flexItem}>
          <p className={classes.pHeading}>Leran how to manually add your own tags</p>
          <p className={classes.pTag}>
            If you prefer to add the topic tags manually, this tutorial will
            guide you through the process. If you don’t have admin rights on the
            repository, it also provides a handy template for you to communicate
            with the repository admin.
        </p>
          <Link to="/adding-projects-to-the-index" ><button className={classes.generateButton}>Manual Entry</button></Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {autoManualTags()}

    </div>)

}

export default AutoManualTags;