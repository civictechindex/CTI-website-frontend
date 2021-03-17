// See https://github.com/ReactTraining/react-router/issues/1147

import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import makeStyles from '@material-ui/core/styles/makeStyles'
import OpenInNewRoundedIcon from '@material-ui/icons/OpenInNewRounded'

const useStyles = makeStyles({
  icon: {
    '&:after': {
      borderBottom: '1px solid',
      borderBottomColor: 'inherit',
      bottom: '0',
      content: '""',
      left: '0',
      position: 'absolute',
      right: '0'
    },
    height: '0.875rem',
    position: 'relative',
    textDecoration: 'none',
    top: '.125em'
  }
})

const Link = ({ to, children, ...props }) => {
  const classes = useStyles()

  // If it is a simple element with nothing to link to
  if (!to) {
    return <span {...props}>{children}</span>
  }

  // If it is intended to be an external link
  if (/^https?:\/\//.test(to)) {
    return (
      <a href={to} target='_blank' rel='noreferrer noopener' className={classes.icon} {...props}>
        {children}
        <OpenInNewRoundedIcon fontSize='inherit' />
      </a>
    )
  }

  // Else it is an internal link
  return <RouterLink to={to} {...props}>{children}</RouterLink>
}

export default Link
