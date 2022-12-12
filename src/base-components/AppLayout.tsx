import React from 'react';
import {
  Flex,
  Box,
  VStack,
} from '@chakra-ui/react';

import background from 'assets/background.png';

const AppLayout = ({
  header,
  content,
} : {
  header: React.ReactNode,
  content: React.ReactNode,
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
        margin={6}
      >
        <VStack spacing={12}>
          {content}
        </VStack>
      </Box>
    </Flex>
  </Flex>
);

export default AppLayout;
