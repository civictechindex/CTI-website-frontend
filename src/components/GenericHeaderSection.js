import React from 'react';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { NavBreadcrumbs,TitleSection } from './index'
import { makeStyles } from '@material-ui/core/styles';



const GenericHeaderSection = ({ mainTitle,children, breadCrumbLinks,lg,md,sm,subText }) => {
  const lgHeight  = lg || 'auto';
  const mdHeight =  !md ? lg : md;
  const smHeight =  !md ? lg : sm;
  const useStyles = makeStyles((theme) => ({
    headerContainerStyle: {
      height:'auto',
      minHeight:lgHeight,
      [theme.breakpoints.down('md')]: {
        minHeight:mdHeight,
      },
      [theme.breakpoints.down('sm')]: {
        minHeight:smHeight,
      },
    },

  }));
  const classes = useStyles();

  return (
    <Box className='boxBackground'>
      <Container className={classes.headerContainerStyle}>
        <NavBreadcrumbs crumbs={breadCrumbLinks} />
        <Grid container justify="center">
          {subText && (<Typography variant='h4' fontFamily='Space Mono' color='textSecondary' >Civic Tech Index</Typography>)}
          <TitleSection>{mainTitle}</TitleSection>
          {children}
        </Grid>
      </Container>
    </Box>
  )
}
export default GenericHeaderSection;
