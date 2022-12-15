import React from 'react';
import { Box, HStack } from '@chakra-ui/react';

import useToast from 'hooks/useToast';
import { Skill as SkillProps } from 'types';

import Skill from './Skill';

const Skills = ({
  skills,
  index,
} : {
  skills: SkillProps[],
  index: number,
}) => {
  const { handleBadgeClick } = useToast();

  return (
    <HStack
      spacing={0}
      wrap="wrap"
      marginTop={3}
    >
      {skills.map((skill) => (
        <Box
          key={skill.description}
          width={skill.variant === 'bullet' ? '100%' : 'auto'}
        >
          <Skill
            key={skill.description}
            skill={skill}
            index={index}
            handleBadgeClick={handleBadgeClick}
          />
        </Box>
      ))}
    </HStack>
  );
};

export default Skills;
