import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import NavBreadcrumbs from '../../components/NavBreadcrumbs';
import HeaderTitle from './HeaderTitle';
import makeStyles from '@material-ui/core/styles/makeStyles';

const DARK_BLUE = '#0F1D2F';
const useStyles = makeStyles((theme) => ({
  indvOrgBackgroundImgStyle: {
    backgroundImage: 'url(/images/indv-org-page-bg.png)',
    minHeight: '580px',
    [theme.breakpoints.down('md')]: {
      minHeight: '512px',
    },
  },
  logImgStyle: {
    display: 'block',
    margin: 'auto',
    width: '133.2px',
    [theme.breakpoints.down('md')]: {
      width: '100.8px',
    },
  },
  headerLinkStyle: {
    color: '#FEFEFE',
    textDecoration: 'inherit',
    wordBreak: 'break-word',
  },
  headerLinkGridStyle: {
    textAlign: 'center',
    marginTop: '16px',
    lineHeight: '30px',
  },
  breadCrumbContainerStyle: {
    paddingBottom: '63.4px',
    [theme.breakpoints.down('md')]: {
      paddingBottom: '61.6px',
    },
  },
  headerTitleGridStyle: {
    marginTop: '39.4px',
    lineHeight: '60px',
    [theme.breakpoints.down('md')]: {
      marginTop: '37.6px',
      lineHeight: '50px',
    },
  },
}));

export const Header = (props) => {
  const classes = useStyles();
  return props.showHeaderResults ? (
    <Box className={classes.indvOrgBackgroundImgStyle}>
      <Container className={classes.breadCrumbContainerStyle}>
        <NavBreadcrumbs crumbs={props.crumbs} color={DARK_BLUE} />
      </Container>
      <img alt='logo' className={classes.logImgStyle} src={props.imageUrl} />
      <Grid className={classes.headerTitleGridStyle}>
        <HeaderTitle>{props.orgName}</HeaderTitle>
      </Grid>
      <Grid className={classes.headerLinkGridStyle}>
        <Typography
          component='a'
          variant='h5'
          className={classes.headerLinkStyle}
          href={props.websiteUrlResults}
        >
          {props.websiteUrlResults}
        </Typography>
      </Grid>
      <Grid className={classes.headerLinkGridStyle}>
        <Typography
          component='a'
          variant='h5'
          className={classes.headerLinkStyle}
          href={props.githubLink}
        >
          {props.githubLink}
        </Typography>
      </Grid>
    </Box>
  ) : (
    <Box className={classes.indvOrgBackgroundImgLargeScreen} />
  );
};
