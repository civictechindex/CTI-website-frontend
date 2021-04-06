import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  /** ********     PROJECTS SECTION     **********/
  projectsLink: {
    margin: '0',
    paddingTop: '70px',
    fontSize: '14px',
  },
  projectsHeading: {
    fontSize: '42px',
    fontWeight: 'bold',
    marginTop: '30px',
    marginBottom: '28px',
  },
  projectsSubHeading: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0',
  },
  projectsSubHeadingDetails: {
    fontSize: '20px',
    margin: '0',
  },
  link: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  projectsFooter: {
    fontSize: '24px',
    lineHeight: '30px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '0',
    paddingTop: '40px',
    paddingBottom: '60px',
  },
  /** ********     MEDIA QUERIES     **********/
  '@media (max-width: 770px)': {
    imgText: {
      fontSize: '2vw',
    },
  },
  '@media (max-width: 600px)': {
    imgText: {
      top: '-13px',
    },
  },
}))

export default useStyles
