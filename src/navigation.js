const navigation = [
  {
    key: 'join',
    header: 'Join',
    route: '/tag-generator',
    subNavigation: [
      {
        key: 'overview',
        header: 'Tag Generator',
        route: '/tag-generator',
      },
    ],
  },
  {
    key: 'about',
    header: 'About',
    route: '/about',
    subNavigation: [
      {
        key: 'overview',
        header: 'About',
        route: '/about',
      },
    ],
  },
  {
    key: 'organizations',
    header: 'Organizations',
    route: '/contributors/all',
    subNavigation: [
      {
        key: 'indexContributors',
        header: 'Index Contributors',
        route: '/contributors/all',
      },
      {
        key: 'unaffiliated',
        header: 'Unaffiliated',
        route: '/contributors/unaffiliated',
      },
      {
        key: 'affiliated',
        header: 'Affiliated',
        route: '/contributors/affiliated',
      },
    ],
  },
  {
    key: 'radicalCollaboration',
    header: 'Radical Collaboration',
    route: '/support',
    subNavigation: [
      {
        key: 'collaborateWithUs',
        header: 'Collaborate with Us',
        route: '/support',
      },
      {
        key: 'howToDoIt',
        header: 'How to Do It',
        route: '/adding-projects-to-the-index',
      },
      {
        key: 'donate',
        header: 'Donate',
        route: '/donate',
      },
      {
        key: 'shareTheCti',
        header: 'Share the CTI',
        route: '/radicalcollaboration/sharethecti',
      },
      {
        key: 'volunteerWithUs',
        header: 'Volunteer with Us',
        route: 'https://www.hackforla.org/projects/civic-tech-index',
        isExternal: true,
      },
      {
        key: 'faq',
        header: 'FAQ',
        route: '/radicalcollaboration/faq',
      },
    ],
  },
];

const findSubNavParent = (subNavRoute) => {
  let results;
  navigation.forEach((nav) => {
    const found = nav.subNavigation.some((element) => element.route === subNavRoute);
    if (found) {
      results = nav.route;
    }
  });
  return results;
};

module.exports = {
  findSubNavParent,
  navigation,
};
