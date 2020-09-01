import React, { useState, useContext } from "react";
import useStyles from "./styles.js";
import { TagGeneratorContext } from "../../context/tagGeneratorContext.js";
import { Redirect } from "react-router-dom";

const AutoManualTags = () => {
  const classes = useStyles();
  const context = useContext(TagGeneratorContext);
  const[automated,setAutomated] = useState(false)


   if (automated) {
    const tags = [...context.topicTags,...context.projectTags]
    console.log(context.topicTags)
    console.log(context.projectTags)
    console.log(tags)
    const uniqueSet = new Set(tags)
    const uniqueTags = [...uniqueSet]
    let str='?tags='+uniqueTags.toString();

// for(let i=0; i<uniqueTags.length; i++){
//   str =str+ '?tag='+uniqueTags[i]+','
//}
context.updateUrlStr(str)
    return <Redirect to="taggenerator/login" />;
  }


  const autoManualTags =() =>{
    return(
      <div className={classes.flexContainer}>
      <div className={classes.flexItem}>
        <p className={classes.pHeading}>Checkout our automated process</p>
        <p className={classes.pTag}>
          This process uses GitHub’s API to log into your project’s repository
          (you must have admin rights). It will add the topic tags you have
          created.
        </p>
        {/* <a
                className="login-link"
                href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}/?owner=${context.owner}?repo=${context.repo}${context.urlStr}&scope=public_repo repo write:org admin:org_hook admin:public_key admin:org admin:repo_hook`}
                onClick={() => 
                  setAutomated(true)}
              >
                   <span>Automated</span>
              </a> */}
        <button className={classes.generateButton} onClick={() => setAutomated(true)} >Automated</button>
              
        </div>
      <div className={classes.flexItem}>
        <p className={classes.pHeading}>Leran how to manually add your own tags</p>
        <p className={classes.pTag}>
          If you prefer to add the topic tags manually, this tutorial will
          guide you through the process. If you don’t have admin rights on the
          repository, it also provides a handy template for you to communicate
          with the repository admin.
        </p>
        <button className={classes.generateButton}>Manual Entry</button>
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