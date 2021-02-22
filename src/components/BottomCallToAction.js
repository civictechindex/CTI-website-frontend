import React from 'react';
import { Box, Button, Grid, Typography, useTheme } from '@material-ui/core';

const defaultBackgroundColor = 'transparent'; // see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color - 'transparent' is initial value
const defaultButtonHref = 'mailto:civictechindex@hackforla.org';
const defaultButtonText = 'Contact Us';

const BottomCallToAction = ({ color, buttonHref = defaultButtonHref, buttonText = defaultButtonText, heading }) => {
  const theme = useTheme();
  let bgColor = defaultBackgroundColor;
  if (color === 'primary') {
    bgColor = theme.palette.background.default;
  }
  const boxStyle = {
    backgroundColor: bgColor,
  };

  return (
    <Box style={boxStyle} py={8} mx={-3}>
      <Grid container direction='column' justify='center' alignItems='center' spacing={4}>
        <Grid item>
          <Typography variant='h2'>{heading}</Typography>
        </Grid>
        <Grid item>
          <Button href={buttonHref}>{buttonText}</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BottomCallToAction;
