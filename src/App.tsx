import React from 'react';

import AppLayout from 'base-components/AppLayout';
import PageHeader from 'base-components/PageHeader';
import useSections from 'hooks/useSections';
import useProfile from 'hooks/useProfile';

function App() {
  const {
    name,
    title,
    tagline,
    personalInfo,
  } = useProfile();
  const sections = useSections();

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
      sections={sections}
    />
  );
}

export default App;
