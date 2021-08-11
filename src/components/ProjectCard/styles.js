import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  issueAndUpdateStyle: {
    fontFamily: 'Work Sans',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '21px',
    color: '#6D6E74',
    paddingRight: '16px',
    display: 'inline',
  },
  logoImageStyle: {
    display: 'block',
    margin: 'auto',
    width: '64px',
  },
  projectLinkSectionStyle: {
    display: 'flex',
    flexWrap: 'nowrap',
    height: '64px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '16px',
    },
  },
  cardContainerStyle: {
    padding: '32px',
    [theme.breakpoints.down('sm')]: {
      padding: '16px',
    },
  },
  projectUrlContainerStyle: {
    margin: 'auto 16px auto 16px',
    fontSize: '20px',
    weight: '700',
    flexWrap: 'nowrap',
    [theme.breakpoints.down('lg')]: {
      maxWidth: '417px',
    },
    [theme.breakpoints.down('md')]: {
      minWidth: '507px',
      maxWidth: '820px',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '456px',
      flexWrap: 'wrap',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '0px',
    },
  },
  projectUrlStyle: {
    color: '#0F1D2F',
    wordBreak: 'break-word',
    weight: 'bold',
  },
  githubIconContainerStyle: {
    margin: 'auto',
    display: 'contents',
    maxWidth: '229px',
    [theme.breakpoints.down('sm')]: {
      margin: '16px auto',
    },
  },
  projectDetailsContainerStyle: {
    minWidth: '742px',
    minHeight: '80px',
    paddingTop: '16px',
    [theme.breakpoints.down('md')]: {
      minWidth: '832px',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '536px',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '0px',
    },
  },
  projectDescContainerStyle: {
    fontFamily: 'Work Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    color: '#0F1D2F',
  },
  projectLinkContainerStyle: {
    verticalAlign: 'middle',
    paddingTop: '8px',
    wordBreak: 'break-word',
  },
  projectLinkStyle: {
    fontFamily: 'Work Sans',
    fontWeight: '700',
    fontSize: '18px',
    color: '#0D99C6',
  },
  projectTagInfoContainerStyle: {
    minHeight: '154px',
    maxWidth: '742px',
    paddingTop: '24px',
  },
  topicTagTitleStyle: {
    color: '#6D6E74',
    fontFamily: 'Work Sans',
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: '22px',
    fontSize: '16px',
    clear: 'both',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    marginRight: '8px',
  },
  tagChipContainerStyle: {
    borderRadius: '4px',
    padding: '4px 8px 4px 8px',
    height: '28px',
    display: 'inline-flex',
    backgroundColor: '#F2F2F2',
    marginRight: '3px',
    whiteSpace: 'nowrap',
  },
  tagChipContainerAltStyle: {
    borderRadius: '4px',
    padding: '6px 8px 6px 8px',
    height: '30px',
    display: 'inline-flex',
    border: '1px solid #6D6E74',
    margin: '2px',
    whiteSpace: 'nowrap',
  },
  tagChipTextStyle: {
    paddingRight: '4px',
    fontFamily: 'Work Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    color: '#6D6E74',
    lineHeight: '18px',
  },
  githubInfoStyle: {
    height: '28px',
    borderRadius: '4px',
    border: '0.5px solid #AEAEAE',
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px 0px 0px 8px',
    fontFamily: 'Work Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    margin: 'auto 4px',
  },
  topicTagSpanContainerStyle: {
    clear: 'both',
    display: 'inline',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  languageLogoStyle: {
    margin: 'auto 4px auto 0px',
    width: '11px',
    height: '11px',
    borderRadius: '50%',
  },
  affiliationTopicLogoStyle: {
    width: '20px',
    height: '20px',
    marginRight: '4px',
  },
  githubInfoTopicLogoStyle: {
    width: '13px',
    height: '13px',
    marginRight: '8px',
  },
  githubInfoIconSeparatorStyle: {
    marginRight: '4px',
    marginLeft: '10px',
    width: '0.5px',
    backgroundColor: '#AEAEAE',
    height: '100%',
  },
  updateAndIssuesContainerStyle: {
    height: '22px',
    display: 'inline-flex',
  },
  topicTagGridStyle: {
    paddingTop: '16px',
  },
  projectDescGridWidthStyle: {
    width: '100%',
  },
}));

export default useStyles;
