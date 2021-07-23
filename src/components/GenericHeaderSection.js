import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { NavBreadcrumbs, TitleSection } from './index';
import { makeStyles } from '@material-ui/core/styles';

const GenericHeaderSection = ({ mainTitle, children, breadCrumbLinks, addPad }) => {
  const useStyles = makeStyles((theme) => ({
    headerContainerStyle: {
      height: 'auto',
    },
    addPad: {
      minHeight: '32px',
    },
  }));
  const classes = useStyles();

  return (
    <Box className='boxBackground' minHeight='300px' display='flex' alignContent='center'>
      <Container className={classes.headerContainerStyle} display='flex' alignContent='center'>
        <NavBreadcrumbs crumbs={breadCrumbLinks} />
        <Grid container justify='center' display='flex' alignContent='center'>
          {addPad && <Container className={classes.addPad} />}
          <TitleSection>{mainTitle}</TitleSection>
          {children}
        </Grid>
      </Container>
    </Box>
  );
};
export default GenericHeaderSection;
