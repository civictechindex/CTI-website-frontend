import React from 'react'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import GenericHeaderSection from '../../components/GenericHeaderSection';
import TagGeneratorInstructions from "../../components/TagGeneratorInstructions";

const HowToUse = () => {
  const breadCrumbLinks = [
    { href: '/home', name: 'Home' },
    { href: '/join-index/how-to-add', name: 'How to Add Your Project' },
  ];
  return (
    <Box className='pageContainer'>
      <Box className='boxBackground'>
        <Container className='containerDefault'>
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


