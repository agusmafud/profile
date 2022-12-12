import React from 'react';
import {
  HStack,
  Center,
  Text,
  Tooltip,
  Badge,
} from '@chakra-ui/react';

import { Skill as SkillType } from 'types';

const skillsPalette = ['green', 'teal', 'blue', 'cyan', 'purple', 'pink'];
const getSkillColor = (index: number) => skillsPalette[index % skillsPalette.length];

const Skills = ({
  skills,
  index,
} : { skills: SkillType[], index: number }) => (
  <HStack
    spacing={0}
    wrap="wrap"
    marginTop={3}
  >
    {skills.map((skill) => {
      const SkillIcon = skill.Icon ?? null;
      return (
        <Center
          key={skill.label}
          cursor="pointer"
          flexWrap="wrap"
          padding={3}
          paddingTop={0}
          paddingLeft={0}
        >
          <Tooltip
            label={(
              <>
                {SkillIcon}
                <Text>{skill.description}</Text>
              </>
            )}
            hasArrow
            placement="top"
            background="white"
            color="gray.900"
          >
            <Badge
              key={skill.label}
              variant="subtle"
              fontSize="0.8em"
              colorScheme={getSkillColor(index)}
              transition="all 300ms"
              _hover={{
                transform: 'scale(1.1)',
              }}
            >
              {skill.label}
            </Badge>
          </Tooltip>
        </Center>
      );
    })}
  </HStack>
);

export default Skills;
