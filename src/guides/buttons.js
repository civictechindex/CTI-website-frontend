import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  textGridContainer: {
    paddingBottom: theme.spacing(4),
  },
}));

const ShowButtons = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText color='primary'>The button press caused this dialog to open.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color='secondary' onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Typography variant='h1'>Buttons</Typography>
      <Grid container spacing={2} className={classes.textGridContainer}>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className='card240'>
            <CardContent>
              <Button onClick={handleOpen}>Default</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className='card244'>
            <CardContent>
              <Button disabled>Default Disabled</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className='card241'>
            <CardContent>
              <Button color='secondary' onClick={handleOpen}>
                Secondary
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className='card242'>
            <CardContent>
              <Button color='secondary' disabled>
                Secondary Disabled
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className='card240'>
            <CardContent>
              <Button color='primary' onClick={handleOpen}>
                Primary (Default)
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Card className='card244'>
            <CardContent>
              <Button color='primary' disabled>
                Primary Disabled
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ShowButtons;
