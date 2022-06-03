/* eslint-disable no-console */

const getGithubInfo = (organization) => {
  const info = { imageUrl: null, organizationUrl: null };
  const { links } = organization;
  if (links && links.length) {
    const githubLink = links.find((link) => link.link_type === 'GitHub');
    if (githubLink) {
      info.organizationUrl = githubLink.url;
    }
  }
  return info;
};

const getImageFromOrg = (organization) => {
  const githubId = organization.github_id;
  if (githubId !== null) {
    return `https://avatars1.githubusercontent.com/u/${githubId}?s=100&v=4`;
  }
  if (organization.image_url.includes('wp-content')) {
    return organization.image_url;
  }
  return '/images/default-github-repo-image.png';
};

const getLinksFromOrg = (organization) => {
  if (organization.links && organization.links.length) {
    return organization.links[0].url;
  } else {
    // no links, either from github, or on organization object
    console.log(`No links available for ${organization.name}`);
    return '/images/default-github-repo-image.png';
  }
};

export const getOrganizationLinks = (organization) => {
  const thumbnailInfo = getGithubInfo(organization);

  // check for empty results from getGithubInfo
  if (!thumbnailInfo.imageUrl) {
    console.log(`No GitHub image available for ${organization.name}`);
    thumbnailInfo.imageUrl = getImageFromOrg(organization);
  }

  if (!thumbnailInfo.organizationUrl) {
    console.log(`No GitHub URL available for ${organization.name}`);
    thumbnailInfo.organizationUrl = getLinksFromOrg(organization);
  }

  return thumbnailInfo;
};
