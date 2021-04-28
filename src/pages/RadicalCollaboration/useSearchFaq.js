/* eslint-disable sort-keys */
import { useEffect, useReducer } from 'react';
import axios from "axios";

// PREVENTS RERENDER FLICKERING AS USER TYPES IN SEARCH
const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const useSearchFaq = (url) => {
  const initialState = {
    status: 'idle',
    data: [],
  };
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
    case 'FETCHEDSEARCH':
      return { ...initialState, status: 'fetchedSearch', data: action.payload };
    case 'FETCHEDFAQ':
      return { ...initialState, status: 'fetchedFaq', data: action.payload };
    default:
      return state;
    }
  }, initialState);

  useEffect(() => {
    let currentQuery = true
    const controller = new AbortController()
    if (!url) {
      const fetchFaqs = async function () {
        const apiUrl = `${process.env.REACT_APP_API_URL}/api/faqs/`;
        await axios.get(apiUrl).then((repos) => {
          const responseJson = repos.data;
          dispatch({ type: 'FETCHEDFAQ', payload: responseJson });
        });
      }
      fetchFaqs();
    }
    else {
      const loadSearchResults = async () => {
        await sleep(350)
        if (currentQuery) {
          const fetchData = async function () {
            await axios.get(url, controller).then((repos) => {
              const data = repos.data;
              dispatch({ type: 'FETCHEDSEARCH', payload: data });
            });

          }
          fetchData();
        }
      }
      loadSearchResults()
    }
    return () => {
      currentQuery = false
      controller.abort()
    }
  }, [url]);
  return state
};

export default useSearchFaq
