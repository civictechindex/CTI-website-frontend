import React, { useState, useEffect, useContext } from "react";
import useStyles from "./styles.js";
import {TagGeneratorContext} from "../../context/tagGeneratorContext.js";
import clipboard from "./CopyToClipboard.png";
import AddTags from "./AddTags";

const DisplayTags = () => {
  const classes = useStyles();
  const context = useContext(TagGeneratorContext);
  const [topicTags, setTopicTags] = useState([]);
  const [sendRequest, setSendRequest] = useState(false);

  useEffect(() => {
    
    //make API calls
    fetch(
      `https://api.github.com/repos/${context.owner}/${context.repo}/topics`,
      {
        method: "GET",
        headers: {
          Accept: "application/vnd.github.mercy-preview+json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTopicTags(data.names);
        console.log(data.names);
      });
    

  },[context.owner,context.repo]);

  const displayTagArray = () => {
    console.log(topicTags);
    if (topicTags.length === 0) {
      return (
        <div>
          <div className={context.showDisplayTag ? classes.tagDiv : classes.hideButton } >
          <p>
            There are currently no topic tags in your project’s repository.Add
            tags to increase your project visibility.
          </p>
          </div>
          <AddTags />
        </div>
      );
    } else {
      return (
        <div>
          <div className={context.showDisplayTag ? classes.tagDiv : classes.hideButton}>
          <p>These are the topic tags present in your project.</p>
          <div className={classes.tagDiv}>
            <ul className={classes.tagUl}>
              {topicTags.map((topicTag, idx) => (
                <>
                  <li className={classes.tagLi} key={idx}>
                    {topicTag}
                  </li>
                  <img
                    className={classes.copyImg}
                    src={clipboard}
                    alt="clipboard"
                  />
                </>
              ))}
            </ul>
          </div>
          <p>Add additional tags to increase your project visibility.</p>
          </div>
          <AddTags />
        </div>
      );
    }
  };

  return( <AddTags topicTags={topicTags}/>) 
};

export default DisplayTags;
