import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import useStyles from './styles';
import Box from '@material-ui/core/Box';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const Complete = ({ onClose }) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.complete}>
        <Typography variant='subtitle1'><b>Complete!</b></Typography>
      </Box>
      <Box textAlign='center'>
        <LinearProgress variant='determinate' color='secondary' value={100} />
        <CheckCircleIcon className={classes.icon} />
        <Typography variant='h1' className={classes.infoLarge}>
          You&apos;re all set!
        </Typography>
        <Typography variant='h1' className={classes.infoLarge}>
          Thanks for contributing.
        </Typography>
        <Box className={classes.return}>
          <Button data-cy='return-button' onClick={onClose}>Return to Tag Generator</Button>
        </Box>
      </Box>
    </>
  );
};

export default Complete;
