import { getOrgId } from "./getOrgId.js";

export const getOrganizationGithubInfo = (organization) => {
  const githubInfo = {};
  //   let imageUrl;
  //   let orgUrl;
  if (organization.links) {
    // orgUrl = child.links[0].url;
    organization.links.forEach((link) => {
      if (link.link_type === "GitHub") {
        let id = getOrgId(link.url);
        let imageUrl = `https://avatars1.githubusercontent.com/u/${id}?s=100&v=4`;
        // let orgUrl = child.url;
        githubInfo.imageUrl = imageUrl;
        githubInfo.organizationGithubUrl = link.url;
        return githubInfo;
      } else {
        console.log(`no Github data for ${organization.name}`);
        return null;
      }
    });
  } else {
    // child.links[0] = "htttp://github.com/";
    githubInfo.imageUrl = 'https://avatars0.githubusercontent.com/u/57879025?s=200&v=4'
        githubInfo.organizationGithubUrl = 'https://github.com/civictechindex'
    console.log(`no links available for ${organization.name}`);
    return githubInfo;
  }
};
