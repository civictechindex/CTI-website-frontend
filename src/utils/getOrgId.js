import { names } from '../components/data/orgs.js';

const getOrgId = (githubUrl) => {
  let orgname;
  if (githubUrl.split('https://github.com/')[1]) {
    orgname = githubUrl.split('https://github.com/')[1].split('/')[0];
    const org = orgname.replace(/\s/g, '').trim().toLowerCase();
    const id = names.get(org);
    return id;
  } else {
    // TODO: Sean handle github url error
    // eslint-disable-next-line
    console.log(`error with github url: ${githubUrl}`);
    return 11635254;
  }
};

export default getOrgId;
