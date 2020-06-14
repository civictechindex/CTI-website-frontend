import React, { useState, useEffect } from "react";
import useStyles from "./styles.js";
import vector from "./Vector.png";
// import GenerateTag from "./generateTag.js";
import clipboard from "./CopyToClipboard.png";

const FindProject = () => {
  const classes = useStyles();

  const initialState = {
    
    projectName: "",
    projectRepository: "",
    
  };

  const [projectData, setProject] = useState({
    projectName: "",
    projectRepository: "",
    });
  const [projectTags,setProjectTags] = useState({ptags:[""]})
  const [additionalTags,setAdditonalTags] = useState({atags:[""]})
  const [sendRequest, setSendRequest] = useState(false);
  const [topicTags, setTopicTags] = useState([]);
  const [showGenerateTag, setShowGenerateTag] = useState(false);
  const [showNoTag, setShowNoTag] = useState(false);
  const [btnClick, setBtnClick] = useState(false);
  const [generateBtnClick, setGenerateBtnClick] = useState(false);
  const [showCreateTag, setShowCreateTag] = useState(true);
  const [showAdditionalTag, setShowAdditionalTag] = useState(false);
  const [showCombinedTags, setShowCombinedTags] = useState(false);
  const [showAutoManualTags, setShowAutoManualTags] = useState(false);
  const [showCreateMoreTags, setShowCreateMoreTags] = useState(false)

  const clearState = () => {
    setProject({ ...initialState });
    
    setBtnClick(false)
  };

  const combineTags = () => {
    setProjectTags((prevState) => {
      return {
        
        ptags: ["civictechindex",...prevState.ptags],
      };
    });
    setShowNoTag(false);
     setShowCreateTag(false);
    setShowGenerateTag(true);
    
    setGenerateBtnClick(true);
  };

  const updateProjectName = (e) => {
    const dataCopy = { ...projectData };
    dataCopy.projectName = e.target.value;
    setProject(dataCopy);
  };

  const updateProjectRepository = (e) => {
    const dataCopy = { ...projectData };
    dataCopy.projectRepository = e.target.value;
    setProject(dataCopy);
  };

  const addTag = () => {
    setProjectTags((prevState) => {
      return {
        
        ptags: [...prevState.ptags, ""],
      };
    });
  };

  const updateTag = (e, index) => {
    const dataCopy = { ...projectTags};

    dataCopy.ptags[index] = e.target.value;
    setProjectTags(dataCopy);
  };

  const createTags = () => {
    console.log(projectTags.ptags)
    return projectTags.ptags.map((ptag, idx) => {
      return (
        <div key={idx}>
          <input
            className={classes.topicBox}
            placeholder="topic(s), cause(s), or civic issue(s) "
            value={ptag || ""}
            onChange={(e) => updateTag(e, idx)}
          />
          {/* <button className={classes.addButton} onClick={() => removeTag(idx)}>-</button> */}
          <button onClick={()=>addTag()}>
            <img className={classes.vector} src={vector} alt="vector" />
          </button>
        </div>
      );
    });
  };

  const displayTagsNoTopic = () =>{
    setProjectTags((prevState) => {
      return {
        
        ptags: ["civictechindex",...prevState.ptags],
      };
    });
    setShowCreateTag(false)
    setShowGenerateTag(true)
    setGenerateBtnClick(true)
  }

  const displayNoTagArray = () => {
    return (
      <div>
  
        <p>
          What topic(s), cause(s), or civic issue(s) does your project address?
        </p>
        {showCreateTag ? createTags() : null}
        <div className={classes.buttonDiv}>
          <button
            className={
              generateBtnClick ? classes.hideButton : classes.generateButton
            }
            onClick={() =>displayTagsNoTopic()}
          >
            Generate Tags
          </button>
          <button
            className={
              generateBtnClick ? classes.hideButton : classes.generateButton
            }
            onClick={() => clearState()}
          >
            Reset
          </button>
        </div>
      </div>
    );
  };

  const displayTagArray = () => {
    console.log(topicTags);
    if (topicTags.length === 0) {
      return (
        <div>      
          <p>
        There are currently no topic tags in your project’s repository.Add
        tags to increase your project visibility.
      </p>
     {displayNoTagArray()}
      </div>
      )} else {
      return (
        <div>
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
          {showCreateTag ? createTags() : null}
          <div className={classes.buttonDiv}>
            <button
              className={
                generateBtnClick ? classes.hideButton : classes.generateButton
              }
              onClick={() => combineTags()}
            >
              Generate Tags
            </button>
            <button
              className={
                generateBtnClick ? classes.hideButton : classes.generateButton
              }
              onClick={() => clearState()}
            >
              Reset
            </button>
          </div>
        </div>
      );
    }
  };

  const displayTag =() => {
    console.log(projectTags.ptags)
    const tags = projectTags.ptags;
    console.log(tags)
    return (
      <div className={classes.tagDiv}>
        <p>Add these topics to your repository</p>
        <ul className={classes.tagUl}>
          {tags.map((tag,idx)=> (
            <>
            <li className={classes.tagLi} key={idx}>{tag}
            </li>
            <img className={classes.copyImg} src={clipboard} alt="clipboard" />
            </>
          ))}
        </ul>
      </div>
    );
  }

  const addMoreTag = () => {
    setAdditonalTags((prevState) => {
      return {
        
        atags: [...prevState.atags, ""],
      };
    });
  };

  const updateMoreTag = (e, index) => {
    const dataCopy = { ...additionalTags};

    dataCopy.atags[index] = e.target.value;
    setAdditonalTags(dataCopy);
  };

  const combineMoreTags =() =>{
    const projectCopyTags = { ...projectTags };
    const copyMoreTags ={...additionalTags}
    projectCopyTags.ptags = [...projectCopyTags.ptags,...copyMoreTags.atags]
    setProjectTags(projectCopyTags)
  }


const displayCombinedTags = () => {
 setShowCombinedTags(true);
 setGenerateBtnClick(true)
 combineMoreTags ()
 setShowAutoManualTags(true)
 setShowCreateMoreTags(false)
 setShowAdditionalTag(false)
 
}


  const createMoreTags = () =>{
      
    return additionalTags.atags.map((atag, idx) => {
      return (
             <div key={idx}>
          <input
            className={classes.topicBox}
            placeholder="topic(s), cause(s), or civic issue(s) "
            value={atag || ""}
            onChange={(e) => updateMoreTag(e, idx)}
          />
          {/* <button className={classes.addButton} onClick={() => removeTag(idx)}>-</button> */}
          <button onClick={()=>addMoreTag()}>
            <img className={classes.vector} src={vector} alt="vector" />
          </button>
        </div>
       );
    });
  }

  const generateButton = () =>{
    return(
      <div className={classes.buttonDiv}>
      <button
        className={
          generateBtnClick ? classes.hideButton : classes.generateButton
        }
        onClick={() =>displayCombinedTags()}
      >
        Generate Tags
      </button>
      <button
        className={
          generateBtnClick ? classes.hideButton : classes.generateButton
        }
        onClick={() => clearState()}
      >
        Reset
      </button>
    </div>
    )

  }

  const generateMoreTags = () =>{
    return(
      <>
      {setShowCreateMoreTags ? createMoreTags() : null}
      {generateButton()}
      </>
    )
  }

  const addMoreTags = () =>{
    // setShowCreateTag(true)
    setShowGenerateTag(false)
    setGenerateBtnClick(false)

    setShowAdditionalTag(true)
    setShowCreateMoreTags(true)
    
  }

  const generateTag = () => {
  
    return (
      <div>
        <div className={classes.tagDiv}>
          
          {displayTag()}
        </div>
        <div className={classes.buttonDiv}>
        <button
          className={classes.generateButton} onClick={()=>addMoreTags()} >
          Add Additional Tags
        </button>
        <button className={classes.generateButton} onClick={() => clearState()} >Reset</button>
        </div> 
        {autoManualTags()}

      </div>
    );
  };

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
    )
  }

  useEffect(() => {

    if (sendRequest) {
      setBtnClick(true);
      let baseUrl = "https://github.com/";
      let url = projectData.projectRepository;
      console.log("before", url);
      let partUrl = url.replace(baseUrl, "");
      console.log("after", partUrl);

      // make API calls
      fetch(`https://api.github.com/repos/${partUrl}/topics`, {
        method: "GET",
        headers: {
          Accept: "application/vnd.github.mercy-preview+json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setTopicTags(data.names);
          console.log(data.names);
        });

      setSendRequest(false);
      setShowNoTag(true);
    }
  }, [sendRequest, projectData, topicTags]);

  return (
    <main className={classes.main}>
      <p>Project Name:</p>
      <input
        className={classes.textBox}
        type="text"
        name="projectName"
        value={projectData.projectName || ""}
        onChange={(e) => updateProjectName(e)}
      />
      <p>Project Repository URL:</p>
      <input
        className={classes.textBox}
        type="text"
        name="projectRepository"
        value={projectData.projectRepository || ""}
        onChange={(e) => updateProjectRepository(e)}
      />


      <button
        className={btnClick ? classes.hideButton : classes.generateButton}
        onClick={() => setSendRequest(true)}
      >
        Find Project
      </button>

      {showNoTag ? displayTagArray() : null}

      {showGenerateTag ? generateTag() : null}
     {showAdditionalTag ? generateMoreTags() : null} 
     {showCombinedTags ? displayTag() : null}
     {showAutoManualTags ? autoManualTags() : null}
    </main>
  );
};

export default FindProject;
