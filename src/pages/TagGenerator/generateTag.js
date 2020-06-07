import React from "react";
import useStyles from "./styles.js";
import clipboard from './CopyToClipboard.png'

const GenerateTag = ({projectData }) => {
  const classes = useStyles();
  const tags = projectData.tags;
  const displayTag =() => {
    return (
      <div className={classes.tagDiv}>

        <ul className={classes.tagUl}>
          {tags.map(tag=> (
            <>
            <li className={classes.tagLi} key={tag.id}>{tag}
            </li>
            <img className={classes.copyImg} src={clipboard} alt="clipboard" />
            </>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div>
      <div className={classes.tagDiv}>
        <p>Add these topics to your repository</p>
        <ul className={classes.tagUl}><li className={classes.tagLi}>civictechindex</li>
        <img className={classes.copyImg} src={clipboard} alt="clipboard" />
        
        </ul>
        {displayTag()}
      </div>
      <div className={classes.flexContainer}>
        <div className={classes.flexItem}>
          <p className={classes.pHeading}>Checkout our automated process</p>
          <p className={classes.pTag}>
            This process uses GitHub’s API to log into your project’s repository
            (you must have admin rights). It will add the topic tags you have
            created.
          </p>
          <button className={classes.generateButton}>Automated</button>
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
    </div>
  );
};

export default GenerateTag;
