import React from 'react';
import { Grid,Typography } from "@material-ui/core";
import {ThemeProvider,createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export default function GetStartedCard (props) {
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);
  theme.typography.h2 = {
    fontSize: '21px',
    '@media (min-width:675px)': {
      fontSize: '28px',
    },
    '@media (min-width:900px)': {
      fontSize: '36px',
    },
  };

  const title = props.title
  


  return (
    <Grid item xs={12}  md={7} style={{ padding: '30px 30px',  margin:'auto'}}>
      <ThemeProvider theme={theme}>
         <Typography variant="h2" align='center' style={{margin:'auto'}}>{title}</Typography>
      </ThemeProvider>
          
    </Grid>
  )
};

