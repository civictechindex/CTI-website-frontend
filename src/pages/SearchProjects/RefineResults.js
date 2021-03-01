import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     // width: '100%',
//   },
// }));

const SearchField = (props) => {
  return (
    <TextField
      data-cy='search-programming-languages-used'
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchRoundedIcon />
          </InputAdornment>
        ),
      }}
      value={props.query}
      onInput={props.onInput}
      variant='outlined'
      placeholder={props.placeholder}
      fullWidth
      margin='normal'
      onKeyPress={props.onKeyPress}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

const ProgrammingLanguages = (props) => {
  return (
    <Accordion expanded square style={{ backgroundColor: 'cyan' }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant='h6'>Programming Language(s) Used:</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List dense disablePadding style={{ backgroundColor: 'pink' }}>
          <ListItem>
            <SearchField />
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
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

const Affiliation = (props) => {
  return (
    <Accordion expanded square style={{ backgroundColor: 'cyan' }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant='h6'>Affiliation:</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List dense disablePadding style={{ backgroundColor: 'pink' }}>
          <ListItem>
            <SearchField />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox />} label='Unaffiliated' />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox />} label='Code for All' />
          </ListItem>
          <ListItem>
            <List dense disablePadding style={{ backgroundColor: 'cyan' }}>
              <ListItem>
                <FormControlLabel control={<Checkbox />} label='Code for America' />
              </ListItem>
              <ListItem>
                <List dense disablePadding style={{ backgroundColor: 'pink' }}>
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
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

const RefineResults = () => {
  // const classes = useStyles();

  return (
    <Accordion expanded square style={{ backgroundColor: 'pink' }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant='h5'>Refine Results</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          <Grid item xs={12}>
            <ProgrammingLanguages />
          </Grid>
          <Grid item xs={12}>
            <Affiliation />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default RefineResults;
