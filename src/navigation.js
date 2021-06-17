const navigation = [
  {
    id: 'join',
    header: 'Join the Index',
    route: '/join-index',
    subNavigation: [
      {
        id: 'addProject',
        header: 'How to Add Your Project to the Index',
        route: '/join-index/how-to-add',
      },
    ],
  },
  {
    id: 'about',
    header: 'About',
    route: '/about',
    subNavigation: [
      {
        id: 'faq',
        header: 'FAQ',
        route: '/about/faq',
      },
      {
        id: 'contact',
        header: 'Contact Us',
        route: '/about/contact',
      },
    ],
  },
  {
    id: 'organizations',
    header: 'Organizations',
    route: '/organizations/all',
    subNavigation: [],
  },
  {
    id: 'collaborate',
    header: 'Collaborate with Us',
    route: '/support',
    subNavigation: [
      {
        id: 'donate',
        header: 'Donate',
        route: '/support/donate',
      },
      {
        id: 'share',
        header: 'Share the CTI',
        route: '/support/share',
      },
      {
        id: 'volunteer',
        header: 'Volunteer with Us',
        route: 'https://www.hackforla.org/projects/civic-tech-index',
        isExternal: true,
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
