import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  // AffiliatedQuestionSection.js
  questionContainerPadding: {
    paddingTop: '20px',
  },
  questionGridPadding: {
    padding: '10px',
    '& a:visited': {
      color: theme.palette.secondary.main,
    },
  },

  // BottomSection.js
  btnStyle: {
    '& .MuiButton-label': {
      whiteSpace: 'inherit',
    },
  },
  txtStyle: {
    textAlign: 'center',
    fontWeight: 700,
    color: '#042D5F',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
  gridStyle: {
    padding: '8px',
    [theme.breakpoints.up('md')]: {
      width: '292px',
    },
    [theme.breakpoints.down('md')]: {
      width: '270px',
    },
  },
  paper: {
    margin: '24px auto 24px auto',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      margin: '0',
    },
  },
  ptextStyle: {
    fontWeight: 700,
    textAlign: 'center',
    color: theme.palette.spectrum.darkBlue,
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      fontSize: '1.25rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1.125rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  routingBtnBeforeClick: {
    backgroundColor: theme.palette.background.default,
    border: '1px solid',
    borderColor: theme.palette.background.darkGray,
    color: theme.palette.spectrum.darkBlue,
    '&:hover': {
      background: 'none',
    },
  },
  routingBtnAfterClick: {
    backgroundColor: theme.palette.spectrum.lightBlue,
    border: '1px solid',
    borderColor: theme.palette.background.darkGray,
    color: theme.palette.spectrum.white,
  },
  containerAboveBtnStyle: {
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(8),
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(6),
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(4),
    },
  },
  btnContainerStyle: {
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '14px',
    },
  },
  containerBelowBtnStyle: {
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(4),
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(2),
    },
  },
  linksContainerStyle: {
    color: theme.palette.spectrum.darkBlue,
    fontWeight: 400,
    [theme.breakpoints.up('md')]: {
      margin: '32px auto 30px auto',
      fontSize: '18px',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '32px auto 24px auto',
      fontSize: '14px',
    },
  },

  // Organization.js
  orgGridStyle: {
    paddingRight: '8px',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: '8px',
    },
  },
  orgLink: {
    color: theme.palette.secondary.main,
    textDecoration: 'underline',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  modalStyle: {
    overflow: 'scroll',
  },
  orgTypoStyle: {
    fontWeight: '700',
  },
  orgNameSectionGrid: {
    padding: '30px 0px',
  },

  // ProjectRepository.js
  projGridStyle: {
    [theme.breakpoints.down('xs')]: {
      paddingBottom: '8px',
    },
  },
  projTypoStyle: {
    fontWeight: '700',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.875rem',
    },
  },
  projRepoGrid: {
    padding: '30px 0px',
  },

  // TopicTag.js
  topicTag: {
    backgroundColor: theme.palette.background.default,
    borderRadius: '24px',
    padding: '0 10px',
    '&.MuiChip-outlined': {
      borderColor: theme.palette.outline.gray,
      [theme.breakpoints.down('md')]: {
        height: '42px',
      },
      [theme.breakpoints.up('md')]: {
        height: '48px',
      },
    },
    '&.MuiChip-deletable svg': {
      color: theme.palette.outline.gray,
    },
  },
  addTag: {
    paddingBottom: '10px',
    '& .MuiChip-clickable': {
      backgroundColor: theme.palette.background.default,
      border: '1px solid',
      borderColor: theme.palette.outline.gray,
      borderRadius: '24px',
      padding: '0 10px',
      '&.MuiChip-deletable svg': {
        color: theme.palette.outline.gray,
      },
      [theme.breakpoints.down('md')]: {
        height: '42px',
      },
      [theme.breakpoints.up('md')]: {
        height: '48px',
      },
    },
  },

  // TopicTagSection.js
  tagGridStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
  chipGrid: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  topTypoStyle: {
    fontWeight: '400',
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
  },
  gridLinkStyle: {
    '& a:link': {
      fontWeight: '700',
      color: theme.palette.secondary.main,
    },
    '& a:visited': {
      color: theme.palette.secondary.main,
    },
  },
  lStyle: {
    fontWeight: '700',
    color: theme.palette.secondary.main,
  },
  repoChangeGrid: {
    paddingTop: '10px',
    paddingLeft: '10px',
  },
  addTopicGridPadding: {
    padding: '20px 10px 10px',
  },
  resetButton: {
    backgroundColor: theme.palette.background.default,
    border: '1px solid',
    borderColor: theme.palette.background.darkGray,
    color: theme.palette.spectrum.darkBlue,
    '&:hover': {
      background: 'none',
    },
  },
  gridChipInput: {
    paddingLeft: '10px',
  },
  topTypoPadding: {
    padding: '30px 0px',
  },
  stepGrid: {
    paddingTop: '20px',
  },
  currentTopicTagGrid: {
    paddingBottom: '24px',
  },
}));

export default useStyles;
