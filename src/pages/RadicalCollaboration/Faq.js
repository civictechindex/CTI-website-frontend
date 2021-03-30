/* eslint-disable sort-keys */
import React, { useCallback, useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import axios from 'axios';
import _ from 'lodash';

import {
  GetStartedCard,
  NavBreadcrumbs,
  SearchBar,
  TitleSection,
} from "../../components";
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
  const [data, setData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('fetchedFaq');
  const [totalCount, setTotalCount] = useState(0);
  const classes = useStyles();
  const apiUrl = 'http://test-civictechindexadmin.herokuapp.com/api/faqs/';

  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const callApi = async (currentQuery) => {
    console.log(`IS SCREEN LARGE: ${largeScreen}`);
    const params = { page: pageNum, page_size: largeScreen ? 10 : 5 };
    if (currentQuery) {
      params.search = currentQuery;
    }
    const res = await axios.get(apiUrl, { params: params });
    setData(res.data.results);
    setTotalCount(res.data.count);
    setStatus(params.search ? 'fetchedSearch' : 'fetchedFaq');
  }

  const debounce = useCallback(_.debounce((value) => {
    callApi(value);
  }, 300), []);

  useEffect(() => {
    callApi(query);
  }, [pageNum, largeScreen]);

  const handleInput = (event) => {
    setQuery(event.target.value);
    debounce(event.target.value);
  };

  const handlePageNumChange = (event, value) => {
    setPageNum(value);
  };

  return (
    <Box className='boxBackground'>
      <Container >
        <NavBreadcrumbs crumbs={crumbs} color="#FEFEFE" />
        <TitleSection>How can we help?</TitleSection>
        <Grid container justify='center' className={classes.searchBar}>
          <Grid item xs={12} sm={9}>
            <SearchBar
              dataCy='search-faq'
              onInput={handleInput}
              placeholder="Search the Civic Tech Index"
            />
          </Grid>
        </Grid>
        <FAQCard
          title={status === 'fetchedFaq' ? 'Top Asked Questions' : `Search results (${totalCount})`}
          faqs={data}
          pages={Math.ceil(totalCount / (largeScreen ? 10 : 5))}
          onPageChange={handlePageNumChange}
        />
        <GetStartedCard headerTitle="Can’t find an answer?" buttonText="Contact Us" buttonHref="/contactus" />
      </Container>
    </Box>
  );
}

export default Faq;
