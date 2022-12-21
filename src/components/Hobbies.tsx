import React from 'react';

import DetailsList from 'base-components/DetailsList';

const Hobbies = ({ details } : { details: string[] }) => (
  <DetailsList details={details} />
);

export default Hobbies;
