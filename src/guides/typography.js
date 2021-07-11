import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  stylesInUse: {
    backgroundColor: theme.palette.background.secondary,
    marginBottom: theme.spacing(4),
    maxWidth: 800,
    width: '100%'
  }
}))

// See https://material-ui.com/components/typography/
const ShowTypography = () => {
  const classes = useStyles()

  return (
    <Container>
      <Card className={classes.stylesInUse}>
        <CardContent>
          <Typography variant='h1' color='primary' gutterBottom>
            h1. Styles In Use (3rem/48px)
          </Typography>
          <Typography variant='h2' color='textPrimary' gutterBottom>
            h2. Heading (2.5rem/40px)
          </Typography>
          <Typography variant='h3' color='secondary' gutterBottom>
            h3. Heading (2rem/32px)
          </Typography>
          <Typography variant='h4' color='textSecondary' gutterBottom>
            h4. Heading (1.75rem/28px)
          </Typography>
          <Typography variant='h5'>
            h5. Heading (1.5rem/24px)
          </Typography>
          <Typography variant='body1' gutterBottom>
            body1. (1rem/16px) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant='h6'>
            h6. Heading (1.25rem/20px)
          </Typography>
          <Typography variant='body1' color='error' gutterBottom>
            body1. (1rem/16px) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant='caption' display='block' gutterBottom>
            caption text (0.875rem/14px)
          </Typography>
        </CardContent>
      </Card>
      <Paper variant='outlined' square>
        <Typography variant='h1' component='h2'>Material-UI Styles Not Used</Typography>
        <Typography variant='subtitle1' gutterBottom>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </Typography>
        <Typography variant='subtitle2' gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </Typography>
        <Typography variant='body2' gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant='button' display='block' gutterBottom>
          button text
        </Typography>
        <Typography variant='overline' display='block' gutterBottom>
          overline text
        </Typography>
      </Paper>
    </Container>
  )
}

export default ShowTypography
