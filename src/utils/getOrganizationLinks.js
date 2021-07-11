import { names } from '../components/data/orgs.js';

/** githubUrl comes in a few flavors
 *  and we always want to extract 'foo' before getting orgId:
 * - https://github.com/foo
 * - https://github.com/foo/
 * - https://github.com/topics/foo
 * - https://github.com/foo/bar
 */
const getOrgId = (githubUrl) => {
  let orgname;
  const restOfGithubUrl = githubUrl.split('https://github.com/')[1];
  if (restOfGithubUrl) {
    if (restOfGithubUrl.indexOf('topics') > -1) {
      orgname = restOfGithubUrl.split('/')[1];
    } else if (restOfGithubUrl.includes('/')) {
      orgname = restOfGithubUrl.split('/')[0];
    } else {
      orgname = restOfGithubUrl;
    }
    const org = orgname.replace(/\s/g, '').trim().toLowerCase();
    const id = names.get(org);
    if (id) {
      return id;
    }
  }
  return null;
};

const getImageFromOrg = (organization) => {
  if (organization.image_url) {
    return organization.image_url;
  } else {
    return '/images/default-github-repo-image.png';
  }
};

const getLinkFromOrg = (organization) => {
  if (organization.links && organization.links.length) {
    return organization.links[0].url;
  }
  return null;
};

/* returns { imageUrl, organizationUrl } */
const getOrganizationLinks = (org) => {
  // if org name includes Chicago
  if (org.name.indexOf('Chicago') > -1) {
    console.log({ org } );
  }
  let imageUrl = null;
  let organizationUrl = null;
  const { links } = org;
  if (links) {
    const githubLink = links.find(link => link.link_type === 'GitHub');
    if (githubLink) {
      const { url } = githubLink;
      const id = getOrgId(url);
      if (id) {
        imageUrl = `https://avatars1.githubusercontent.com/u/${id}?s=100&v=4`;
        organizationUrl = url;
        return { imageUrl, organizationUrl };
      }
    }
  }
  imageUrl = getImageFromOrg(org);
  organizationUrl = getLinkFromOrg(org);
  return { imageUrl, organizationUrl };
};

export default getOrganizationLinks;
