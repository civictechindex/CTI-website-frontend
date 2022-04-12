import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '../../components/common/Link';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import spectrum from '../../theme-spectrum';

const useStyles = makeStyles((theme) => ({
  root: {
    bottom: '2px',
    border: `1px solid ${spectrum.darkGray}`,
    height: '206px',
    position: 'fixed',
    right: '2px',
    width: '360px',
    zIndex: 50000,
  },
  title: {
    fontSize: '20px',
    fontWeight: '700',
  },
  headStyle: {
    padding: 8,
  },
  iconStyle: {
    verticalAlign: 'bottom',
  },
  copyStyle: {
    paddingTop: 5,
    width: '308px',
  },
  hoverContent: {
    fontSize: 12,
    textAlign: 'justify',
    lineHeight: '16.2px',
  },
  linkStyle: {
    padding: 0,
    color: '#FFB100',
    marginLeft: 3,
    textDecoration: 'none',
  },
  imageStyle: {
    width: '26px',
    height: '26px',
    marginRight: '2%',
    verticalAlign: 'middle',
  },
  buttonLinkStyle: {
    justifyContent: 'flex-end',
  },
  buttonStyle: {
    fontWeight: '700',
    height: '36px',
    width: '150px',
  },
  linkText: {
    color: '#0F1D2F',
    fontWeight: '700',
    paddingRight: '25px',
  },
}));

const PopUp = () => {
  const classes = useStyles();
  const date = new Date();

  const setCookie = (cookieEmail, cookieValue, expDays) => {
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + date.toUTCString();
    const cookie = `${cookieEmail}=${cookieValue};${expires}`;
    document.cookie = cookie;
    return cookie;
  };

  const deleteCookie = (cookieEmail) => {
    date.setTime(date.getTime());
    const expires = 'expires=' + date.toUTCString();
    document.cookie = `${cookieEmail};${expires}`;
  };

  const acceptCookieConsent = () => {
    deleteCookie('civictechindex_cookie_consent');
    setCookie('civictechindex_cookie_consent', 1,30);
    document.getElementById('cookieNotice').style.display = 'none';
  };


  return (
    <Card className={classes.root} id='cookieNotice'>
      <CardHeader className={classes.headStyle}></CardHeader>
      <Typography className={classes.title}>
        <img
          src='/images/cookie.png'
          alt='Cookie logo'
          className={classes.imageStyle}
        />
        <span>Cookies and Privacy Policy </span>
      </Typography>
      <CardContent className={classes.copyStyle}>
        <Typography
          className={classes.hoverContent}
          data-cy='cookie-privacy-textdescription'
        >
          We use cookies and other tracking technologies to improve your
          browsing experience and to better understand our website traffic. By
          browsing our website, you consent to our use of cookies and other
          tracking technologies.
        </Typography>
        <CardActions className={classes.buttonLinkStyle}>
          <Link
            className={classes.linkText}
            data-cy='privacy-link'
            key='privacy'
            to='/privacy'
          >
            LEARN MORE{' '}
          </Link>
          <Button
            className={classes.buttonStyle}
            data-cy='accept-cookie'
            onClick={acceptCookieConsent}
          >
            Accept
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PopUp;
