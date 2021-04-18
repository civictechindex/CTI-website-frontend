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
      root: {
        marginLeft: 0,
      },
      label: {
        fontSize: '1rem',
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
      fullWidth
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
      margin='dense'
      onInput={props.onInput}
      onKeyPress={props.onKeyPress}
      placeholder={props.placeholder}
      size='small'
      value={props.query}
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
    event.preventDefault();
    // eslint-disable-next-line
    console.log('View More Languages');
  };

  const languageFilters = props.filterList.map((filter) => {
    return (
      <ListItem key={`${filter.category}:${filter.name}`}>
        <FormControlLabel
          control={<Checkbox onChange={(e) => props.onChange({ ...filter, selected: e.target.checked })} checked={filter.selected} />}
          label={filter.label} />
      </ListItem>
    );
  });

  return (
    <List dense disablePadding style={{ foo: 'bar' }}>
      <ListItem button onClick={handleClick}>
        <ListItemText primary='Primary Programming Language:' primaryTypographyProps={{ variant: 'h6' }} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto'>
        <List dense disablePadding>
          <ListItem>
            <SearchField data-cy='search-programming-languages-used' />
          </ListItem>
          {languageFilters}
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
    // eslint-disable-next-line
    console.log('View More Affiliations');
  };

  const topicFilters = props.filterList.map((filter) => {
    return (
      <ListItem key={`${filter.category}:${filter.name}`}>
        <FormControlLabel
          control={<Checkbox onChange={(e) => props.onChange({ ...filter, selected: e.target.checked })} checked={filter.selected} />}
          label={filter.label} />
      </ListItem>
    );
  });

  return (
    <List dense disablePadding>
      <ListItem button onClick={handleClick}>
        <ListItemText primary='Affliation:' primaryTypographyProps={{ variant: 'h6' }} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto'>
        <List dense disablePadding>
          <ListItem>
            <SearchField data-cy='search-affiliation' />
          </ListItem>
          {topicFilters}
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

const LastUpdated = (props) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const topicFilters = props.filterList.map((filter) => {
    return (
      <ListItem key={`${filter.category}:${filter.name}`}>
        <FormControlLabel
          control={<Checkbox onChange={(e) => props.onChange({ ...filter, selected: e.target.checked })} checked={filter.selected} />}
          label={filter.label} />
      </ListItem>
    );
  });

  return (
    <List dense disablePadding>
      <ListItem button onClick={handleClick}>
        <ListItemText primary='Last Updated:' primaryTypographyProps={{ variant: 'h6' }} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto'>
        <List dense disablePadding>
          {topicFilters}
        </List>
      </Collapse>
    </List>
  );
};

const RefineResults = (props) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleListChange = (filterProps) => {
    props.onFilterChange(filterProps, false);
  };

  const languageFilterList = props.filterList.filter((filter) => filter.category === 'language');
  const topicFilterList = props.filterList.filter((filter) => filter.category === 'topic');
  const lastUpdatedFilterList = props.filterList.filter((filter) => filter.category === 'pushed');

  return (
    <ThemeProvider theme={themeMerge}>
      <List dense disablePadding>
        <ListItem button onClick={handleClick}>
          <ListItemText primary='Filter' primaryTypographyProps={{ variant: 'h5' }} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout='auto'>
          <List dense disablePadding style={{ foo: 'bar' }}>
            <ListItem>
              <ProgrammingLanguages onChange={handleListChange} filterList={languageFilterList} />
            </ListItem>
            <ListItem>
              <Affiliation onChange={handleListChange} filterList={topicFilterList} />
            </ListItem>
            <ListItem>
              <LastUpdated onChange={handleListChange} filterList={lastUpdatedFilterList} />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </ThemeProvider>
  );
};

export default RefineResults;
