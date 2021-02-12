import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Donation from './pages/Donation';
import Faq from './pages/Faq'
import HowToUse from './pages/HowToUse'
import Contributors from './pages/Contributors'
import Landing from './pages/Landing'
import Projects from './pages/Projects'
import TagCreator from './pages/TagCreator'

import Guides from './guides/'
import useStyles from './styles'


const App = () => {
  useStyles()
  return (
    <>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/about' component={About} />
        <Route exact path='/adding-projects-to-the-index' component={HowToUse} />
        <Route exact path='/donate' component={Donation} />
        <Route exact path='/tag-generator' component={TagCreator} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/radicalcollaboration/:faq' component={Faq} />
        <Route exact path='/contributors/:affiliation' component={Contributors} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/guides' component={Guides} />
      </Switch>
    </>
  )
}

export default App
