import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import HeaderSmall from './HeaderSmall';
import HeaderLarge from './HeaderLarge';

const Header = () => {
  const theme = useTheme();
  const headerSize = useMediaQuery(theme.breakpoints.up('md'));

  const links = {
    about: [
      { text: 'Overview', to: '/about' },
    ],
    join: [
      { text: 'Tag Generator', to: '/tag-generator' },
    ],
    contribute: [
      { text: 'Index Contributors', to: '/contributors/all' },
      { text: 'Unaffiliated', to: '/contributors/unaffiliated' },
      { text: 'Affiliated', to: '/contributors/affiliated' },
    ],
    collaborate: [
      { text: 'How to Do It', to: '/adding-projects-to-the-index' },
      { text: 'Donate', to: '/donate' },
      { text: 'Share the CTI', to: '/' },
      { text: 'Volunteer with Us', to: 'https://www.hackforla.org/projects/civic-tech-index', external: true },
      { text: 'FAQ', to: '/radicalcollaboration/faq' },
    ],
  };

  return headerSize ? <HeaderLarge links={links} /> : <HeaderSmall links={links} />;
};

export default Header;