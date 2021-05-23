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
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));
export const OtherProjectsDropdown = (props) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List dense disablePadding className={classes.list} >
      <ListItem button onClick={handleClick}  >
        <ListItemText primary={<Typography type="body2" style={{ fontWeight: 'bold', padding: '.5rem', color: 'black' }}>{props.dropdownTitle}</Typography>} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto'>
        {props.dropDownListItem.length !== 0 ? (props.dropDownListItem) : (
          <a href="/#" style={{ fontWeight: 'bold', textAlign: 'center', padding: "2rem" }}>No Project Url Found.</a>
        )}
      </Collapse>
    </List>
  );
};
