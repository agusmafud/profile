import React from 'react';
import {
  Tooltip,
  Badge,
} from '@chakra-ui/react';
import { Skill, Toast } from 'types';
import IconTextDisplay from './IconTextDisplay';

const TooltipBadge = ({
  skill,
  badgeColorScheme,
  handleBadgeClick,
} : {
  skill: Skill,
  badgeColorScheme: string,
  handleBadgeClick: (toast: Toast) => void,
}) => {
  const {
    SkillIcon,
    skillIconColor = 'black',
    label,
    description,
    highlighted,
  } = skill;
  const onBadgeClick = (toast: Toast) => handleBadgeClick(toast);

  return (
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
        colorScheme={badgeColorScheme}
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
  );
};

export default TooltipBadge;
