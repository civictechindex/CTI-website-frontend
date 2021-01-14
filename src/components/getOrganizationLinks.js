import { getOrgId } from "./getOrgId.js";

export const getOrganizationLinks = (organization) => {
  // initialize return object
  let thumbnailInfo = {  };
  // if organization is just the string name
  if (typeof organization === "string") {
    thumbnailInfo.imageUrl = organization.image_url;
    thumbnailInfo.organizationUrl = "https://codeforall.org/";
    return thumbnailInfo;
  }
  // if organization is an object
  thumbnailInfo = getGithubLinks(organization);
  // check for empty results from getGithubLinks
  if (thumbnailInfo.imageUrl === null) {
    console.log(`No GITHUB image available for ${organization.name}`);
    if (organization.image_url) {
      thumbnailInfo.imageUrl = organization.image_url;
    }
  }
  if (thumbnailInfo.organizationUrl === null) {
    console.log(`No GITHUB url available for ${organization.name}`);

    if (organization.url) {
      thumbnailInfo.organizationUrl = organization.image_url;
    }
  }

  if (thumbnailInfo.organizationUrl === null) {
    if (organization.links && organization.links.length !== 0) {
      thumbnailInfo.organizationUrl = organization.links[0].url;
    } else {
      // no links, either from github, or on organization object
      console.log(`No LINKS available for ${organization.name}`);
    }
  }

  return thumbnailInfo;

  function getGithubLinks({ links }) {
    const githubInfo = { imageUrl: null, organizationUrl: null };
    if (links){
      links.forEach((link) => {
        if (link.link_type === "GitHub") {
          const id = getOrgId(link.url);
          const imageUrl = `https://avatars1.githubusercontent.com/u/${id}?s=100&v=4`;
          githubInfo.imageUrl = imageUrl;
          githubInfo.organizationUrl = link.url;
        }
      });
    }
    return githubInfo;
  }
};
