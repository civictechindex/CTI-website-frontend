import React, { useState } from 'react';
import clsx from 'clsx';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ExpandLess from '@material-ui/icons/ExpandLessRounded';
import ExpandMore from '@material-ui/icons/ExpandMoreRounded';

const theme = createMuiTheme({
  overrides: {
    MuiCheckbox: {
      root: {
        borderRadius: 0,
        margin: 0,
        padding: 0,
        '&$checked': {
          color: '#004364',
        },
      },
    },
  },
  props: {
    MuiCheckbox: {
      color: 'primary',
      size: 'small',
    },
  },
});

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
      color='secondary'
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
  return (
    <List dense disablePadding style={{ foo: 'bar' }}>
      <ListItem button onClick={handleClick}>
        <ListItemText primary='Programming Language(s) Used:' />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto'>
        <List dense disablePadding style={{ foo: 'baz' }}>
          <ListItemText>
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
              <Typography variant='body2'>View More Languages</Typography>
            </ListItem>
          </ListItemText>
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
  return (
    <List dense disablePadding style={{ foo: 'bar' }}>
      <ListItem button onClick={handleClick}>
        <ListItemText primary='Affliation:' />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto'>
        <List dense disablePadding style={{ foo: 'baz' }}>
          <ListItemText>
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
              <List dense disablePadding style={{ foo: 'bar' }}>
                <ListItem>
                  <FormControlLabel control={<Checkbox />} label='Code for America' />
                </ListItem>
                <ListItem>
                  <List dense disablePadding style={{ foo: 'baz' }}>
                    <ListItem>
                      <FormControlLabel control={<Checkbox />} label='Hack for LA' />
                    </ListItem>
                    <ListItem>
                      <FormControlLabel control={<Checkbox />} label='Open Oakland' />
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem>
                  <FormControlLabel control={<Checkbox />} label='Code for Canada' />
                </ListItem>
                <ListItem>
                  <FormControlLabel control={<Checkbox />} label='Code for Japan' />
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <FormControlLabel control={<Checkbox />} label='Open Democracy Labs' />
            </ListItem>
            <ListItem>
              <FormControlLabel control={<Checkbox />} label='Yale Openlab' />
            </ListItem>
            <ListItem>
              <Typography variant='body2'>View More Affiliations</Typography>
            </ListItem>
          </ListItemText>
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
        <ListItemText primary='Open Issues Count:' />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto'>
        <List dense disablePadding style={{ foo: 'baz' }}>
          <ListItemText>
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
          </ListItemText>
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
        <ListItemText primary='Last Updated:' />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto'>
        <List dense disablePadding style={{ foo: 'baz' }}>
          <ListItemText>
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
          </ListItemText>
        </List>
      </Collapse>
    </List>
  );
};

const CreatedId = (props) => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List dense disablePadding style={{ foo: 'bar' }}>
      <ListItem button onClick={handleClick}>
        <ListItemText primary='Created In:' />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto'>
        <List dense disablePadding style={{ foo: 'baz' }}>
          <ListItemText>
            <ListItem>
              <FormControlLabel control={<Checkbox />} label='North America' />
            </ListItem>
            <ListItem>
              <FormControlLabel control={<Checkbox />} label='South America' />
            </ListItem>
            <ListItem>
              <FormControlLabel control={<Checkbox />} label='Africa' />
            </ListItem>
            <ListItem>
              <FormControlLabel control={<Checkbox />} label='Asia' />
            </ListItem>
            <ListItem>
              <FormControlLabel control={<Checkbox />} label='Europe' />
            </ListItem>
            <ListItem>
              <FormControlLabel control={<Checkbox />} label='Australia' />
            </ListItem>
          </ListItemText>
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
    <ThemeProvider theme={theme}>
      <List dense disablePadding style={{ foo: 'baz' }}>
        <ListItem button onClick={handleClick}>
          <ListItemText primary='Refine Results' />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout='auto'>
          <List dense disablePadding style={{ foo: 'bar' }}>
            <ListItemText>
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
              <ListItem>
                <CreatedId />
              </ListItem>
            </ListItemText>
          </List>
        </Collapse>
      </List>
    </ThemeProvider>
  );
};

export default RefineResults;
