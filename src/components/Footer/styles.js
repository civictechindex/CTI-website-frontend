import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles(theme => ({
  footerContainer: {
    width: '100%',
    height: '310px',
    backgroundColor: theme.footerBG,
    fontFamily: theme.primaryFontFamily,
    color: theme.secondaryTextColor,
    fontSize: '16px',
    paddingTop: '32px',
  },
  allInfoContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    gridTemplateRows: 'auto',
    border: '1px solid red',
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
      gridArea: '1 /4 / 1 / 4',
    },
    '& $infoContainer:nth-child(5)': {
      gridArea: '1 / 5 / 1 / 5',
      minWidth: '190px',
    },
  },
  infoContainer: {
    margin: '0 10px',
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
  },
  note: {
    textAlign: 'center',
    margin: '4px',
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
  
  }
}))

export default useStyles