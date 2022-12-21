import React from 'react';
import { Box } from '@chakra-ui/react';

import SectionTitle from 'base-components/SectionTitle';
import { Section as SectionProps } from 'types';

const ScrollableSection = ({
  section,
} : {
  section: SectionProps,
}) => {
  const {
    id,
    title,
    SectionIcon,
    Component,
  } = section;

  return (
    <Box
      id={id}
      as="section"
      width="100%"
      paddingTop="68px"
    >
      <SectionTitle
        title={title}
        SectionIcon={SectionIcon}
      />
      {Component}
    </Box>
  );
};

export default ScrollableSection;
