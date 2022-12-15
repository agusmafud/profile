import React from 'react';
import {
  Center,
  Tooltip,
  Badge,
  ListItem,
  UnorderedList,
  Box,
} from '@chakra-ui/react';

import { Skill as SkillProps, Toast } from 'types';
import IconTextDisplay from 'base-components/IconTextDisplay';

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
    SkillIcon,
    skillIconColor = 'black',
    label = '',
    description,
    highlighted = false,
    variant = 'badge',
  } = skill;
  const onBadgeClick = (toast: Toast) => handleBadgeClick(toast);

  return (
    <Center
      flexWrap="wrap"
      padding={3}
      paddingTop={0}
      paddingLeft={0}
    >
      {variant === 'badge' ? (
        <Tooltip
          minWidth={{ base: 'auto', md: '450px' }}
          label={(
            <IconTextDisplay
              text={description}
              Icon={SkillIcon}
              iconColor={skillIconColor}
            />
          )}
          hasArrow
          placement="top"
          background="white"
          color="gray.900"
          padding="10px 20px 20px 20px"
          boxShadow="dark-lg"
          marginBottom={1}
        >
          <Badge
            variant="subtle"
            fontSize={highlighted ? '1em' : '0.8em'}
            colorScheme={getSkillColor(index)}
            transition="all 300ms"
            _hover={{ transform: 'scale(1.1)' }}
            cursor="pointer"
            onClick={() => onBadgeClick(
              { description, ToastIcon: SkillIcon, iconColor: skillIconColor },
            )}
          >
            {label}
          </Badge>
        </Tooltip>
      ) : (
        <Box width="100%">
          <UnorderedList spacing={2} width="100%">
            <ListItem
              textAlign="justify"
            >
              {description}
            </ListItem>
          </UnorderedList>
        </Box>
      )}
    </Center>
  );
};

export default Skill;
