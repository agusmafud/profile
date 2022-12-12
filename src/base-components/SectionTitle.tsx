import React from 'react';
import { Heading, Text, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

const SectionTitle = ({
  title,
  SectionIcon,
} : {
  title: string,
  SectionIcon?: IconType,
}) => (
  <Heading
    as="h2"
    size="md"
    marginBottom={4}
    padding={4}
    background="#D6F3FF"
    color="#0A4478"
    display="flex"
    alignItems="center"
  >
    {SectionIcon && <Icon marginRight={2} as={SectionIcon} />}
    <Text>
      {title}
    </Text>
  </Heading>
);

SectionTitle.defaultProps = {
  SectionIcon: null,
};

export default SectionTitle;
