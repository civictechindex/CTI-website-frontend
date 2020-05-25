import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import TagGenerator from './pages/TagGenerator'

const App = () => {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/taggenerator' component={TagGenerator}/>
      </Switch>
      <Footer/>
    </>
  )
}

export default App
