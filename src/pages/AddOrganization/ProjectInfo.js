import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import useStyles from './styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

export class ProjectInfo extends Component {
  // Validate fields
  // validate = () => {
  //   let orgEmailError = '';

  //   if (!this.state.orgEmail.includes('@')) {
  //     orgEmailError = 'Invalid email entered';
  //   }

  //   if (orgEmailError) {
  //     this.setState({ orgEmailError });
  //     return false;
  //   }

  //   return true;
  // };

  continue = (e) => {
    e.preventDefault();
    // const isValid = this.validate();
    // if (isValid) {
    this.props.nextStep();
    // }
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <Box style={{ justifyContent: 'center' }}>
          <Container style={{ maxWidth: '600px' }}>
            <Grid container>
              <Grid item style={{ textAlign: 'left', width: '50%', padding: '47px 0 0 0' }}>
                <Typography variant='subtitle1'>Project Information</Typography>
              </Grid>
              <Grid item style={{ textAlign: 'right', width: '50%', padding: '47px 0 0 0' }}>
                <Typography variant='subtitle1' style={{ color: '#004364' }}>
                  <b>1</b>/2
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction='column'>
              <LinearProgress variant='determinate' color='secondary' value={50} />
              <Typography variant='h5' style={{ color: '#004364', padding: '27px 0 0 0' }}>
                Organization Detail
              </Typography>
              <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
                Organization Email
              </Typography>
              <TextField
                name={values.orgEmail}
                placeholder='Name@example.com'
                onChange={handleChange('orgEmail')}
                defaultValue={values.orgEmail}
              />
              <div style={{ color: 'red' }}>{values.orgEmailError}</div>
              <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
                Organization Name:
              </Typography>
              <TextField onChange={handleChange('orgName')} defaultValue={values.orgName} />
              <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
                Parent Organization:
              </Typography>
              <TextField onChange={handleChange('parentOrg')} defaultValue={values.parentOrg} />
              <Typography variant='h5' style={{ color: '#004364', padding: '50px 0 0 0' }}>
                Organization URL
              </Typography>
              <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
                Website URL:*
              </Typography>
              <TextField
                placeholder='http://example.com...'
                onChange={handleChange('websiteURL')}
                defaultValue={values.websiteURL}
              />
              <Typography variant='subtitle1' style={{ padding: '31px 0 0 0' }}>
                Github URL:*
              </Typography>
              <TextField
                placeholder='http://github.com/example...'
                onChange={handleChange('githubURL')}
                defaultValue={values.githubURL}
              />
              <Typography variant='h5' style={{ color: '#004364', padding: '50px 0 0 0' }}>
                Your GitHub Organization Tags
              </Typography>
              <Typography variant='subtitle2' style={{ fontStyle: 'italic' }}>
                This is the GitHub tag that your organization uses such as <br />
                "code-for-america", "open-oakland" or "hack4la".
              </Typography>
              <TextField
                placeholder='open-oakland'
                onChange={handleChange('githubTag')}
                defaultValue={values.githubTag}
              />
            </Grid>
            {/* //Buttons */}
            <Grid
              container
              justify='center'
              alignItems='center'
              style={{ padding: '40px 0 60px 0' }}
            >
              <Grid item style={{ textAlign: 'center' }}>
                <Button
                  style={{ width: '250px', padding: '10px', margin: '12px' }}
                  variant='contained'
                  color='default'
                  href='/tag-generator'
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item style={{ textAlign: 'center' }}>
                <Button
                  style={{ width: '250px', padding: '10px', margin: '12px' }}
                  variant='contained'
                  color='secondary'
                  onClick={this.continue}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
    );
  }
}

export default ProjectInfo;
