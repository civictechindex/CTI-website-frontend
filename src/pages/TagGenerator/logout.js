import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import useStyles from "./styles.js";
import { AuthContext } from "../../App";


export default function Logout() {
  const classes = useStyles();
  const { state, dispatch } = useContext(AuthContext);

  if (!state.isLoggedIn) {
    return <Redirect to="/taggenerator" />;
  }

  const { avatar_url, name, public_repos, followers, following } = state.user
console.log(state.user)
  const handleLogout = () => {
    dispatch({
      type: "LOGOUT"
    });

  } 

  return (
    
      <div  className={classes.ldiv}>
        <button className={classes.generateButton} onClick={()=> handleLogout()}>Logout</button>
        <div>
          <div >
            <p>Response</p>
          </div>
        </div>
      </div>
    
  );
}