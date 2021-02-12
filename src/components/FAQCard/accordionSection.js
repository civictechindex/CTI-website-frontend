
import React, { useState, useEffect } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Grid, Divider } from "@material-ui/core";



export default function AccordionSection(props) {

  const [currentFaq, setCurrentFaq] = useState([]);
  const [sendRequest, setSendRequest] = useState(false);
  const faqs = props.faqs

  useEffect(() => {
    const incrementViewCount = async function () {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "question":currentFaq.question,
          "answer": currentFaq.answer,
          "view_count": currentFaq.view_count }),
      }
      await fetch(`http://test-civictechindexadmin.herokuapp.com/api/faqs/${currentFaq.id}/increment_count/`, requestOptions);
    }
    if (sendRequest){
      // send the request
      incrementViewCount()
      setSendRequest(false);
    }
  }, [sendRequest,currentFaq]);
  return (
    <Grid item xs={12} lg={7} >
      {faqs.map((faq) => {
        return (
          <div key={faq.id}>
            <Accordion style={{ marginBottom: "20px",padding:'0px' }}>
              <AccordionSummary data-cy='faq-question' expandIcon={<ExpandMoreIcon />} disabled={sendRequest} onClick={() => {setSendRequest(true);setCurrentFaq(faq)}}>
                <h6 style={{ fontSize:'20px',margin:'0', padding:'0 25px' }}>{faq.question}</h6>
              </AccordionSummary>
              <Divider />
              <AccordionDetails data-cy='faq-answer'> <Typography style={{ padding:'0 25px' }}>{faq.answer}</Typography></AccordionDetails>
            </Accordion>
          </div>
        );
      })}
    </Grid>
  )
}
