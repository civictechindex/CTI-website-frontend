import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyle = makeStyles((theme) => ({
  firstSectionWrapper: {
    width: '100%',
    background: '#004364',
    color: '#FFE06D',
    boxSizing: 'border-box',
    backgroundImage: 'url("/images/CTI-Contributors-BG-1.png")',
    minHeight: '57vh',
    backgroundPositionY: 'bottom',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    textAlign: 'center',
    '& h1': {
      fontSize: '3rem',
    },
  },
  banner: {
    height: '20px',
    width: '100px',
  },
  projectsLink: {
    margin: '0',
    paddingTop: '70px',
    fontSize: '14px',
    color: theme.palette.text.secondary,
  },
  sectionContainer: {
    fontFamily: theme.typography.fontFamily,
    boxSizing: 'border-box',
    margin: '0 auto',
    width: '70%',
    '& p': {
      margin: '0',
    },
  },
  affiliation: {
    textAlign: 'center',
    paddingRight: '1rem',
    boxSizing: 'border-box',
    color: theme.palette.secondary.dark,
    display: 'flex',
    // justifyContent: 'space-between',
    fontSize: '1.3rem',
    '& h2': {
      width: '100%',
    },
  },
  unaffiliatedWrapper: {
    marginLeft: theme.spacing(-3),
    marginRight: theme.spacing(-3),
    textAlign: 'center',
    backgroundColor: theme.palette.grey[100],
    padding: '1rem 0',
    '& *': { color: theme.palette.secondary.dark },
    ' & h2': {
      fontSize: '2.25rem',
      margin: 0,
    },
    '& p': {
      fontWeight: 'bold',
      fontSize: '1.5rem',
    },
  },
  unaffiliatedThumbnailsWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill,minmax(49%, 1fr))',
    gap: '0.5rem',
    padding: '1rem 0',
  },
  unaffiliatedThumbnails: {
    border: '1px solid #BCBCBC',
    borderRadius: '4px',
    flex: '1 1 23%',
    '& p': {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: theme.palette.secondary.dark,
    },
  },
  affiliatedWrapper: {
    width: '100%',
    backgroundColor: theme.palette.background.primary,
    padding: '1rem 0',
    textAlign: 'center',
    '& h2': {
      //   padding: '1rem 0',
      margin: 0,
      fontSize: '2.25rem',
    },
  },
  affiliatedThumbnailsWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill,minmax(23%, 1fr))',
    margin: '1rem 0',
    columnGap: '1rem',
    rowGap: '0.5rem',
  },
  affiliatedOrgsContainer: {
    '&h2, & h3': {
      color: theme.palette.warning.main,
    },
  },
  chevron: {
    margin: 'auto 0 auto auto',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  placeholder: {
    backgroundColor: theme.palette.background.default,
    height: '90vh',
  },

  input: {
    width: '85%',
    borderRadius: '7px',
    backgroundColor: theme.palette.background.default,
    fontSize: '1.5rem',
  },
  contributorsContainer: {
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.7rem',
    alignContent: 'flex-start',
  },
  loaders: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: 0,
  },
  thumbnailWrapper: {
    minHeight: '5rem',
  },
  thumbnails: {
    color: theme.palette.common.black,
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    textDecoration: 'none',
    borderRadius: '4px',
    flexGrow: '1',
  },
  imageWrapper: {
    display: 'grid',
    placeItems: 'center',
    padding: '0.5rem',
  },
  thumbnailImage: {
    width: '100%',
    maxWidth: '5rem',
  },
  textWrapper: {
    display: 'flex',
    alignItems: 'center',
    flex: '3 1 75%',
    minHeight: '6rem',
  },
  thumbnailText: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '6rem',
    color: theme.palette.primary.main,
  },
  textWrapperWithoutImage: {
    display: 'grid',
    placeItems: 'center',
    width: '100%',
  },
  thumbnailTextWithoutImage: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 0.5rem',
    minHeight: '6rem',
    color: theme.palette.primary.main,
  },

  codeForAllThumbnailWrapper: {
    display: 'flex',
    flexGrow: '1',
    width: '50%',
    borderRadius: '4px',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.secondary.dark.contrastText,
    margin: '1rem auto',
  },
  codeForAllThumbnails: {
    display: 'flex',
    textDecoration: 'none',
  },
  codeForAllImageWrapper: {
    display: 'flex',
    placeItems: 'center',
    maxWidth: '6rem',
    margin: ' 0 0.5rem',
    flexGrow: '1',
  },
  codeForAllThumbnailImage: {
    maxWidth: '100%',
    height: 'auto',
  },
  codeForAllTextWrapper: {
    display: 'flex',
    margin: '0 0.5rem 0 1rem',
    flexGrow: '1',
    alignItems: 'center',
  },
  codeForAllThumbnailText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '0',
    color: theme.palette.secondary.dark,
  },
  dropdownLength: {
    color: theme.palette.secondary.dark,
  },
  contributorsTagline: {
    margin: theme.spacing(4, 0),
  },
}))
