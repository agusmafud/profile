import React from 'react';
import { Text } from '@chakra-ui/react';

import { Education as EducationType } from 'types';

const Education = ({ education } : { education: EducationType }) => {
  const {
    title,
    yearStart,
    yearEnd,
    establishment,
  } = education;

  return (
    <>
      <Text fontSize="md" as="b">{title}</Text>
      <Text fontSize="md">{`(${yearStart} - ${yearEnd}) ${establishment}.`}</Text>
    </>
  );
};

export default Education;
