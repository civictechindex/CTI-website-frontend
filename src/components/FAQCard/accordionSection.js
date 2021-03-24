import React, { useState, useEffect } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  accordion: {
    marginBottom: '20px',
    padding: '5px 0',
    border: '1px solid',
    borderColor: theme.palette.outline.gray,
  },
}));

const AccordionSection = (props) => {
  const [currentFaq, setCurrentFaq] = useState([]);
  const [sendRequest, setSendRequest] = useState(false);
  const faqs = props.faqs;
  const classes = useStyles();

  useEffect(() => {
    const incrementViewCount = async function () {
      const requestBody = {
        question: currentFaq.question,
        answer: currentFaq.answer,
        view_count: currentFaq.view_count,
      };
      await axios.post(`http://test-civictechindexadmin.herokuapp.com/api/faqs/${currentFaq.id}/increment_count/`, requestBody);
    };
    if (sendRequest) {
      // send the request
      incrementViewCount()
      setSendRequest(false);
    }
  }, [sendRequest, currentFaq]);

  return (
    <Grid item xs={12} sm={9} lg={11}>
      {faqs.map((faq) => (
        <Box key={faq.id}>
          <Accordion className={classes.accordion}>
            <AccordionSummary
              data-cy='faq-question'
              expandIcon={<ExpandMoreRoundedIcon />}
              disabled={sendRequest}
              onClick={() => { setSendRequest(true); setCurrentFaq(faq) }}
            >
              <Typography variant='h6'>{faq.question}</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails data-cy='faq-answer'><Typography>{faq.answer}</Typography></AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </Grid>
  )
}

export default AccordionSection;
