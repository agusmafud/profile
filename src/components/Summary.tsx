import React from 'react';

import DetailsList from 'base-components/DetailsList';

const Summary = ({ summary } : { summary: string[] }) => (
  <DetailsList
    details={summary}
    useBullets
  />
);

export default Summary;
