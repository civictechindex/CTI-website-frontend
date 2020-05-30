import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles(theme => ({
  footerContainer: {
    width: '100%',
    backgroundColor: theme.footerBG,
    fontFamily: theme.primaryFontFamily,
    color: theme.secondaryTextColor,
    fontSize: '16px',
    padding: '32px 20px 0 20px',
    boxSizing: 'border-box',
  },
  allInfoContainer: {
    display: 'grid',
    gridTemplateColumns: '.8fr 1fr 1fr 1fr 1fr',
    justifyItems: 'center',
    '& $infoContainer:nth-child(1)': {
      gridArea: '1 / 1 / 1 / 1',
    },
    '& $infoContainer:nth-child(2)': {
      gridArea: '1 / 2 / 1 / 2',
      maxWidth: '160px',
    },
    '& $infoContainer:nth-child(3)': {
      gridArea: '1 / 3 / 1 / 3',
    },
    '& $infoContainer:nth-child(4)': {
      gridArea: '1 / 4 / 1 / 4',
    },
    '& $infoContainer:nth-child(5)': {
      gridArea: '1 / 5 / 1 / 5',
      minWidth: '190px',
    },
  },
  infoContainer: {
    margin: '0',
  },
  infoHeader: {
    display: 'block',
    fontWeight: 'bold',
    margin: '0',
    textDecoration: 'none',
    color: theme.secondaryTextColor,
  },
  infoLink: {
    color: theme.secondaryTextColor,
    textDecoration: 'none',
    display: 'block',
    marginTop: '14px',
  },
  margin: {
    marginRight: '20px',
    marginTop: '14px',
  },
  noteContainer: {
    marginTop: '55px',
    '& $note:last-child': {
      paddingBottom: '30px'
    }
  },
  note: {
    textAlign: 'center',
    margin: '0',
    paddingBottom: '10px'
  },
  link: {
    color: theme.secondaryTextColor,
    textDecoration: 'underline',
    fontWeight: '500',
  },
  twitter: {
    transform: 'translate(0, -3px)',
  },
/**********     MEDIA-QUERIES SECTION     **********/
  '@media (max-width: 1000px)': {
    footerContainer: {
      fontSize: '14px',
      lineHeight: '18px',
    },
    note: {
      fontSize: '12px',
    },
    allInfoContainer: {
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '115px 230px auto',
      justifyItems: 'center',
      '& $infoContainer:nth-child(odd)': {
        width: '190px',
      },
      '& $infoContainer:nth-child(even)': {
        width: '140px',
      },
      '& $infoContainer:nth-child(1)': {
        gridArea: '2 / 1 / 2 / 1',
      },
      '& $infoContainer:nth-child(2)': {
        gridArea: '2 / 2 / 2 / 2',
      },
      '& $infoContainer:nth-child(3)': {
        gridArea: '3 / 1 / 3 / 1',
      },
      '& $infoContainer:nth-child(4)': {
        gridArea: '3 / 2 / 3 / 2',
      },
      '& $infoContainer:nth-child(5)': {
        gridArea: '1 / 1 / 1 / 1',
      },
    },
  }
}))

export default useStyles