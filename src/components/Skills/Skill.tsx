import React from 'react';
import {
  Center,
  ListItem,
  UnorderedList,
  Box,
} from '@chakra-ui/react';

import TooltipBadge from 'base-components/TooltipBadge';
import { Skill as SkillProps, Toast } from 'types';

const skillsPalette = ['green', 'teal', 'blue', 'cyan', 'purple', 'pink', 'red', 'orange', 'yellow'];
// circles through palette
const getSkillColor = (index: number) => skillsPalette[index % skillsPalette.length];

const Skill = ({
  skill,
  index,
  handleBadgeClick,
} : {
  skill: SkillProps,
  index: number,
  handleBadgeClick: (toast: Toast) => void,
}) => {
  const {
    description,
    variant = 'badge',
  } = skill;
  const badgeColorScheme = getSkillColor(index);

  return (
    <Center
      flexWrap="wrap"
      padding={3}
      paddingTop={0}
      paddingLeft={0}
    >
      {variant === 'badge' ? (
        <TooltipBadge
          skill={skill}
          badgeColorScheme={badgeColorScheme}
          handleBadgeClick={handleBadgeClick}
        />
      ) : (
        <Box width="100%">
          <UnorderedList spacing={2}>
            <ListItem textAlign="justify">
              {description}
            </ListItem>
          </UnorderedList>
        </Box>
      )}
    </Center>
  );
};

export default Skill;
