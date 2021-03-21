import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ExpandLess from '@material-ui/icons/ExpandLessRounded';
import ExpandMore from '@material-ui/icons/ExpandMoreRounded';

import CheckBoxOutlineBlankIcon from '../../icons/CheckBoxOutlineBlankIcon';
import Link from '../../components/common/Link';

const DARK_BLUE = '#0F1D2F';
const GRAY400 = '#BCBCBC';
const TEAL = '#004364';
const localTheme = {
  overrides: {
    MuiCheckbox: {
      root: {
        color: GRAY400,
        margin: 0,
        padding: 0,
        '&$checked': {
          color: TEAL,
        },
      },
    },
    MuiFormControlLabel: {
      label: {
        fontSize: '0.75rem',
        paddingLeft: 4,
      },
    },
    MuiListItem: {
      gutters: {
        paddingLeft: 0,
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 32,
        borderWidth: 1,
        height: 48,
      },
    },
    MuiTypography: {
      h5: {
        color: TEAL,
      },
      h6: {
        color: DARK_BLUE,
      },
      body2: {
        fontSize: '0.75rem',
        fontWeight: 700,
      },
    },
  },
  props: {
    MuiCheckbox: {
      color: 'primary',
      icon: <CheckBoxOutlineBlankIcon />,
      size: 'small',
    },
  },
};

// See https://stackoverflow.com/questions/56946694/theme-nesting-with-material-ui
const themeMerge = (outerTheme) => {
  const newTheme = { ...outerTheme };
  newTheme.overrides = { ...newTheme.overrides, ...localTheme.overrides };
  newTheme.props = { ...newTheme.props, ...localTheme.props };
  return newTheme;
};

const SearchField = (props) => {
  return (
    <TextField
      onInput={props.onInput}
      onKeyPress={props.onKeyPress}
      placeholder={props.placeholder}
      value={props.query}
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchRoundedIcon />
          </InputAdornment>
        ),
      }}
      fullWidth
      margin='dense'
      size='small'
      variant='outlined'
    />
  );
};



const ProgrammingLanguages = (props) => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const viewMore = (event) => {
    event.preventDefault()
    console.log('View More Languages');
  };
  return (
    <List dense disablePadding style={{ foo: 'bar' }}>
      <ListItem button onClick={handleClick}>
        <ListItemText primary='Primary Programming Language:' primaryTypographyProps={{ variant: 'h6' }} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto'>
        <List dense disablePadding style={{ foo: 'baz' }}>
          <ListItem>
            <SearchField data-cy='search-programming-languages-used' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox />} label='JavaScript' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox />} label='Python' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox />} label='Java' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox />} label='Go' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox />} label='TypeScript' />
          </ListItem>
          <ListItem>
            <Typography variant='body2'>
              <Link onClick={viewMore}>
                View More Languages
              </Link>
            </Typography>
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};

const Affiliation = (props) => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
    const viewMore = (event) => {
      event.preventDefault();
      console.log('View More Affiliations');
    };

  return (
    <List dense disablePadding style={{ foo: 'bar' }}>
      <ListItem button onClick={handleClick}>
        <ListItemText primary='Affliation:' primaryTypographyProps={{ variant: 'h6' }} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto'>
        <List dense disablePadding style={{ foo: 'baz' }}>
          <ListItem>
            <SearchField data-cy='search-affiliation' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox />} label='Unaffiliated' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox />} label='Code for All' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox />} label='Code for America' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox />} label='Hack for LA' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox />} label='Open Oakland' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox />} label='Code for Canada' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox />} label='Code for Japan' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox />} label='Open Democracy Labs' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox />} label='Yale Openlab' />
          </ListItem>
          <ListItem>
            <Typography variant='body2'>
              <Link onClick={viewMore}>View More Affiliations</Link>
            </Typography>
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};

const OpenIssues = (props) => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List dense disablePadding style={{ foo: 'bar' }}>
      <ListItem button onClick={handleClick}>
        <ListItemText primary='Open Issues Count:' primaryTypographyProps={{ variant: 'h6' }} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto'>
        <List dense disablePadding style={{ foo: 'baz' }}>
          <ListItem>
            <FormControlLabel control={<Checkbox />} label='0 - 10' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox />} label='11 - 20' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox />} label='21 - 50' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox />} label='50+' />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};

const LastUpdated = (props) => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List dense disablePadding style={{ foo: 'bar' }}>
      <ListItem button onClick={handleClick}>
        <ListItemText primary='Last Updated:' primaryTypographyProps={{ variant: 'h6' }} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto'>
        <List dense disablePadding style={{ foo: 'baz' }}>
          <ListItem>
            <FormControlLabel control={<Checkbox />} label='Within the last 24 hours' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox />} label='Within the last week' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox />} label='Within the last 30 days' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox />} label='1 - 6 months' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox />} label='7 - 12 months' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox />} label='More than a year ago' />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};

const RefineResults = () => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <ThemeProvider theme={themeMerge}>
      <List dense disablePadding style={{ foo: 'baz' }}>
        <ListItem button onClick={handleClick}>
          <ListItemText primary='Refine Results' primaryTypographyProps={{ variant: 'h5' }} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout='auto'>
          <List dense disablePadding style={{ foo: 'bar' }}>
            <ListItem>
              <ProgrammingLanguages />
            </ListItem>
            <ListItem>
              <Affiliation />
            </ListItem>
            <ListItem>
              <OpenIssues />
            </ListItem>
            <ListItem>
              <LastUpdated />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </ThemeProvider>
  );
};

export default RefineResults;
