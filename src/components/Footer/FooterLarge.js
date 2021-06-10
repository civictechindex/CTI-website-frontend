import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import useStyles from './styles';

import LinkList from './LinkList';
import SocialSection from './socialSection';
import SubscribeSection from './subscribeSection';
import Annotation from './Annotation';
import { navigation } from '../../navigation';

const FooterLarge = () => {
  const classes = useStyles();

  return (
    <Box className={classes.containerFooter}>
      <Container className={classes.footerContainer}>
        {navigation.map((nav) => {
          return (
            <LinkList
              key={nav.id}
              header={nav.header}
              route={nav.route}
              links={nav.subNavigation}
            />
          );
        })}
        <SocialSection size='lg' />
        <SubscribeSection size='lg' />
      </Container>
      <Annotation />
    </Box>
  );
};

export default FooterLarge;
