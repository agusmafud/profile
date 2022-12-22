import React from 'react';
import {
  Box,
  Image,
  Stack,
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
  const breakpoint = 'sm';

  return (
    <Stack
      as="header"
      alignItems="stretch"
      width={{ base: 'auto', md: '600px' }}
      height={{ base: 'auto', sm: '280px', md: '300px' }}
      direction={{ base: 'column', [breakpoint]: 'row' }}
      background="white"
      boxShadow="lg"
      border="1px"
      borderColor="gray.200"
      borderRadius="lg"
      padding={0}
    >
      <Box
        order={{ base: 0, [breakpoint]: 2 }}
        width="100%"
        maxWidth={{ base: '100%', [breakpoint]: '250px' }}
        height="100%"
        alignSelf="center"
      >
        <Image
          src={avatar}
          alt={name}
          alignSelf={{ base: 'center', [breakpoint]: 'flex-start' }}
          width="100%"
          height="100%"
          objectFit="cover"
          boxShadow="md"
          borderTopLeftRadius={{ base: 'lg', [breakpoint]: 'none' }}
          borderTopRightRadius="lg"
          borderBottomRightRadius={{ base: 'none', [breakpoint]: 'lg' }}
        />
      </Box>
      {/* Spacer */}
      <Box order={1} width="5vw" height={0} />
      <Box
        order={{ base: 2, [breakpoint]: 0 }}
        alignSelf="center"
        flexGrow={1}
        paddingLeft={4}
        paddingY={6}
      >
        <Heading
          as="h1"
          size="lg"
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
    </Stack>
  );
}

export default PageHeader;
