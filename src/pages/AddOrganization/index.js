import React, { useState } from 'react';
import AddOrgForm from './AddOrgForm';
import { PageTitle } from './PageTitle';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const index = () => {
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
};

export default index;
