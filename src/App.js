import React, { createContext, useReducer } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import TagGenerator from './pages/TagGenerator'
import AutomatedTags from "./pages/TagGenerator/automatedTags"
//import Logout from './pages/TagGenerator/logout'
import { initialState, reducer } from "./store/reducer";
import {TagGeneratorContextProvider} from "./context/tagGeneratorContext.js"

export const AuthContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  
  return (
    <AuthContext.Provider
    value={{
      state,
      dispatch
    }}
  >
  <TagGeneratorContextProvider> 
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/taggenerator' component={TagGenerator}/>
        <Route exact path='/taggenerator/login' component={AutomatedTags}/>
      </Switch>
      <Footer/>
      </TagGeneratorContextProvider> 
      </AuthContext.Provider>
      
  )
}

export default App
