import React from 'react';
import {
  Box,
  Text,
} from '@chakra-ui/react';
import { ImBooks } from 'react-icons/im';

import SectionTitle from 'base-components/SectionTitle';
import { Education as EducationType } from 'types';

const Education = ({ education } : { education: EducationType }) => {
  const {
    title,
    yearStart,
    yearEnd,
    establishment,
  } = education;

  return (
    <Box width="100%">
      <SectionTitle
        title="Education"
        SectionIcon={ImBooks}
      />
      <Text fontSize="md" as="b">{title}</Text>
      <Text fontSize="md">{`(${yearStart} - ${yearEnd}) ${establishment}.`}</Text>
    </Box>
  );
};

export default Education;
