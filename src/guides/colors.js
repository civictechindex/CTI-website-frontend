import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: (props) => props.color,
    height: '112px',
  },
  colorName: {
    color: theme.palette.secondary.dark,
  },
  mono: {
    color: theme.palette.text.disabled,
    fontFamily: theme.typography.secondFontFamily.fontFamily,
    fontSize: '75%',
    paddingBottom: '0.5rem',
    '&:last-child': { paddingBottom: 0 },
  },
}));

const ColorBox = ({ color }) => {
  const classes = useStyles({ color });
  return (
    <Box>
      <Paper className={classes.box} elevation='0' square variant='outlined' />
    </Box>
  );
};

const CardFooter = ({ children }) => {
  return (
    <Box paddingTop={4}>
      <Typography variant='body2' color='primary'>
        Code
      </Typography>
      <Divider />
      <Box>{children}</Box>
    </Box>
  );
};

const ShowColors = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Typography variant='h1'>Colors</Typography>
      <Typography variant='h2' color='secondary' gutterBottom>
        Primary
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <Card className='card242'>
            <CardContent>
              <ColorBox color={theme.palette.spectrum.darkBlue} />
              <Typography variant='h6' className={classes.colorName}>
                Dark Blue
              </Typography>
              <Typography variant='body2' color='secondary'>
                Color: #0F1D2F
              </Typography>
              <Typography variant='body1'>
                Primary text color throughout site. Also used as footer
                background.
              </Typography>
            </CardContent>
            <CardFooter>
              <Typography variant='body1' className={classes.mono}>
                theme&#8203;.palette.&#8203;spectrum.darkBlue
              </Typography>
              <Typography variant='body1' className={classes.mono}>
                theme&#8203;.palette.&#8203;primary.main
              </Typography>
              <Typography variant='body1' className={classes.mono}>
                theme&#8203;.palette.&#8203;text.primary
              </Typography>
              <Typography variant='body1' className={classes.mono}>
                theme&#8203;.palette.&#8203;text.dark
              </Typography>
              <Typography variant='body1' className={classes.mono}>
                {`Typography color='primary'`}
              </Typography>
            </CardFooter>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className='card242'>
            <CardContent>
              <ColorBox color={theme.palette.spectrum.teal} />
              <Typography variant='h6' className={classes.colorName}>
                Teal
              </Typography>
              <Typography variant='body2' color='secondary'>
                Color: #004364
              </Typography>
              <Typography variant='body1'>
                Primary background color. Also used as heading color on light
                backgrounds.
              </Typography>
            </CardContent>
            <CardFooter>
              <Typography variant='body1' className={classes.mono}>
                theme&#8203;.palette.&#8203;spectrum.teal
              </Typography>
              <Typography variant='body1' className={classes.mono}>
                theme.&#8203;palette.&#8203;secondary.dark
              </Typography>
              <Typography variant='body1' className={classes.mono}>
                theme.&#8203;palette.&#8203;background.primary
              </Typography>
            </CardFooter>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className='card242'>
            <CardContent>
              <ColorBox color={theme.palette.spectrum.lightBlue} />
              <Typography variant='h6' className={classes.colorName}>
                Light Blue
              </Typography>
              <Typography variant='body2' color='secondary'>
                Color: #0D99C6
              </Typography>
              <Typography variant='body1'>
                Used for standard hyperlinks and primary buttons.
              </Typography>
            </CardContent>
            <CardFooter>
              <Typography variant='body1' className={classes.mono}>
                theme&#8203;.palette.&#8203;spectrum.lightBlue
              </Typography>
              <Typography variant='body1' className={classes.mono}>
                theme&#8203;.palette.&#8203;secondary.main
              </Typography>
              <Typography variant='body1' className={classes.mono}>
                {`Typography color='secondary'`}
              </Typography>
            </CardFooter>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className='card242'>
            <CardContent>
              <ColorBox color={theme.palette.spectrum.lightBlueVariant} />
              <Typography variant='h6' className={classes.colorName}>
                Light Blue - Variant
              </Typography>
              <Typography variant='body2' color='secondary'>
                Color: #5FCAF9
              </Typography>
              <Typography variant='body1'>
                Used for hyperlinks and icons on dark backgrounds and the
                footer.
              </Typography>
            </CardContent>
            <CardFooter>
              <Typography variant='body1' className={classes.mono}>
                theme&#8203;.palette.&#8203;spectrum.lightBlueVariant
              </Typography>
              <Typography variant='body1' className={classes.mono}>
                theme&#8203;.palette.&#8203;secondary.light
              </Typography>
              <Typography variant='body1' className={classes.mono}>
                theme&#8203;.palette.&#8203;text.light
              </Typography>
            </CardFooter>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className='card242'>
            <CardContent>
              <ColorBox color={theme.palette.spectrum.yellow} />
              <Typography variant='h6' className={classes.colorName}>
                Yellow
              </Typography>
              <Typography variant='body2' color='secondary'>
                Color: #FFE06D
              </Typography>
              <Typography variant='body1'>
                Used only for headers on primary backgrounds.
              </Typography>
            </CardContent>
            <CardFooter>
              <Typography variant='body1' className={classes.mono}>
                theme&#8203;.palette.&#8203;spectrum.yellow
              </Typography>
              <Typography variant='body1' className={classes.mono}>
                theme&#8203;.palette.&#8203;warning.main
              </Typography>
              <Typography variant='body1' className={classes.mono}>
                theme&#8203;.palette.&#8203;text.bright
              </Typography>
              <Typography variant='body1' className={classes.mono}>
                {`Typography color='textPrimary'`}
              </Typography>
            </CardFooter>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className='card242'>
            <CardContent>
              <ColorBox color={theme.palette.spectrum.white} />
              <Typography variant='h6' className={classes.colorName}>
                White
              </Typography>
              <Typography variant='body2' color='secondary'>
                Color: #FEFEFE
              </Typography>
              <Typography variant='body1'>
                Background color for cards, containers and field forms.
                Additionally used for text on dark backgrounds and button
                labels.
              </Typography>
            </CardContent>
            <CardFooter>
              <Typography variant='body1' className={classes.mono}>
                theme&#8203;.palette.&#8203;spectrum.white
              </Typography>
              <Typography variant='body1' className={classes.mono}>
                theme&#8203;.palette.&#8203;background.default
              </Typography>
              <Typography variant='body1' className={classes.mono}>
                theme&#8203;.palette.&#8203;text.secondary
              </Typography>
              <Typography variant='body1' className={classes.mono}>
                {`Typography color='textSecondary'`}
              </Typography>
            </CardFooter>
          </Card>
        </Grid>
      </Grid>
      <Box paddingTop={4}>
        <Typography variant='h2' color='secondary' gutterBottom>
          Secondary
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <Card className='card242'>
            <CardContent>
              <ColorBox color={theme.palette.spectrum.darkGray} />
              <Typography variant='h6' className={classes.colorName}>
                Dark Gray
              </Typography>
              <Typography variant='body2' color='secondary'>
                Color: #6D6E74
              </Typography>
              <Typography variant='body1'>
                Stroke color for interactive elements and field forms. Also used
                for secondary information such as labels and disabled states.
              </Typography>
            </CardContent>
            <CardFooter>
              <Typography variant='body1' className={classes.mono}>
                theme&#8203;.palette.&#8203;spectrum.darkGray
              </Typography>
              <Typography variant='body1' className={classes.mono}>
                theme&#8203;.palette.&#8203;text.disabled
              </Typography>
            </CardFooter>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className='card242'>
            <CardContent>
              <ColorBox color={theme.palette.spectrum.lightGray} />
              <Typography variant='h6' className={classes.colorName}>
                Light Gray
              </Typography>
              <Typography variant='body2' color='secondary'>
                Color: #F2F2F2
              </Typography>
              <Typography variant='body1'>
                Secondary background color in place of white.
              </Typography>
            </CardContent>
            <CardFooter>
              <Typography variant='body1' className={classes.mono}>
                theme&#8203;.palette.&#8203;spectrum.lightGray
              </Typography>
              <Typography variant='body1' className={classes.mono}>
                theme&#8203;.palette.&#8203;background.secondary
              </Typography>
            </CardFooter>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className='card242'>
            <CardContent>
              <ColorBox color={theme.palette.spectrum.lightBlueHover} />
              <Typography variant='h6' className={classes.colorName}>
                Light Blue - Hover
              </Typography>
              <Typography variant='body2' color='secondary'>
                Color: #006B95
              </Typography>
              <Typography variant='body1'>
                Fill color for hovered primary buttons.
              </Typography>
            </CardContent>
            <CardFooter>
              <Typography variant='body1' className={classes.mono}>
                theme&#8203;.palette.&#8203;spectrum.lightBlueHover
              </Typography>
            </CardFooter>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className='card242'>
            <CardContent>
              <ColorBox color={theme.palette.spectrum.green} />
              <Typography variant='h6' className={classes.colorName}>
                Green
              </Typography>
              <Typography variant='body2' color='secondary'>
                Color: #5A9E5F
              </Typography>
              <Typography variant='body1'>
                Icon and accent color for successful states.
              </Typography>
            </CardContent>
            <CardFooter>
              <Typography variant='body1' className={classes.mono}>
                theme&#8203;.palette.&#8203;spectrum.green
              </Typography>
            </CardFooter>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className='card242'>
            <CardContent>
              <ColorBox color={theme.palette.spectrum.red} />
              <Typography variant='h6' className={classes.colorName}>
                Red
              </Typography>
              <Typography variant='body2' color='secondary'>
                Color: #D20E0E
              </Typography>
              <Typography variant='body1'>
                Icon and accent color for unsuccessful or error states.
              </Typography>
            </CardContent>
            <CardFooter>
              <Typography variant='body1' className={classes.mono}>
                theme&#8203;.palette.&#8203;spectrum.red
              </Typography>
              <Typography variant='body1' className={classes.mono}>
                theme&#8203;.palette.&#8203;error.main
              </Typography>
            </CardFooter>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className='card242'>
            <CardContent>
              <ColorBox color={theme.palette.spectrum.purple} />
              <Typography variant='h6' className={classes.colorName}>
                Purple
              </Typography>
              <Typography variant='body2' color='secondary'>
                Color: #551A8B
              </Typography>
              <Typography variant='body1'>
                Used to denote visited links.
              </Typography>
            </CardContent>
            <CardFooter>
              <Typography variant='body1' className={classes.mono}>
                theme&#8203;.palette.&#8203;spectrum.purple
              </Typography>
            </CardFooter>
          </Card>
        </Grid>
      </Grid>
      <Box paddingTop={4}></Box>
    </>
  );
};

export default ShowColors;
