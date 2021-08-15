import ProjectCard from '../../components/ProjectCard';
import Grid from '@material-ui/core/Grid';
import React from 'react';

const calculateDaysSince = (updateTime) => {
  const days = new Date() - new Date(updateTime);
  return Math.round(days / (1000 * 3600 * 24));
};

export const renderCard = (project) => {
  return (
    <Grid item style={{ paddingTop: '12px' }}  key={project.id}>
      {' '}
      <ProjectCard
        projectUrl={project.html_url}
        organizationUrl={project.owner.html_url}
        organizationAvatarUrl={project.owner.avatar_url}
        ownerName={project.owner.login}
        projectName={project.name}
        projectDescription={project.description}
        homepage={project.homepage}
        lastUpdate={calculateDaysSince(project.updated_at)}
        issueCount={project.open_issues}
        projectLanguage={project.language}
        topics={project.topics}
        watchers={project.watchers_count}
        stargazers={project.stargazers_count}
        projectTags={project.parentOrgs}
      />
    </Grid>
  );
};
