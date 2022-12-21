import React from 'react';

import DetailsList from 'base-components/DetailsList';

const Languages = ({ details } : { details: string[] }) => (
  <DetailsList details={details} />
);

export default Languages;
