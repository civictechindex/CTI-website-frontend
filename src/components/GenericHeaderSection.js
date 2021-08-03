import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { NavBreadcrumbs, TitleSection } from './index';
import { makeStyles } from '@material-ui/core/styles';

const GenericHeaderSection = ({ mainTitle, children, breadCrumbLinks }) => {
  const useStyles = makeStyles((theme) => ({
    headerContainerStyle: {
      height: 'auto',
    },
  }));
  const classes = useStyles();

  return (
    <Box className='boxBackground' minHeight='300px'>
      <Container className={classes.headerContainerStyle}>
        <NavBreadcrumbs crumbs={breadCrumbLinks} />
        <Grid container justify='center'>
          <TitleSection>{mainTitle}</TitleSection>
          {children}
        </Grid>
      </Container>
    </Box>
  );
};
export default GenericHeaderSection;
