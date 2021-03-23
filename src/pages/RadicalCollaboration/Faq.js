/* eslint-disable sort-keys */
import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {
  GetStartedCard,
  NavBreadcrumbs,
  SearchBar,
  TitleSection,
} from "../../components";
import useSearchFaq from './useSearchFaq'
import FAQCard from '../../components/FAQCard'

const useStyles = makeStyles({
  searchBar: {
    marginBottom: '40px',
  },
});

const Faq = () => {

  const crumbs = [
    { name: "Home", href: "/home" },
    { name: "Radical Collaboration", href: "/radicalcollaboration" },
    { name: "FAQ", href: "/radicalcollaboration/faq" },
  ];

  const [query, setQuery] = useState('');
  const searchUrl = query && `http://test-civictechindexadmin.herokuapp.com/api/faqs/?search=${query}`;
  const { status, data } = useSearchFaq(searchUrl);
  const classes = useStyles();

  const handleChange = (event, value) => {
    console.log(value);
  }

  return (
    <Box className='boxBackground'>
      <Container >
        <NavBreadcrumbs crumbs={crumbs} color="#FEFEFE" />
        <TitleSection>How can we help?</TitleSection>
        <Grid container justify='center' className={classes.searchBar}>
          <Grid item xs={12} sm={9}>
            <SearchBar
              dataCy='search-faq'
              value={query}
              onInput={(e) => setQuery(e.target.value)}
              placeholder="Search the Civic Tech Index"
            />
          </Grid>
        </Grid>
        {
          status === 'fetchedFaq'
          && <FAQCard
            title={'Top Asked Questions:'}
            faqs={data}
            pages={10}
            onChange={handleChange}
          />
        }
        {
          status === 'fetchedSearch'
          && <FAQCard
            title={`Search results (${data.length})`}
            faqs={data}
            pages={5}
            onChange={handleChange}
          />
        }
        <GetStartedCard headerTitle="Can’t find an answer?" buttonText="Contact Us" buttonHref="/contactus" />
      </Container>
    </Box>
  );
}

export default Faq;
