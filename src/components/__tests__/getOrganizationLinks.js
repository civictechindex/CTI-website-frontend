import { getOrganizationLinks } from '../getOrganizationLinks';

import links from '../__fixtures__/links.json';
import organizations from '../__fixtures__/organizations.json';

it('gets organization links', () => {
  organizations.forEach((org, i) => {
    const result = getOrganizationLinks(org);
    expect(result).toEqual(links[i]);
  });
});
