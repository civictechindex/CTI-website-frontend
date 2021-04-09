/* eslint-disable sort-keys */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import axios from 'axios';
import _ from 'lodash';

import { GetStartedCard, NavBreadcrumbs, TitleSection } from '../../components';
import SearchBar from '../SearchProjects/SearchBar';
import FAQCard from '../../components/FAQCard';

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
  const largeScreen = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true });

  const getFAQData = async (currentQuery, resetPageNum) => {
    const params = {
      page: resetPageNum ? 1 : pageNum,
      page_size: largeScreen ? 10 : 5,
      search: currentQuery,
    };
    // reset pagination current page to 1 in certain cases such as new search query input
    if (resetPageNum) {
      setPageNum(1);
    }
    const res = await axios.get(apiUrl, { params: params });
    setData(res.data.results);
    setTotalCount(res.data.count);
    setStatus(params.search ? 'fetchedSearch' : 'fetchedFaq');
  }

  const debounce = useCallback(_.debounce((value) => {
    getFAQData(value, true);
  }, 300), []);

  useEffect(() => {
    getFAQData(query, false);
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
        <NavBreadcrumbs crumbs={crumbs} color='primary' />
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
          currentPageNum={pageNum}
          onPageChange={handlePageNumChange}
        />
        <GetStartedCard headerTitle="Can’t find an answer?" buttonText="Contact Us" buttonHref="/contactus" />
      </Container>
    </Box>
  );
}

export default Faq;
