import React from 'react';
import {
  Flex,
  Box,
  VStack,
} from '@chakra-ui/react';

import background from 'assets/background.png';
import Section from 'base-components/Section';
import NavBar from 'components/NavBar';
import { Section as SectionProps } from 'types';

const AppLayout = ({
  header,
  sections,
} : {
  header: React.ReactNode,
  sections: SectionProps[],
}) => (
  <Flex
    backgroundImage={background}
    backgroundRepeat="repeat/no-repeat"
    width="100%"
    minWidth="300px"
    minHeight="100vh"
    flexDirection="column"
    alignItems="center"
    justifyContent="flex-start"
  >
    <Flex
      background="rgba(255,255,255,0.8)"
      width="90%"
      maxWidth="1000px"
      height="auto"
      minHeight="100vh"
      paddingX={2}
      paddingY={0}
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
    >
      <Box
        width={{ base: '90%', md: 'fit-content' }}
        margin={6}
      >
        {header}
      </Box>
      <Box
        width="90%"
        maxWidth={{ base: '90%', md: '800px' }}
        position="sticky"
        top={2}
        marginTop={6}
      >
        <NavBar sections={sections} />
      </Box>
      <Box
        width="90%"
        maxWidth={{ base: '90%', md: '800px' }}
        marginX={6}
        marginTop={0}
        marginBottom="150px"
      >
        <VStack spacing={0}>
          {sections.map((section) => (
            <Section key={section.title} section={section} />
          ))}
        </VStack>
      </Box>
    </Flex>
  </Flex>
);

export default AppLayout;
