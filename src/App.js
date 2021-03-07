import React, { useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Layout from './components/common/Layout';

import About from './pages/About';
import Contributors from './pages/Contributors';
import Donation from './pages/Donation';
import Faq from './pages/Faq';
import Home from './pages/Home';
import HowToUse from './pages/HowToUse';
import Landing from './pages/Landing';
import SearchProjects from './pages/SearchProjects';
import TagCreator from './pages/TagCreator';
import Placeholder from './pages/Placeholder';
import ShareTheCti from './pages/ShareTheCti'
import Guides from './guides/';
import useStyles from './styles';

const RouteTitled = ({ title, ...rest }) => {
  useEffect(() => {
    if (title) {
      document.title = 'Civic Tech Index — ' + title
    }
  })

  return (
    <Route {...rest} />
  )
}

const App = () => {
  useStyles();
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Landing} />
          <RouteTitled exact path='/about' component={About} title='About' />
          <RouteTitled exact path='/adding-projects-to-the-index' component={HowToUse} title='How To Use' />
          <RouteTitled exact path='/contributors/:affiliation' component={Contributors} title='Contributors' />
          <RouteTitled exact path='/donate' component={Donation} title='Donate' />
          <Route exact path='/home' component={Home} />
          <RouteTitled exact path='/projects' component={Projects} title='Search Projects' />
          <RouteTitled exact path='/tag-generator' component={TagCreator} title='Tag Generator' />
          <RouteTitled exact path='/radicalcollaboration/:faq' component={Faq} title='FAQs' />
          <Route path='/guides/:guide' component={Guides} />
          <Route path='/blank' component={Placeholder} />
          <Redirect from='/adding-projects' to='/adding-projects-to-the-index' />
          <Redirect from='/how' to='/adding-projects-to-the-index' />
          <Redirect from='/how-to' to='/adding-projects-to-the-index' />
          <Redirect from='/how-to-use' to='/adding-projects-to-the-index' />
          <Redirect from='/donation' to='/donate' />
          <Redirect from='/taggenerator' to='/tag-generator' />
          <Redirect from='/tag-creator' to='/tag-generator' />
          <Redirect from='/tagcreator' to='/tag-generator' />
          <Redirect from='/search' to='/projects' />
          <Redirect from='/faq' to='/radicalcollaboration/faq' />
          <Redirect from='/radicalcollaboration' to='/radicalcollaboration/faq' />
          <Route exact path='/sharethecti' component={ShareTheCti} />
          <Redirect from='/guides' to='/guides/colors' />
          <Redirect from='/placeholder' to='/blank' />
          <Redirect from='/template' to='/blank' />
          <Redirect to='/' />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
