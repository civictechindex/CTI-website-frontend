import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import useStyles from './styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Confetti from '../../components/Confetti';

const BottomSection = () => {
  const classes = useStyles();
  const [addBtnClicked, setAddBtnClicked] = useState(false);

  const renderBtnWithDescription = () => {
    return (
      <>
        <Typography className={classes.containerBelowBtnStyle}>
          Let us know when you&apos;ve added #civictechindex to your project!
        </Typography>
        <Grid className={classes.btnContainerStyle}>
          <Button
            className={classes.btnStyle}
            onClick={() => {
              setAddBtnClicked(true);
            }}
          >
            I&apos;ve Added My Project!
          </Button>
        </Grid>
      </>
    );
  };

  const PaperComp = ({ addBtnClicked, text, btext, bhref }) => {
    return (
      <Grid item className={classes.gridStyle}>
        <Paper variant='outlined' className={classes.paper}>
          <Typography variant='body1' className={classes.ptextStyle}>
            {text}
          </Typography>
          <Grid>
            <Button
              href={bhref}
              className={
                addBtnClicked
                  ? classes.routingBtnAfterClick
                  : classes.routingBtnBeforeClick
              }
            >
              {btext}
            </Button>
          </Grid>
        </Paper>
      </Grid>
    );
  };
  return (
    <>
      <Box className='containerWhite'>
        <Container>
          <Grid container direction='column' alignItems='center'>
            <Grid item className={classes.containerAboveBtnStyle}>
              <Typography variant='h3' className={classes.txtStyle}>
                {addBtnClicked ? (
                  <>
                    Thank you for submitting<br></br> your project!
                  </>
                ) : (
                  <>
                    This project is so new, <br></br>we are celebrating every
                    win!
                  </>
                )}
              </Typography>
            </Grid>
            {!addBtnClicked && renderBtnWithDescription()}
            <Confetti fire={addBtnClicked} />
            <Grid
              container
              direction='row'
              justify='center'
              className={classes.linksContainerStyle}
            >
              <PaperComp
                addBtnClicked={addBtnClicked}
                text='Add Another Project'
                btext='Tag Generator'
                bhref='/tag-generator'
              />
              <PaperComp
                addBtnClicked={addBtnClicked}
                text='Collaborate with us'
                btext='Learn More'
                bhref='/support/collaborate'
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default BottomSection;
