import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Pagination from '@material-ui/lab/Pagination';
import AccordionSection from './accordionSection'

const PaginationSection = () =>{
  return (
    <Grid item xs={12} lg={7} >
      <Box my={2} display="flex" justifyContent="center">
        <Pagination count={5} variant="outlined" shape="rounded" color="primary" />
      </Box>
    </Grid>
  )
}
export default function FAQCard(props) {
  return (
    <>
      <div style={{ backgroundColor:'#F2F2F2' }}>
        <Grid container  alignItems="center" justify="center" style={{ padding:'60px' }} >
          <Grid item xs={12} lg={7} style={{ paddingBottom:'25px' }}>
            <Typography variant="h5"  style={{ color:'#004364' }}>{props.title}</Typography>
          </Grid>
          <AccordionSection faqs={props.faqs}/>
          <PaginationSection/>
        </Grid>
      </div>
    </>
  );
}

