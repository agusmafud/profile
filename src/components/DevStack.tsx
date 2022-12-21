import React from 'react';
import {
  Heading,
  Box,
  Stack,
  StackDivider,
} from '@chakra-ui/react';

import Skills from 'components/Skills';
import { DevStackItem } from 'types';

const DevStack = ({ devStack } : { devStack: DevStackItem[] }) => (
  <Stack
    divider={<StackDivider />}
    spacing="4"
  >
    {devStack.map((item, index) => (
      <Box key={item.label}>
        <Heading
          size="xs"
          textTransform="uppercase"
          color="gray.600"
        >
          {item.label}
        </Heading>
        <Skills
          skills={item.skills}
          index={index}
        />
      </Box>
    ))}
  </Stack>
);

export default DevStack;
