import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '../components/common/Link';

const useStyles = makeStyles((theme) => ({
  textGridContainer: {
    paddingBottom: theme.spacing(4),
  },
}));

// generate random links to avoid unwanted :visited pseudo-class in this guide
const getRandomRoute = (length = 12) => {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz-';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return '/' + result;
};

const ShowTypeStandards = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant='h1'>Type Standards</Typography>
      <Typography variant='h2' color='secondary' gutterBottom>
        Text &amp; Background Usage
      </Typography>
      <Grid container spacing={2} className={classes.textGridContainer}>
        <Grid item xs={12} sm={6}>
          <Card className='card240'>
            <CardContent>
              <Typography variant='h6'>Header</Typography>
              <Typography variant='body1'>Paragraph</Typography>
              <Typography variant='body1'>
                <Link to={getRandomRoute()}> Link</Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className='card241'>
            <CardContent>
              <Typography variant='h6'>Header</Typography>
              <Typography variant='body1'>Paragraph</Typography>
              <Typography variant='body1'>
                <Link to={getRandomRoute()}> Link</Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className='card242'>
            <CardContent>
              <Typography variant='h6'>Header</Typography>
              <Typography variant='body1'>Paragraph</Typography>
              <Typography variant='body1'>
                <Link to={getRandomRoute()}> Link</Link>
              </Typography>
              <Typography variant='body2'>generatedtag</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className='card244'>
            <CardContent>
              <Typography variant='h6'>Header</Typography>
              <Typography variant='body1'>Paragraph</Typography>
              <Typography variant='body1'>
                <Link to={getRandomRoute()}> Link</Link>
              </Typography>
              <Typography variant='body2'>generatedtag</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Typography variant='h2' color='secondary' gutterBottom>
        Links
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant='body1'>
                <Link to={getRandomRoute()}>This</Link> is a standard link.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className='frame223'>
            <CardContent>
              <Typography variant='body1'>
                <Link to={getRandomRoute()}>This</Link> is a link on a light background.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant='body1'>
                <Link to='/guides'>This</Link> is a visited link.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant='body1'>
                This is a link to an <Link to={`http://example.com${getRandomRoute()}`}>external website</Link>.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className='frame222'>
            <CardContent>
              <Typography variant='body1'>
                <Link to={getRandomRoute()}>This</Link> is a link on a dark background.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className='frame226'>
            <CardContent>
              <Typography variant='body1'>
                <Link to={getRandomRoute()}>This</Link> is a link on a dark background.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ShowTypeStandards;
