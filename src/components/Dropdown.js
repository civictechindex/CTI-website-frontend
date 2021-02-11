/* eslint-disable sort-keys */

import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ContributorThumbnail } from './ContributorThumbnail'
import { DropdownArrow } from './DropdownArrow'

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
  },
  codeForAll: {
    '& h4': {
      color: theme.palette.secondary.dark,
    },
    color: theme.palette.primary.main,
    margin: '1rem auto',
    boxSizing: 'border-box',
    width: '50%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    borderRadius: '2px',
    paddingRight: '1rem',
    '&:nth-of-type(2)': {
      color: theme.palette.error.main,
    },
  },
  dropdown: {
    '& p': {
      color: theme.palette.primary.main,
      fontSize: '1.25rem',
      fontWeight: 'bold',
    },
    minHeight: '6rem',
    margin: '0.75rem 0',
    color: theme.palette.secondary.dark,
    boxSizing: 'border-box',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    borderRadius: '2px',
    paddingRight: '1rem',
  },
  chevron: {
    cursor: 'pointer',
    fontSize: '1.3rem',
    marginLeft: 'auto',
    padding: '0.5rem',
  },
}))

export const Dropdown = ({
  organization,
  children,
  dropdownLength,
  isOpen,
}) => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  useEffect(() => {
    if (isOpen) {
      setOpen(isOpen)
    }
  }, [isOpen])

  return (
    <div className={classes.container}>
      <div
        className={
          typeof organization === 'string'
            ? classes.codeForAll
            : classes.dropdown
        }
      >
        <div>
          <ContributorThumbnail organization={organization} />
        </div>
        {dropdownLength ? (
          <p>
            <span>({dropdownLength})</span>
          </p>
        ) : null}
        {dropdownLength ? <DropdownArrow setOpenFunction={setOpen} /> : null}
      </div>
      {open && children}
    </div>
  )
}
