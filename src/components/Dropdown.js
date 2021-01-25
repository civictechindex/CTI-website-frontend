/* eslint-disable sort-keys */

import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ContributorThumbnail } from './ContributorThumbnail'
import { DropdownArrow } from './DropdownArrow'

const useStyles = makeStyles({
  container: {
    width: '100%',
  },
  codeForAll: {
    '& h4': {
      color: '#004364',
    },
    color: '#0F1D2F',
    margin: '1rem auto',
    boxSizing: 'border-box',
    width: '50%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '2px',
    paddingRight: '1rem',
    '&:nth-of-type(2)': {
      color: 'red',
    },
  },
  dropdown: {
    '& p': {
      color: '#0F1D2F',
      fontSize: '1.25rem',
      fontWeight: 'bold',
    },
    minHeight: '6rem',
    margin: '0.75rem 0',
    color: '#004364',
    boxSizing: 'border-box',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '2px',
    paddingRight: '1rem',
  },
  chevron: {
    cursor: 'pointer',
    fontSize: '1.3rem',
    marginLeft: 'auto',
    padding: '0.5rem',
  },
})

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
