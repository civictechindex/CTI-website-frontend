import React from 'react';
import { Grid,Typography } from "@material-ui/core";
import {ThemeProvider,createMuiTheme } from '@material-ui/core/styles';

export default function GetStartedCard (props) {
  let theme = createMuiTheme();
  theme.typography.h2 = {
    fontSize: '28px',
    margin:'auto',
    '@media (min-width:675px)': {
      fontSize: '28px',
    },
    '@media (min-width:900px)': {
      fontSize: '36px',
    },
  };

  /**
   * title and text color
   * @param {*} props.title
   * @param {*} props.textVariant
   */

  const title = props.title
  
  return (
    <Grid item xs={12}  md={7} style={{ padding: '30px 30px',  margin:'auto'}}>
      <ThemeProvider theme={theme}> 
         <Typography variant="h2" align='center' style={props.textVariant === 'black' ? {color:'#0F1D2F'} : {color: '#FFE06D'}}>{title}</Typography>
      </ThemeProvider>  
    </Grid>
  )
};

