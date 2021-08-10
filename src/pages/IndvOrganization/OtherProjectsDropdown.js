import React,{ useState }  from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLessRounded';
import ExpandMore from '@material-ui/icons/ExpandMoreRounded';
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  list: {
    minHeight: '72px',
    marginTop: '32px',
    backgroundColor: theme.palette.background.paper,
  },
  dropdownBtnStyle: {
    minHeight: '72px',
  },
  dropdownTitleStyle: {
    fontWeight: '700',
    fontFamily: 'Work Sans',
    fontSize: '18px',
    lineHeight: '22px',
    color: '#0F1D2F',
  },
  dropdownOptionLinkStyle: {
    fontWeight: '700',
    fontFamily: 'Work Sans',
    fontSize: '16px',
    color: '#0D99C6',
    fontStyle: 'normal',
    lineHeight: '21px',
  },
}));
export const OtherProjectsDropdown = (props) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List dense disablePadding className={classes.list}>
      <ListItem
        button
        onClick={handleClick}
        className={classes.dropdownBtnStyle}
      >
        <ListItemText
          primary={
            <Typography className={classes.dropdownTitleStyle}>
              {props.dropdownTitle}
            </Typography>
          }
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto'>
        {props.dropDownListItem.length !== 0 ? (
          props.dropDownListItem
        ) : (
          <a href='/#' className={classes.dropdownOptionLinkStyle}>
            No Project Url Found.
          </a>
        )}
      </Collapse>
    </List>
  );
};
