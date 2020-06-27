import React, { useState, useEffect, useContext } from "react";
import useStyles from "./styles.js";
import { AuthContext } from "../../App";
import { TagGeneratorContext } from "../../context/tagGeneratorContext.js";
import Logout from "./logout"
//import AutomatedTags from "./automatedTags"
//import { Redirect } from "react-router-dom";

const AutoManualTags = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(AuthContext);
  const [data, setData] = useState({ errorMessage: "", isLoading: false });
  const context = useContext(TagGeneratorContext);
  const { client_id, redirect_uri } = state;
  //const[automated,setAutomated] = useState(false)
  
 
  useEffect(() => {
    // After requesting Github access, Github redirects back to your app with a code parameter
    const url = window.location.href;
    const hasCode = url.includes("?code=");
    console.log("&&&&&&&&&&&&$$&",hasCode);
    // If Github API returns the code parameter
    if (hasCode) {
      const newUrl = url.split("?code=");
      window.history.pushState({}, null, newUrl[0]);
      setData({ ...data, isLoading: true });

      const requestData = {
        client_id: state.client_id,
        redirect_uri: state.redirect_uri,
        client_secret: state.client_secret,
        code: newUrl[1],
        owner:context.owner,
        repo:context.repo,
        tags:context.projectTags
      };
      console.log("+++++++",requestData)
      const proxy_url = state.proxy_url;

      // Use code parameter and other parameters to make POST request to proxy_server
      fetch(proxy_url, {
        method: "POST",
        body: JSON.stringify(requestData)
      })
        .then(response => response.json())
        .then(data => {
          dispatch({
            type: "LOGIN",
            payload: { user: data, isLoggedIn: true }
          });
        })
        .catch(error => {
          setData({
            isLoading: false,
            errorMessage: "Sorry! Login failed"
          });
        });
    }
  }, [state, dispatch, data, context]);

  //  if (automated) {
  //   return <Redirect to="taggenerator/login" />;
  // }


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
       
        {/* <button className={classes.generateButton} onClick={() => setAutomated(true)} >Automated</button> */}
      </div>
      <div>
          
          <span>{data.errorMessage}</span>
          <div>
            {data.isLoading ? (
              <div>Loading</div>
            ) : (
              <>
                {
                  // Link to request GitHub access
                }
                <a
                  className="login-link"
                  href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=repo`}
                  onClick={() => {
                    setData({ ...data, errorMessage: "" });
                  }}
                >
                  
                  <span>Automated</span>
                </a>
              </>
            )}
            {state.isLoggedIn ? <Logout/> :null}
          </div>
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