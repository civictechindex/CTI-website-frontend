import React, { useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import Layout from './components/common/Layout';
import ScrollToTop from './components/common/ScrollToTop';
import About from './pages/About';
import Contact from './pages/RadicalCollaboration/Contact';
import Contributors from './pages/Contributors';
import Donation from './pages/Donation';
import Faq from './pages/RadicalCollaboration/Faq';
import IndvOrgPage from './pages/IndvOrganization';
import Home from './pages/Home';
import HowToUse from './pages/HowToUse';
import Landing from './pages/Landing';
import RadicalCollaboration from './pages/RadicalCollaboration';
import SearchProjects from './pages/SearchProjects';
import TagCreator from './pages/TagCreator';
import Error404 from './pages/Error404';
import ShareTheCti from './pages/RadicalCollaboration/Share';
import Guides from './guides/';
import useStyles from './styles';

const RouteTitled = ({ title, ...rest }) => {
  useEffect(() => {
    if (title) {
      document.title = 'Civic Tech Index — ' + title;
    }
  });

  return <Route {...rest} />;
};

const App = () => {
  useStyles();
  return (
    <BrowserRouter>
      <ScrollToTop />
      <QueryParamProvider ReactRouterRoute={Route}>
        <Layout>
          <Switch>
            <Route exact path='/' component={Landing} />
            <RouteTitled exact path='/about' component={About} title='About' />
            <RouteTitled exact path='/about/contact' component={Contact} title='Contact Us' />
            <RouteTitled exact path='/about/faq' component={Faq} title='FAQ' />
            <RouteTitled exact path='/organizations/:affiliation' component={Contributors} title='Organizations' />
            <RouteTitled exact path='/home' component={Home} title='Home' />
            <RouteTitled exact path='/projects' component={SearchProjects} title='Search Projects' />
            <RouteTitled exact path='/join-index' component={TagCreator} title='Join the Index' />
            <RouteTitled exact path='/join-index/how-to-add' component={HowToUse} title='How to Add Your Project' />
            <RouteTitled exact path='/support' component={RadicalCollaboration} title='Collaborate with Us' />
            <RouteTitled exact path='/support/donate' component={Donation} title='Donate' />
            <RouteTitled exact path='/support/share' component={ShareTheCti} title='Share the CTI' />
            <Route exact path='/organization/:name' component={IndvOrgPage} />
            {/* test and error page routes begin */}
            <Route path='/guides/:guide' component={Guides} />
            <Route path='/404' component={Error404} />
            {/* test and error page routes end */}
            <Redirect from='/add' to='/join-index/how-to-add' />
            <Redirect from='/adding' to='/join-index/how-to-add' />
            <Redirect from='/adding-projects' to='/join-index/how-to-add' />
            <Redirect from='/contact' to='/about/contact' />
            <Redirect from='/donate' to='/support/donate' />
            <Redirect from='/donation' to='/support/donate' />
            <Redirect from='/faq' to='/about/faq' />
            <Redirect from='/how' to='/join-index/how-to-add' />
            <Redirect from='/how-to' to='/join-index/how-to-add' />
            <Redirect from='/how-to-use' to='/join-index/how-to-add' />
            <Redirect from='/join' to='/join-index' />
            <Redirect from='/search' to='/projects' />
            <Redirect from='/share' to='/support/share' />
            <Redirect from='/tag-creator' to='/join-index' />
            <Redirect from='/tagcreator' to='/join-index' />
            <Redirect from='/tag-generator' to='/join-index' />
            <Redirect from='/taggenerator' to='/join-index' />
            {/* test and error page redirect begin */}
            <Redirect from='/guides' to='/guides/colors' />
            <Redirect from='/placeholder' to='/blank' />
            <Redirect from='/template' to='/blank' />
            <Redirect to='/404' />
            {/* test and error page redirect end */}
          </Switch>
        </Layout>
      </QueryParamProvider>
    </BrowserRouter>
  );
};

export default App;
