import React from 'react';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import NavBreadcrumbs from '../../components/NavBreadcrumbs'
import { TitleSection } from '../../components'

import { makeStyles } from '@material-ui/core/styles'
const crumbs = [{ href: '/home', name: 'Home' }, { href: '/tag-generator', name: 'Tag Generator' }]

const useStyles = makeStyles((theme) => ({
  textStyle:{
    textAlign: 'center',
  },
}))

export const HeaderSection = () => {
  const classes = useStyles()
  return (
    <Box className='boxBackground'>
      <Container style={{ paddingBottom:'40px' }}>
        <NavBreadcrumbs crumbs={crumbs} color="secondary" />
        <Grid container>
          <Grid item xs={12}><Typography variant='h4' fontFamily='Space Mono' color='textSecondary' className={classes.textStyle}>Civic Tech Index</Typography></Grid>
          <TitleSection>Tag Generator</TitleSection>
          <Grid item xs={12}>
            <Typography variant='h6' color='textSecondary' style={{ fontWeight:'500' , textAlign:'center' }} >Join the Civic Tech Index by submitting your open-source project.<br /> This process takes less than one minute to complete.</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
