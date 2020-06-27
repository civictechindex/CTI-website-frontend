import React, { useState, useEffect, useContext } from "react";
//import { Redirect } from "react-router-dom";
import { TagGeneratorContext } from "../../context/tagGeneratorContext.js";
import { AuthContext } from "../../App";
import Logout from "./logout"


export default function AutomatedTags() {
  const { state, dispatch } = useContext(AuthContext);
  const [data, setData] = useState({ errorMessage: "", isLoading: false });
  const context = useContext(TagGeneratorContext);
  const { client_id, redirect_uri } = state;

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

  // console.log("state.isLoggedIn", state.isLoggedIn);
  // if (state.isLoggedIn) {
  //   return <Logout />;
  // }

  return (
    
      <section className="container">
        <div>
          
          <span>{data.errorMessage}</span>
          <div className="login-container">
            {data.isLoading ? (
              <div className="loader-container">
                <div className="loader"></div>
              </div>
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
                  
                  <span>Login with GitHub</span>
                </a>
              </>
            )}
            {state.isLoggedIn ? <Logout/> :null}
          </div>
        </div>
      </section>
    
  );
}

