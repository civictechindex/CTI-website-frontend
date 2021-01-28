/* eslint-disable sort-keys */
import { useEffect,useReducer } from 'react';



// eslint-disable-next-line max-lines-per-function
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

  // PREVENTS RERENDER FLICKERING AS USER TYPES IN SEARCH
  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  useEffect(() => {
    let currentQuery = true
    const controller = new AbortController()

    if (!url) {
      const fetchFaqs = async function () {
        const fullResponse = await fetch('http://test-civictechindexadmin.herokuapp.com/api/faqs/');
        const responseJson = await fullResponse.json();
        dispatch({ type: 'FETCHEDFAQ', payload: responseJson });
      }

      fetchFaqs();
    }
    else {
      const loadSearchResults = async () => {
        await sleep(350)
        if (currentQuery) {
          const fetchData = async function () {
            const response = await fetch(url,controller);
            const data = await response.json();
            dispatch({ type: 'FETCHEDSEARCH', payload: data });
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
