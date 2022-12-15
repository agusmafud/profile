import React from 'react';

import AppLayout from 'base-components/AppLayout';
import DevStack from 'components/DevStack';
import Education from 'components/Education';
import PageHeader from 'base-components/PageHeader';
import Summary from 'components/Summary';
import ProfessionalExperience from 'components/ProfessionalExperience';
import {
  name,
  title,
  tagline,
  personalInfo,
  education,
  summary,
  devStack,
  professionalExperiences,
} from 'data/profile';

function App() {
  return (
    <AppLayout
      header={(
        <PageHeader
          name={name}
          personalInfo={personalInfo}
          title={title}
          tagline={tagline}
        />
      )}
      content={(
        <>
          <Education education={education} />
          <Summary summary={summary} />
          <DevStack devStack={devStack} />
          <ProfessionalExperience professionalExperiences={professionalExperiences} />
        </>
      )}
    />
  );
}

export default App;
