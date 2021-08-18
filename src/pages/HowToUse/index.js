import React from 'react'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import GenericHeaderSection from '../../components/GenericHeaderSection';
import TagGeneratorInstructions from "../../components/TagGeneratorInstructions";

const HowToUse = () => {
  const breadCrumbLinks = [
    { name: 'Home', href: '/home' },
    { name: 'How to Add Your Project', href: '/join-index/how-to-add' },
  ];
  return (
    <Box className="pageContainer">
      <Box className='containerDefault'>
        <Container>
          <GenericHeaderSection
            mainTitle='How to Add Your Project'
            breadCrumbLinks={breadCrumbLinks}
          />
        </Container>
      </Box>
      <TagGeneratorInstructions />
    </Box>
  )
}

export default HowToUse


