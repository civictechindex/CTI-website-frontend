/* eslint-disable max-lines-per-function */
import React, { useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import Layout from './components/common/Layout';
import ScrollToTop from './components/common/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Collaborate from './pages/Collaborate';
import Contributors from './pages/Contributors';
import Donate from './pages/Donate';
import Faq from './pages/Faq';
import IndvOrgPage from './pages/IndvOrganization';
import Home from './pages/Home';
import HowToAdd from './pages/HowToAdd';
import Landing from './pages/Landing';
import SearchProjects from './pages/SearchProjects';
import TagGenerator from './pages/TagGenerator';
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
            <Route exact path='/' component={Landing} />
            <RouteTitled exact path='/about' component={About} title='About' />
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
              path='/projects'
              component={SearchProjects}
              title='Search Projects'
            />
            <RouteTitled
              exact
              path='/join-index'
              component={TagGenerator}
              title='Join the Index'
            />
            <RouteTitled
              exact
              path='/join-index/how-to-add'
              component={HowToAdd}
              title='How to Add Your Project'
            />
            <RouteTitled
              exact
              path='/support/collaborate'
              component={Collaborate}
              title='Collaborate with Us'
            />
            <RouteTitled
              exact
              path='/support/donate'
              component={Donate}
              title='Donate'
            />
            <RouteTitled
              exact
              path='/support/share'
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
            <Redirect from='/collaborate' to='/support/collaborate' />
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
