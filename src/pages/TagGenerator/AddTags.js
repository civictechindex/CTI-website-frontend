import React, { useState, useEffect, useContext } from "react";
import useStyles from "./styles.js";
import { TagGeneratorContext } from "../../context/tagGeneratorContext.js";
import vector from "./Vector.png";
import DisplayNewTags from "./displayNewTags";
import clipboard from "./CopyToClipboard.png";

const AddTags = () => {
  const classes = useStyles();
  const context = useContext(TagGeneratorContext);
  const [topicTags, setTopicTags] = useState([]);
  const [showDisplayTag, setShowDispalyTag] = useState(true);
  // const [showCreateTag, setShowCreateTag] = useState(true);
  // const [showButtonDiv, setShowButtonDiv] = useState(true);
  //const [showDisplayAdditionalButton, setShowDisplayAdditionalButton] = useState(true);
  const [showDisplayNewTags, setShowDisplayNewTags] = useState(false);
  const [projectTags, setProjectTags] = useState({ ptags: [""] });

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
  }, [context.owner, context.repo]);

  const addTag = () => {
    setProjectTags((prevState) => {
      return {
        ptags: [...prevState.ptags, ""],
      };
    });
  };

  const updateTag = (e, index) => {
    const dataCopy = { ...projectTags };

    dataCopy.ptags[index] = e.target.value;
    setProjectTags(dataCopy);
  };

  const combineTags = () => {
    setProjectTags((prevState) => {
      return {
        ptags: ["civictechindex", ...prevState.ptags],
      };
    });
    const dataCopyTags = [...projectTags.ptags];
    console.log(dataCopyTags);

    context.updateProjectTag(dataCopyTags);

    setShowDispalyTag(false);
    // setShowCreateTag(false);
    // setShowButtonDiv(false);
    setShowDisplayNewTags(true);
  };

  const createTags = () => {
    //console.log(context.projectTags.ptags);
    //const ptags = context.projectTags.ptags
    return (
      <div>
        <p>
          What topic(s), cause(s), or civic issue(s) does your project address?
        </p>
        {projectTags.ptags.map((ptag, idx) => (
          <div key={idx}>
            <input
              className={classes.topicBox}
              placeholder="topic(s), cause(s), or civic issue(s) "
              value={ptag || ""}
              onChange={(e) => updateTag(e, idx)}
            />
              <button onClick={() => addTag()}>
              <img className={classes.vector} src={vector} alt="vector" />
            </button>
          </div>
        ))}
        
      </div>
    );
  };

  const buttonDiv = () => {
    return (
      <div className={classes.buttonDiv}>
        <button
          className={classes.generateButton}
          onClick={() => combineTags()}
        >
          Generate Tags
        </button>
        <button className={classes.generateButton}>Reset</button>
      </div>
    );
  };

  const noTags = () => {
    return (
      <div>
        <p>
          There are currently no topic tags in your project’s repository.Add
          tags to increase your project visibility.
        </p>
      </div>
    );
  };

  const presentTags = () => {
    return (
      <div
        className={context.showDisplayTag ? classes.tagDiv : classes.hideButton}
      >
        <p>These are the topic tags present in your project.</p>
        <div className={classes.tagDiv}>
          <ul className={classes.tagUl}>
            {topicTags.map((topicTag, idx) => (
              <div hey={idx}>
                <li className={classes.tagLi} key={idx}>
                  {topicTag}
                </li>
                <img
                  className={classes.copyImg}
                  src={clipboard}
                  alt="clipboard"
                />
              </div>
            ))}
          </ul>
        </div>
        <p>Add additional tags to increase your project visibility.</p>
      </div>
    );
  };

  const displayTagArray = () => {
    if (topicTags.length === 0) {
      return (
        <>
          {noTags()}
          {createTags()}
          {buttonDiv()}
        </>
      );
    } else {
      return (
        <>
          {presentTags()}
          {createTags()}
          {buttonDiv()}
        </>
      );
    }
  };

  const handlePtags = () => {
    setProjectTags({ ptags: [""] });
    setShowDispalyTag(true);
    setShowDisplayNewTags(false);
  };

  return (
    <div>
      {showDisplayTag ? displayTagArray() : null}
      {/* {showCreateTag ? createTags() : null}
      {showButtonDiv ? buttonDiv() : null} */}
      {showDisplayNewTags ? (
        <DisplayNewTags
          projectTags={projectTags}
          topicTags={topicTags}
          handlePtags={handlePtags}
        />
      ) : null}
    </div>
  );
};

export default AddTags;
