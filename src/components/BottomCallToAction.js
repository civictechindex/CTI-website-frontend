/* eslint-disable sort-keys */

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  bottomCallToAction: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '15rem',
    textAlign: 'center',
  },
  heading: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.primary.main,
    fontSize: '2.5rem',
  },
  button: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.font.paragraph.fontSize,
    fontWeight: 700,
    backgroundColor: theme.palette.info.main,
    padding: '1rem 5rem',
    color: theme.palette.text.secondary,
    border: 'none',
    borderRadius: theme.button.borderRadius,
    boxShadow: '0.1rem 0.1rem 10px #e0dede',
    cursor: 'pointer',
  },
}))

const BottomCallToAction = (props) => {
  const { heading, buttonHref, buttonText } = props

  const classes = useStyles()

  return (
    <div className={classes.bottomCallToAction}>
      <p className={classes.heading}>{heading}</p>
      <a href={buttonHref}><button className={classes.button}>{buttonText}</button></a>
    </div>
  )
}

export default BottomCallToAction
