import React, { Component } from 'react';
import AddOrgForm from './AddOrgForm';
import { PageTitle } from './PageTitle';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

export class index extends Component {
  render() {
    return (
      <div>
        <Box className='pageContainer'>
          <Box className='containerDefault'>
            <Container>
              <PageTitle />
            </Container>
          </Box>
          <Box>
            <Container>
              <AddOrgForm />
            </Container>
          </Box>
        </Box>
      </div>
    );
  }
}

export default index;
