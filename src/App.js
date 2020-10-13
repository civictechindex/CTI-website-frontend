import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import HowToUse from './pages/HowToUse'
import Contributors from './pages/Contributors'
import Landing from './pages/Landing'


const App = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/adding-projects-to-the-index' component={HowToUse} />
                <Route exact path='/contributors/:affiliation' component={Contributors} />
                <Route exact path='/landing' component={Landing} />
            </Switch>
        </>
    )
}

export default App
