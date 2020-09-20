import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles( theme => ({
  joinHeader: {
    color: theme.primaryTextColor,
    fontFamily: theme.primaryFontFamily,
    textAlign: 'center',
  }
}));

export default useStyles;