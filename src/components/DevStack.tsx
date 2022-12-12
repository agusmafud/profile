import React from 'react';
import {
  Heading,
  Box,
  Stack,
  StackDivider,
} from '@chakra-ui/react';
import { BsTools } from 'react-icons/bs';

import Skills from 'components/Skills';
import SectionTitle from 'base-components/SectionTitle';
import { DevStackItem } from 'types';

const DevStack = ({ devStack } : { devStack: DevStackItem[] }) => (
  <Box width="100%">
    <SectionTitle
      title="Development stack"
      SectionIcon={BsTools}
    />
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
  </Box>
);

export default DevStack;
