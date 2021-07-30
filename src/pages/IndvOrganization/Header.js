import React from 'react';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import NavBreadcrumbs from '../../components/NavBreadcrumbs';
import { TitleSection } from '../../components';

export const Header = (props) => {

  return (
    props.showHeaderResults ? (
      <Box className='indv-header-bg'>
        <Container style={{ paddingBottom:'40px' }}>
          <NavBreadcrumbs crumbs={props.crumbs} color="#0F1D2F" />
          <Grid container>
            <Grid item xs={12}>
              <Grid item xs={12} sm={12}>
                <a href={props.githubLink}><img alt="logo" style={{ display: 'block', margin: 'auto' }} src={props.imageUrl} width='133.2px' /></a>
              </Grid>
            </Grid>
            <TitleSection>{props.orgName}</TitleSection>
            <Grid item xs={12}>
              <Typography variant="h4" component="h4" align="center" color="inherit"><a href={props.websiteUrlResults} style={{ color: 'white', textDecoration: 'inherit' }}>{props.websiteUrlResults}</a></Typography>
              <Typography variant="h4" component="h4" align="center" color="inherit"><a href={props.githubLink} style={{ color: 'white', textDecoration: 'inherit' }}>{props.githubLink}</a></Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>) : (<Box className='indv-header-bg'/>)

  )
}
