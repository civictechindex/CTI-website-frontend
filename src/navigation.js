const navigation = [
  {
    id: 'join',
    header: 'Join',
    route: '/tag-generator',
    subNavigation: [
      {
        id: 'overview',
        header: 'Tag Generator',
        route: '/tag-generator',
      },
    ],
  },
  {
    id: 'about',
    header: 'About',
    route: '/about',
    subNavigation: [
      {
        id: 'overview',
        header: 'About',
        route: '/about',
      },
    ],
  },
  {
    id: 'organizations',
    header: 'Organizations',
    route: '/contributors/all',
    subNavigation: [
      {
        id: 'indexContributors',
        header: 'Index Contributors',
        route: '/contributors/all',
      },
      {
        id: 'unaffiliated',
        header: 'Unaffiliated',
        route: '/contributors/unaffiliated',
      },
      {
        id: 'affiliated',
        header: 'Affiliated',
        route: '/contributors/affiliated',
      },
    ],
  },
  {
    id: 'radicalCollaboration',
    header: 'Radical Collaboration',
    route: '/support',
    subNavigation: [
      {
        id: 'collaborateWithUs',
        header: 'Collaborate with Us',
        route: '/support',
      },
      {
        id: 'howToDoIt',
        header: 'How to Do It',
        route: '/adding-projects-to-the-index',
      },
      {
        id: 'donate',
        header: 'Donate',
        route: '/donate',
      },
      {
        id: 'shareTheCti',
        header: 'Share the CTI',
        route: '/radicalcollaboration/sharethecti',
      },
      {
        id: 'volunteerWithUs',
        header: 'Volunteer with Us',
        route: 'https://www.hackforla.org/projects/civic-tech-index',
        isExternal: true,
      },
      {
        id: 'faq',
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
