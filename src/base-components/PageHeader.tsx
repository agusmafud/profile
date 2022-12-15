import React from 'react';
import {
  Box,
  Image,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

import { PersonalInfoItem } from 'types';
import avatar from 'assets/avatar.png';
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
    <Flex
      as="header"
      direction={{ base: 'column', md: 'row' }}
      background="white"
      boxShadow="lg"
      border="1px"
      borderColor="gray.200"
      borderRadius="lg"
      paddingTop={{ base: 8, md: 0 }}
      paddingX={{ base: 12, md: 0 }}
    >
      <Box
        order={{ base: 0, md: 2 }}
        maxWidth={{ base: '350px', md: '250px' }}
        alignSelf="center"
      >
        <Image
          src={avatar}
          alt={name}
          alignSelf={{ base: 'center', md: 'flex-start' }}
          height="100%"
          objectFit="cover"
          boxShadow={{ base: 'md', md: 'md' }}
          borderRightRadius="lg"
          borderLeftRadius={{ base: 'lg', md: 'none' }}
        />
      </Box>
      {/* Spacer */}
      <Box order={1} width="5vw" height={4} />
      <Box
        order={{ base: 2, md: 0 }}
        alignSelf={{ base: 'center', md: 'center' }}
        flexGrow={1}
        paddingLeft={4}
        paddingY={6}
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
          marginTop={4}
        >
          <b>{title}</b>
        </Text>
        <Text fontSize="md">{tagline}</Text>
      </Box>
    </Flex>
  );
}

export default PageHeader;
