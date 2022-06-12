/* eslint-disable max-lines-per-function */
import React, { useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import Layout from './components/common/Layout';
import ScrollToTop from './components/common/ScrollToTop';
import WhatIsCTI from './pages/WhatIsCTI';
import Contact from './pages/Contact';
import Collaborate from './pages/Collaborate';
import Contributors from './pages/Contributors';
import Donate from './pages/Donate';
import Faq from './pages/Faq';
import IndvOrgPage from './pages/IndvOrganization';
import Home from './pages/Home';
import HowToAdd from './pages/HowToAdd';
import SearchProjects from './pages/SearchProjects';
import TagGeneratorWizard from './pages/TagGeneratorWizard';
import Error404 from './pages/Error404';
import ShareTheCti from './pages/Share';
import Privacy from './pages/Privacy';
import PopUp from './pages/Privacy/PopUp';
import Guides from './guides/';
import useStyles from './styles';

const RouteTitled = ({ title, ...rest }) => {
  useEffect(() => {
    if (title) {
      document.title = `Civic Tech Index — ${title}`;
    }
  });
  return <Route {...rest} />;
};


// conditional render for cookie
const checkCookie = () => {
  const cookieIsSet = document.cookie.includes('civictechindex_cookie_consent');
  if (cookieIsSet) {
    return null;
  }
  return <PopUp />;
}

const App = () => {
  useStyles();
  return (
    <BrowserRouter>
      <ScrollToTop />
      {checkCookie()}
      <QueryParamProvider ReactRouterRoute={Route}>
        <Layout>
          <Switch>
            <RouteTitled exact path='/' component={Home} title='Home' />
            <RouteTitled exact path='/about/what-is-cti' component={WhatIsCTI} title='What is CTI?' />
            <RouteTitled
              exact
              path='/about/contact'
              component={Contact}
              title='Contact Us'
            />
            <RouteTitled exact path='/about/faq' component={Faq} title='FAQ' />
            <RouteTitled
              exact
              path={'/organizations'}
              component={Contributors}
              title='Organizations'
            />
            <RouteTitled exact path='/home' component={Home} title='Home' />
            <RouteTitled
              exact
              path='/search-projects'
              component={SearchProjects}
              title='Search Projects'
            />
            <RouteTitled
              exact
              path='/join-index/tag-generator-wizard'
              component={TagGeneratorWizard}
              title='Tag Generator Wizard'
            />
            <RouteTitled
              exact
              path='/join-index/how-to-add'
              component={HowToAdd}
              title='How to Add Your Project'
            />
            <RouteTitled
              exact
              path='/radical-collaboration/collaborate'
              component={Collaborate}
              title='Collaborate with Us'
            />
            <RouteTitled
              exact
              path='/radical-collaboration/donate'
              component={Donate}
              title='Donate'
            />
            <RouteTitled
              exact
              path='/radical-collaboration/share'
              component={ShareTheCti}
              title='Share the CTI'
            />
            <RouteTitled
              exact
              path='/privacy'
              component={Privacy}
              title='Privacy'
            />
            <Route exact path='/organization/:name' component={IndvOrgPage} />
            {/* test and error page routes begin */}
            <RouteTitled
              path='/guides/:guide'
              component={Guides}
              title='Guides'
            />
            <RouteTitled path='/404' component={Error404} title='404' />
            {/* test and error page routes end */}
            <Redirect from='/add' to='/join-index/how-to-add' />
            <Redirect from='/adding' to='/join-index/how-to-add' />
            <Redirect from='/adding-projects' to='/join-index/how-to-add' />
            <Redirect from='/contact' to='/about/contact' />
            <Redirect from='/collaborate' to='/radical-collaboration/collaborate' />
            <Redirect from='/donate' to='/radical-collaboration/donate' />
            <Redirect from='/donation' to='/radical-collaboration/donate' />
            <Redirect from='/faq' to='/about/faq' />
            <Redirect from='/home' to='/' />
            <Redirect from='/how' to='/join-index/how-to-add' />
            <Redirect from='/how-to' to='/join-index/how-to-add' />
            <Redirect from='/how-to-use' to='/join-index/how-to-add' />
            <Redirect from='/join' to='/join-index/tag-generator-wizard' />
            <Redirect from='/projects' to='/search-projects' />
            <Redirect from='/search' to='/search-projects' />
            <Redirect from='/share' to='/radical-collaboration/share' />
            <Redirect from='/join-index' to='/join-index/tag-generator-wizard' />
            <Redirect from='/join-index?tagsToAdd=civictechindex' to='/join-index/tag-generator-wizard' />
            <Redirect from='/tag-creator' to='/join-index/tag-generator-wizard' />
            <Redirect from='/tagcreator' to='/join-index/tag-generator-wizard' />
            <Redirect from='/tag-generator' to='/join-index/tag-generator-wizard' />
            <Redirect from='/taggenerator' to='/join-index/tag-generator-wizard' />
            {/* test and error page redirect begin */}
            <Redirect from='/guides' to='/guides/colors' />
            <Redirect to='/404' />
            {/* test and error page redirect end */}
          </Switch>
        </Layout>
      </QueryParamProvider>
    </BrowserRouter>
  );
};

export default App;
