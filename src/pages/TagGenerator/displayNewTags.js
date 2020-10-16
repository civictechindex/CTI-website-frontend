import React, { useState,useEffect,useContext } from "react";
import useStyles from "./styles.js";
import {TagGeneratorContext} from "../../context/tagGeneratorContext.js"
import clipboard from "./CopyToClipboard.png";
import AutoManualTags from "./autoManualTags"
import AddTags from "./AddTags.js";

const DisplayNewTags =({projectTags,handlePtags}) => {
  
  const classes = useStyles();
  const context = useContext(TagGeneratorContext)
console.log("++",projectTags)
console.log("===",projectTags.projectTags)
  const tags = projectTags.ptags
  const tags1 = context.projectTags
  console.log(tags)
  console.log("context tags",tags1)
//const tTags = topicTags

useEffect(()=>{
  //context.updateTopicTags(tTags)
  console.log(context.projectTags)
  console.log(context.topicTags)
})
   
const addMoreTags = () =>{
    //setShowCreateTag(true)
    context.resetAdditionalTags()
    context.handleShowDisplayTags(true);
    context.handleShowDisplayNewTags(false);
    return(<div>{context.showDisplayTag ? <AddTags/> : null}</div>)
  }

  const displayAdditionalButton = () => {
    return(
   <div className={classes.buttonDiv}>
   <button
     className={classes.generateButton} onClick={()=>addMoreTags()} >
     Add Additional Tags
   </button>
   <button className={classes.generateButton}>Reset</button>
   </div>
    )
   }

  return (
    <div>
    <div className={classes.tagDiv}>
      <p>Add these topics to your repository</p>
      <ul className={classes.tagUl}>
        {tags1.map((tag,idx)=> (
          <>
          <li className={classes.tagLi} key={idx}>{tag}
          </li>
          <img className={classes.copyImg} src={clipboard} alt="clipboard" />
          </>
        ))}
      </ul>
    </div>
    {displayAdditionalButton()}
    <AutoManualTags/>
    </div>
  );
}

export default DisplayNewTags