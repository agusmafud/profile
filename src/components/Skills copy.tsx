import React, { useState, useRef } from 'react';
import {
  HStack,
  Center,
  Text,
  Tooltip,
  Badge,
  useOutsideClick,
} from '@chakra-ui/react';

import { Skill as SkillType } from 'types';

const skillsPalette = ['green', 'teal', 'blue', 'cyan', 'purple', 'pink'];
const getSkillColor = (index: number) => skillsPalette[index % skillsPalette.length];

const Skill = ({
  skill,
  index,
} : {
  skill: SkillType,
  index: number,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  useOutsideClick({
    ref: tooltipRef,
    handler: () => setShowTooltip(false),
  });
  const handleTooltipClick = () => setShowTooltip((prevState) => !prevState);
  // const SkillIcon = skill.Icon ?? null;

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
        isOpen={showTooltip}
        label={(
          <Text>{skill.description}</Text>
        )}
        hasArrow
        placement="top"
        background="white"
        color="gray.900"
      >
        <Badge
          ref={tooltipRef}
          key={skill.label}
          variant="subtle"
          fontSize="0.8em"
          colorScheme={getSkillColor(index)}
          transition="all 300ms"
          _hover={{
            transform: 'scale(1.1)',
          }}
          onClick={handleTooltipClick}
          onMouseOver={() => setShowTooltip(true)}
          onMouseOut={() => setShowTooltip(false)}
        >
          {skill.label}
        </Badge>
      </Tooltip>
    </Center>
  );
};

const Skills = ({
  skills,
  index,
} : { skills: SkillType[], index: number }) => (
  <HStack
    spacing={0}
    wrap="wrap"
    marginTop={3}
  >
    {skills.map((skill) => <Skill skill={skill} index={index} />)}
  </HStack>
);

export default Skills;
