/* eslint-disable no-console */

import { getOrgId } from "./getOrgId.js";

/**
 * @typedef {Object} thumbnailInfo
 * @property {string} imageUrl
 * @property {string} organizationUrl
 */

/**
 * @typedef {Object} organization
 * @property {number} github_id
 * @property {string} github_name
 * @property {number} id
 * @property {string} github_name
 * @property {Array} links
 * @property {string} location
 * @property {string} name
 * @property {Object} parent_organization
 */

/**
 * Returns the organization's URL and its image URL
 * @param  {string|organization} organization
 * @return {thumbnailInfo}
 */


const getGithubLinks = ({ links }) => {
  const githubInfo = { imageUrl: null, organizationUrl: null };
  if (links) {
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

export const getOrganizationLinks = (organization) => {
  // initialize return object
  let thumbnailInfo = {  };

  thumbnailInfo = getGithubLinks(organization);

  // check for empty results from getGithubLinks
  if (!Boolean(thumbnailInfo.imageUrl)) {
    console.log(`No GITHUB image available for ${organization.name}`);
    if (organization.image_url) {
      thumbnailInfo.imageUrl = organization.image_url;
    }
  }

  if (thumbnailInfo.organizationUrl === null) {
    console.log(`No GITHUB url available for ${organization.name}`);

    if (organization.links && organization.links.length !== 0) {
      thumbnailInfo.organizationUrl = organization.links[0].url;
    } else {
      // no links, either from github, or on organization object
      console.log(`No LINKS available for ${organization.name}`);
    }
  }

  return thumbnailInfo;
};
