/* eslint-disable max-lines-per-function */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import axios from 'axios';
import _ from 'lodash';
import { ArrayParam, NumberParam, StringParam, useQueryParam, withDefault } from 'use-query-params';
import { GetStartedCard, GenericHeaderSection } from '../../components';
import SearchBar from '../SearchProjects/SearchBar';
import FAQCard from '../../components/FAQCard';

const useStyles = makeStyles({
  searchBar: {
    marginBottom: '40px',
  },
});

const Faq = () => {
  const classes = useStyles();
  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up('sm'), {
    noSsr: true,
  });
  const apiUrl = `${process.env.REACT_APP_API_URL}/api/faqs/`;
  const [faqs, setFaqs] = useState([]);
  const [status, setStatus] = useState('fetchedFaq');
  const [totalCount, setTotalCount] = useState(0);
  const [expandedFaqs, setExpandedFaqs] = useQueryParam(
    'opened',
    withDefault(ArrayParam, [])
  );
  const [pageNum, setPageNum] = useQueryParam(
    'page',
    withDefault(NumberParam, 1)
  );
  const [query, setQuery] = useQueryParam(
    'query',
    withDefault(StringParam, '')
  );

  const breadCrumbLinks = [
    { name: 'Home', href: '/' },
    { name: 'FAQ', href: '/about/faq' },
  ];

  const getFaqData = async (currentQuery, resetState) => {
    const params = {
      page: resetState ? 1 : pageNum,
      page_size: largeScreen ? 10 : 5,
      search: currentQuery,
    };
    if (resetState) {
      setExpandedFaqs([]);
      setPageNum(1);
    }
    const res = await axios.get(apiUrl, { params: params });
    setFaqs(res.data.results);
    setTotalCount(res.data.count);
    setStatus(params.search ? 'fetchedSearch' : 'fetchedFaq');
  };

  const debounce = useCallback(
    _.debounce((value) => {
      getFaqData(value, true);
    }, 300),
    []
  );

  useEffect(() => {
    getFaqData(query, false);
  }, [pageNum, largeScreen]);

  const handleFaqClick = (faq) => {
    const expanded = [...expandedFaqs];
    const idx = expanded.indexOf(faq.id.toString());
    if (idx > -1) {
      expanded.splice(idx, 1);
    } else {
      const requestBody = {
        question: faq.question,
        answer: faq.answer,
        view_count: faq.view_count,
      };
      axios.post(
        `${process.env.REACT_APP_API_URL}/api/faqs/${faq.id}/increment_count/`,
        requestBody
      );
      expanded.push(faq.id.toString());
    }
    setExpandedFaqs(expanded);
  };

  const handleInput = (event) => {
    setQuery(event.target.value);
    debounce(event.target.value);
  };

  const handlePageNumChange = (event, value) => {
    setPageNum(value);
  };

  return (
    <Box className='boxBackground'>
      <Container className='containerDefault'>
        <GenericHeaderSection
          mainTitle='How can we help?'
          breadCrumbLinks={breadCrumbLinks}
        >
          <Grid container justify='center' className={classes.searchBar}>
            <Grid item xs={12} sm={9}>
              <SearchBar
                dataCy='search-faq'
                onInput={handleInput}
                placeholder='Search the Civic Tech Index'
                value={query}
              />
            </Grid>
          </Grid>
        </GenericHeaderSection>
      </Container>
      <FAQCard
        currentPageNum={pageNum}
        expandedFaqs={expandedFaqs}
        faqs={faqs}
        onFaqClick={handleFaqClick}
        onPageChange={handlePageNumChange}
        pages={Math.ceil(totalCount / (largeScreen ? 10 : 5))}
        title={ status === 'fetchedFaq' ? 'Top Asked Questions' : `Search results (${totalCount})`}
      />
      <GetStartedCard
        headerTitle='Can’t find an answer?'
        buttonText='Contact Us'
        buttonHref='/contact'
      />
    </Box>
  );
};
export default Faq;
