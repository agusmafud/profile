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
    resumeUrl,
    linkedinUrl,
  } = useProfile();
  const sections = useSections();

  return (
    <AppLayout
      header={(
        <PageHeader
          name={name}
          title={title}
          tagline={tagline}
          resumeUrl={resumeUrl}
          linkedinUrl={linkedinUrl}
        />
      )}
      sections={sections}
    />
  );
}

export default App;
