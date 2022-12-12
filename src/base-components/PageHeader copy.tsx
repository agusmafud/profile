import React from 'react';
import {
  Box,
  Image,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

import { PersonalInfoItem } from 'types';
import avatar from 'assets/avatar.jpg';
import TitleValueDisplay from 'base-components/TitleValueDisplay';

export type PageHeaderProps = {
  name: string,
  personalInfo: PersonalInfoItem[],
  title: string,
  tagline: string,
};

function PageHeader({
  name,
  personalInfo,
  title,
  tagline,
} : PageHeaderProps) {
  return (
    <Box
      as="header"
      background="white"
      boxShadow="sm"
      border="1px"
      borderColor="gray.200"
      paddingX={4}
      paddingY={6}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
      >
        <Image
          backgroundColor="red"
          height="100%"
          order={{ base: 0, md: 2 }}
          alignSelf={{ base: 'center', md: 'flex-start' }}
          alt={name}
          src={avatar}
        />
        <Box order={1} width="5vw" height={4} />
        <Box
          order={{ base: 2, md: 0 }}
          alignSelf={{ base: 'center', md: 'center' }}
          flexGrow={1}
        >
          <Heading
            as="h1"
            size="lg"
            noOfLines={1}
            paddingBottom={2}
          >
            {name}
          </Heading>
          {personalInfo.map((data) => (
            <TitleValueDisplay
              key={data.key}
              title={data.label}
              value={data.value}
            />
          ))}
          <Text
            fontSize="md"
            marginTop={1}
          >
            <b>{title}</b>
          </Text>
          <Text fontSize="md">{tagline}</Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default PageHeader;
