import React, { useState,useEffect } from 'react';
import { ContactSupportOutlined } from '@material-ui/icons';

const useFaqs = () => {
  // 1
  const [faqs, setFaqs] = React.useState([]);

  React.useEffect(() => {
    async function fetchFaqs() {
      const fullResponse = await fetch('http://test-civictechindexadmin.herokuapp.com/api/faqs/');
      const responseJson = await fullResponse.json();
      console.log(responseJson)
      setFaqs(responseJson);
    }

    fetchFaqs();
  }, []);

  // useEffect(() => {
  //   //make API calls
  //   fetch(
  //     `http://test-civictechindexadmin.herokuapp.com/api/faqs/`,
  //     {
  //       method: "GET",
      
  //     }
  //   )
  //     .then((response) => {
  //       if (response.ok) {
  //         console.log(response);
  //         return response.json();
  //       } else {
  //         throw new Error("Something went wrong");
  //       }
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setFaqs(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },[]);

  // 2
  return [faqs];
};

export default useFaqs;