import React, { useEffect, useState } from 'react';
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
            <FormControlLabel control={<Checkbox onChange={(e) => props.onChange('language', 'javascript', e.target.checked)} />} label='JavaScript' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox onChange={(e) => props.onChange('language', 'python', e.target.checked)} />} label='Python' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox onChange={(e) => props.onChange('language', 'java', e.target.checked)} />} label='Java' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox onChange={(e) => props.onChange('language', 'go', e.target.checked)} />} label='Go' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox onChange={(e) => props.onChange('language', 'typescript', e.target.checked)} />} label='TypeScript' />
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
    // eslint-disable-next-line
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
            <FormControlLabel control={<Checkbox onChange={(e) => props.onChange('topic', 'unaffiliated', e.target.checked)} />} label='Unaffiliated' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox onChange={(e) => props.onChange('topic', 'code-for-all', e.target.checked)} />} label='Code for All' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox onChange={(e) => props.onChange('topic', 'code-for-america', e.target.checked)} />} label='Code for America' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox onChange={(e) => props.onChange('topic', 'hack-for-la', e.target.checked)} />} label='Hack for LA' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox onChange={(e) => props.onChange('topic', 'open-oakland', e.target.checked)} />} label='Open Oakland' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox onChange={(e) => props.onChange('topic', 'code-for-canada', e.target.checked)} />} label='Code for Canada' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox onChange={(e) => props.onChange('topic', 'code-for-japan', e.target.checked)} />} label='Code for Japan' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox onChange={(e) => props.onChange('topic', 'open-democracy-labs', e.target.checked)} />} label='Open Democracy Labs' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox onChange={(e) => props.onChange('topic', 'yale-openlab', e.target.checked)} />} label='Yale Openlab' />
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

/*
 * const OpenIssues = (props) => {
 *   const [open, setOpen] = useState(true);
 *   const handleClick = () => {
 *     setOpen(!open);
 *   };
 *   return (
 *     <List dense disablePadding style={{ foo: 'bar' }}>
 *       <ListItem button onClick={handleClick}>
 *         <ListItemText primary='Open Issues Count:' primaryTypographyProps={{ variant: 'h6' }} />
 *         {open ? <ExpandLess /> : <ExpandMore />}
 *       </ListItem>
 *       <Collapse in={open} timeout='auto'>
 *         <List dense disablePadding style={{ foo: 'baz' }}>
 *           <ListItem>
 *             <FormControlLabel control={<Checkbox />} label='0 - 10' />
 *           </ListItem>
 *           <ListItem>
 *             <FormControlLabel control={<Checkbox />} label='11 - 20' />
 *           </ListItem>
 *           <ListItem>
 *             <FormControlLabel control={<Checkbox />} label='21 - 50' />
 *           </ListItem>
 *           <ListItem>
 *             <FormControlLabel control={<Checkbox />} label='50+' />
 *           </ListItem>
 *         </List>
 *       </Collapse>
 *     </List>
 *   );
 * };
 */

const LastUpdated = (props) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const getDateWithOffset = (unit, offset) => {
    const d = new Date();
    switch (unit) {
    case 'h': d.setHours(d.getHours() - offset); break;
    case 'd': d.setDate(d.getDate() - offset); break;
    case 'm': d.setMonth(d.getMonth() - offset); break;
    case 'y': d.setFullYear(d.getFullYear() - offset); break;
    default: return d.toISOString().split('T')[0];
    }
    return d.toISOString().split('T')[0];
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
            <FormControlLabel
              control={<Checkbox onChange={(e) => props.onChange('pushed', '24h', e.target.checked, `>=${getDateWithOffset('h', 24)}`)} />}
              label='Within the last 24 hours'
            />
          </ListItem>
          <ListItem>
            <FormControlLabel
              control={<Checkbox onChange={(e) => props.onChange('pushed', '7d', e.target.checked, `>=${getDateWithOffset('d', 7)}`)} />}
              label='Within the last week'
            />
          </ListItem>
          <ListItem>
            <FormControlLabel
              control={<Checkbox onChange={(e) => props.onChange('pushed', '30d', e.target.checked, `>=${getDateWithOffset('d', 30)}`)} />}
              label='Within the last 30 days'
            />
          </ListItem>
          <ListItem>
            <FormControlLabel
              control={<Checkbox onChange={(e) => props.onChange('pushed', '1m', e.target.checked, `${getDateWithOffset('m', 6)}..${getDateWithOffset('m', 1)}`)} />}
              label='1 - 6 months'
            />
          </ListItem>
          <ListItem>
            <FormControlLabel
              control={<Checkbox onChange={(e) => props.onChange('pushed', '6m', e.target.checked, `${getDateWithOffset('m', 12)}..${getDateWithOffset('m', 6)}`)} />}
              label='6 - 12 months'
            />
          </ListItem>
          <ListItem>
            <FormControlLabel
              control={<Checkbox onChange={(e) => props.onChange('pushed', '1y', e.target.checked, `<${getDateWithOffset('y', 1)}`)} />}
              label='More than a year ago'
            />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};

const RefineResults = (props) => {
  const [open, setOpen] = useState(true);
  const [filters, setFilters] = useState([
    { category: 'language', name: 'javascript', value: '', selected: false },
    { category: 'language', name: 'python', value: '', selected: false },
    { category: 'language', name: 'java', value: '', selected: false },
    { category: 'language', name: 'go', value: '', selected: false },
    { category: 'language', name: 'typescript', value: '', selected: false },
    { category: 'topic', name: 'unaffiliated', value: '', selected: false },
    { category: 'topic', name: 'code-for-all', value: '', selected: false },
    { category: 'topic', name: 'code-for-america', value: '', selected: false },
    { category: 'topic', name: 'hack-for-la', value: '', selected: false },
    { category: 'topic', name: 'open-oakland', value: '', selected: false },
    { category: 'topic', name: 'code-for-canada', value: '', selected: false },
    { category: 'topic', name: 'code-for-japan', value: '', selected: false },
    { category: 'topic', name: 'open-democracy-labs', value: '', selected: false },
    { category: 'topic', name: 'yale-openlab', value: '', selected: false },
    { category: 'pushed', name: '24h', value: '', selected: false },
    { category: 'pushed', name: '7d', value: '', selected: false },
    { category: 'pushed', name: '30d', value: '', selected: false },
    { category: 'pushed', name: '1m', value: '', selected: false },
    { category: 'pushed', name: '6m', value: '', selected: false },
    { category: 'pushed', name: '1y', value: '', selected: false },
  ]);
  useEffect(() => {
    const selectedFilters = filters.filter((filter) => {
      return filter.selected;
    });
    props.onFilterChange(selectedFilters);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleListChange = (category, name, selected, value = '') => {
    const newFilters = filters.map((filter) => {
      if (filter.category === category && filter.name === name) {
        return { ...filter, selected: selected, value: value}
      }
      return filter
    });
    setFilters(newFilters);
  };

  return (
    <ThemeProvider theme={themeMerge}>
      <List dense disablePadding style={{ foo: 'baz' }}>
        <ListItem button onClick={handleClick}>
          <ListItemText primary='Filter' primaryTypographyProps={{ variant: 'h5' }} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout='auto'>
          <List dense disablePadding style={{ foo: 'bar' }}>
            <ListItem>
              <ProgrammingLanguages onChange={handleListChange} />
            </ListItem>
            <ListItem>
              <Affiliation onChange={handleListChange} />
            </ListItem>
            <ListItem>
              <LastUpdated onChange={handleListChange} />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </ThemeProvider>
  );
};

export default RefineResults;
