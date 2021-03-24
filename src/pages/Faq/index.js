/* eslint-disable sort-keys */
import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import {
  GetStartedCard,
  NavBreadcrumbs,
  TitleSection,
} from "../../../components";
import useSearchFaq from './useSearchFaq'
import FAQCard from '../../../components/FAQCard'

const defaultStyle = {
  backgroundColor: '#FFFFFF',
  width: '70%',
}

export default function Faq({ match }) {

  const crumbs = [
    { name: "Home", href: "/home" },
    { name: "Radical Collaboration", href: "/radicalcollaboration" },
    { name: "FAQ", href: "/radicalcollaboration/faq" },
  ];

  const [query, setQuery] = useState('');
  const searchUrl = query && `http://test-civictechindexadmin.herokuapp.com/api/faqs/?search=${query}`;
  const { status, data } = useSearchFaq(searchUrl);
  const SearchBar = (props) => {
    return (
      <>
        <div align='center'>
          <TextField
            data-cy='search-faq'
            autoFocus
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"><SearchRoundedIcon /></InputAdornment>), style: { defaultStyle },
            }}
            value={query}
            onInput={e => setQuery(e.target.value)}
            variant='outlined'
            style={defaultStyle}
            placeholder={props.placeholder}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </>
    );
  }

  return (
    <Box>
      <Container >
        <NavBreadcrumbs crumbs={crumbs} color="#FEFEFE" />
        <TitleSection>How can we help?</TitleSection>
        <SearchBar placeholder={"Search the knowledge base"} />
        {status === 'fetchedFaq' && <FAQCard title={"Frequently Asked Questions:"} faqs={data} />}
        {status === 'fetchedSearch' && (
          <>
            {data.length === 0 && <div> No Search Results found!</div>}
            {<FAQCard title={`Search results for ${query}`} faqs={data} />}
          </>
        )}
        <GetStartedCard headerTitle="Can’t find an answer?" buttonText="Contact Us" buttonHref="/contactus" />
      </Container>
    </Box>
  );
}
