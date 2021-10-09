import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GenericHeaderSection from '../../components/GenericHeaderSection';
import ImageComponent from '../../components/ImageComponent';
import SettingsGearIcon from '../../icons/SettingsGearIcon';
import { useClipboard } from 'use-clipboard-copy';

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    padding: '3em 4em',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      padding: '32px 0',
    },
  },
  boldFont: {
    fontWeight: 'bold',
  },
  typoStyle: {
    textAlign: 'justify',
    '& a:visited': {
      color: theme.palette.secondary.main,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
  },
  boxPadding: {
    padding: '24px 16px 0',
  },
}));

const HowToAdd = () => {
  const clipboard = useClipboard();
  const classes = useStyles();
  const breadCrumbLinks = [
    { href: '/', name: 'Home' },
    { href: '/join-index/how-to-add', name: 'How to Add Your Project' },
  ];
  const copyText = (e, text) => {
    e.preventDefault();
    clipboard.copy(text);
  };
  return (
    <Box className='pageContainer'>
      <Box className='boxBackground'>
        <Container className='containerDefault'>
          <GenericHeaderSection
            mainTitle='How to Add Your Project'
            breadCrumbLinks={breadCrumbLinks}
          />
          <Typography className='genSubheadTypo'>
            By adding the
            <Box component='span' className={classes.boldFont}>
              {` 'civictechindex' `}
            </Box>
            topic tag to your project, we can create a continuously updated
            repository for all civic tech enthusiasts to find open source
            projects to model, connect with, and learn from. Need an overview of
            what the CTI is? See our <Link to='/about/what-is-cti'>About</Link> page.
          </Typography>
        </Container>
      </Box>
      <Box className='containerGray'>
        <Container>
          <Box className={classes.boxContainer}>
            <Box>
              <Typography variant='body1' className={classes.typoStyle}>
                1. Under your project&apos;s repository, click <SettingsGearIcon />{' '}
                to add topic tags.
              </Typography>
            </Box>
            <Box className={classes.boxPadding}>
              <Typography variant='body1' className={classes.typoStyle}>
                If you don&apos;t see the <SettingsGearIcon /> button it means you
                don&apos;t have &quot;edit repository settings&quot; privileges (and
                can&apos;t perform the steps below).
              </Typography>
              <Typography variant='body1' className={classes.typoStyle}>
                Click{' '}
                <Link
                  data-cy='copy-link'
                  onClick={(e) => copyText(e, window.location.href)}
                  key='join-index'
                  href='/join-index/how-to-add'
                >
                  here
                </Link>{' '}
                to copy the url for this page to send to your GitHub admin.
              </Typography>
            </Box>
            <ImageComponent src='/images/instructions-step1.png' alt='Step 1' />
            <Box>
              <Typography variant='body1' className={classes.typoStyle}>
                2. Under{' '}
                <Box component='span' style={{ fontWeight: '700' }}>
                  &quot;Topics&quot;
                </Box>
                , paste the topic you want to add to your repository.{' '}
              </Typography>
            </Box>
            <Box className={classes.boxPadding}>
              <Typography variant='body1' className={classes.typoStyle}>
                We recommend adding topic tags for your affiliated
                organizations, e.g., Code-for-All, Code-for-Japan,
                code-for-Tokyo topic tags that communicate what your project is
                about, e.g., food-pantry, climate, etc. and don’t forget to use
                the topic tag: civictechindex.
              </Typography>
            </Box>
            <ImageComponent src='/images/instructions-step2.png' alt='Step 2' />
            <Box>
              <Typography variant='body1' className={classes.typoStyle}>
                3. After you have finished adding your tags, click{' '}
                <Box component='span' style={{ fontWeight: '700' }}>
                  Save Changes
                </Box>{' '}
              </Typography>
            </Box>
            <ImageComponent src='/images/instructions-step3.png' alt='Step 3' />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HowToAdd;
