import React from 'react';
import {
  Box,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { GiSkills } from 'react-icons/gi';

import SectionTitle from 'base-components/SectionTitle';

const Summary = ({ summary } : { summary: string[] }) => (
  <Box width="100%">
    <SectionTitle
      title="Areas of knowledge"
      SectionIcon={GiSkills}
    />
    <UnorderedList spacing={2}>
      {summary.map((item) => (
        <ListItem
          key={item}
          textAlign="justify"
        >
          {item}
        </ListItem>
      ))}
    </UnorderedList>
  </Box>
);

export default Summary;
