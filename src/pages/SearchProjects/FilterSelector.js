/* eslint-disable multiline-comment-style */
import React, { useState } from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

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
      button: {
        '&:hover': {
          backgroundColor: 'none',
        },
      },
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
        fontWeight: 700,
        '&:hover': {
          cursor: 'pointer',
        },
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

const useStyles = makeStyles((theme) => ({
  backArrow: {
    fontSize: '2rem',
    marginBottom: theme.spacing(6),
    '&:hover': {
      cursor: 'pointer',
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2),
    '& button': {
      margin: theme.spacing(1),
      maxWidth: '9rem',
      '&:first-child': {
        background: 'none',
        border: '1px solid',
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
      },
    },
  },
  dropdown: {
    backgroundColor: theme.palette.background.default,
    border: '1px solid',
    borderColor: theme.palette.primary.main,
    borderRadius: '4px',
    marginBottom: theme.spacing(0.5),
    marginTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingLeft: theme.spacing(1.5),
    paddingTop: theme.spacing(0.5),
    width: '100%',
  },
  dropdownList: {
    marginBottom: theme.spacing(2),
  },
  filterSection: {
    backgroundColor: theme.palette.background.secondary,
    minHeight: '32rem',
    padding: theme.spacing(3),
  },
  header: {
    marginBottom: theme.spacing(2),
    textAlign: 'center',
  },
  linkContainer: {
    paddingBottom: theme.spacing(2),
    textAlign: 'center',
    width: '100%',
    '& a': {
      color: theme.palette.secondary.main,
    },
  },
  query: {
    color: theme.palette.secondary.main,
  },
  resultMessage: {
    marginBottom: theme.spacing(1),
  },
}));

const FilterDropdownLarge = ({
  category,
  filterList,
  label,
  onChange,
  showViewMore,
}) => {
  const [open, setOpen] = useState(true);
  const [viewMore, setViewMore] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  let viewMoreLink = null;
  if (showViewMore) {
    filterList = viewMore ? filterList : filterList.slice(0, 5);
    viewMoreLink = (
      <Link
        component='button'
        data-cy={`view-${category}`}
        onClick={() => setViewMore(!viewMore)}
        variant='body2'
      >
        View {viewMore ? 'Less' : 'More'} {category}
      </Link>

    );
  }
  const filters = filterList.map((filter) => {
    return (
      <ListItem key={`${filter.category}:${filter.name}`}>
        <FormControlLabel
          control={
            <Checkbox
              onChange={(e) => onChange({ ...filter, selected: e.target.checked })}
              checked={filter.selected}
            />
          }
          label={filter.label} />
      </ListItem>
    );
  });

  return (
    <List dense disablePadding>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={label} primaryTypographyProps={{ variant: 'h6' }} />
        {open ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />}
      </ListItem>
      <Collapse in={open} timeout='auto'>
        <List dense disablePadding>
          {filters}
          <ListItem>
            {viewMoreLink}
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};

const FilterDropdownSmall = ({
  category,
  filterList,
  label,
  onChange,
  showViewMore,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [viewMore, setViewMore] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  let viewMoreLink = null;
  if (showViewMore) {
    filterList = viewMore ? filterList : filterList.slice(0, 5);
    viewMoreLink = (
      <Box className={classes.linkContainer}>
        <Typography variant='body2'>
          <Link onClick={() => setViewMore(!viewMore)}>
            View {viewMore ? 'Less' : 'More'} {category}
          </Link>
        </Typography>
      </Box>
    );
  }
  const filters = filterList.map((filter) => {
    return (
      <ListItem key={`${filter.category}:${filter.name}`}>
        <FormControlLabel
          control={
            <Checkbox
              color='secondary'
              checked={filter.selected}
              onChange={(e) => onChange({ ...filter, selected: e.target.checked })}
            />
          }
          label={filter.label} />
      </ListItem>
    );
  });

  return (
    <List dense disablePadding className={classes.dropdown}>
      <ListItem button onClick={handleClick}>
        <ListItemText
          primary={label}
          primaryTypographyProps={{ variant: 'body2', color: 'primary' }}
        />
        {open ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />}
      </ListItem>
      <Collapse in={open} timeout='auto'>
        <List dense disablePadding className={classes.dropdownList}>
          {filters}
        </List>
        {viewMoreLink}
      </Collapse>
    </List>
  );
};

const FilterSelector = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const languageFilterList = props.filterList.filter((filter) => filter.category === 'language')
  // const lastUpdatedFilterList = props.filterList.filter((filter) => filter.category === 'pushed');
  const affiliationFilterList = props.filterList.filter((filter) => filter.category === 'topic');

  const handleClick = () => {
    setOpen(!open);
  };

  const handleListChange = (flt) => {
    props.onFilterChange(flt, false);
  };

  const filterPropsList = [
    {
      category: 'Languages',
      filterList: languageFilterList,
      label: 'Primary Programming Language:',
      onChange: handleListChange,
      showViewMore: true,
    },
    {
      category: 'Affiliations',
      filterList: affiliationFilterList,
      label: 'Affiliation:',
      onChange: handleListChange,
      showViewMore: true,
    },
    // {
    //   category: 'LastUpdated',
    //   filterList: lastUpdatedFilterList,
    //   label: 'Last Updated:',
    //   onChange: handleListChange,
    //   showViewMore: false,
    // },
  ];

  const filterDropdowns = filterPropsList.map((filterProps) => {
    return (
      <ListItem key={filterProps.category}>
        {props.variant === 'large' ? <FilterDropdownLarge { ...filterProps } /> : <FilterDropdownSmall { ...filterProps } />}
      </ListItem>
    );
  });

  if (props.variant === 'large') {
    return (
      <ThemeProvider theme={themeMerge}>
        <List dense disablePadding>
          <ListItem button onClick={handleClick}>
            <ListItemText primary='Filter' primaryTypographyProps={{ variant: 'h5' }} />
            {open ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />}
          </ListItem>
          <Collapse in={open} timeout='auto'>
            <List dense disablePadding>
              {filterDropdowns}
              <ListItem>
                <Button onClick={() => props.onFilterChange({ category: 'all' }, true)}>Reset Filter</Button>
              </ListItem>
            </List>
          </Collapse>
        </List>
        <br />
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={themeMerge}>
      <Box className={classes.filterSection}>
        <ChevronLeftIcon className={classes.backArrow} onClick={() => {props.onFilterClose(true)}} />
        <Grid container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <List dense disablePadding>
              <Typography variant='h5' className={classes.header}>Filter</Typography>
              <Typography variant='body2' color='primary' className={classes.resultMessage}>
                Displaying {props.itemLength} of {props.totalCount} results matching:
                <span className={classes.query}> “{props.queryStr}”</span>
              </Typography>
              <List dense disablePadding>
                {filterDropdowns}
              </List>
            </List>
            <Box className={classes.buttonContainer}>
              <Button onClick={() => props.onFilterChange({ category: 'all' }, true)}>Reset Filter</Button>
              <Button onClick={() => props.onFilterClose(false)}>Apply Filter</Button>
            </Box>
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default FilterSelector;
