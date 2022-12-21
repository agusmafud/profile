import React from 'react';
import {
  Button,
  Icon,
  Tooltip,
  Text,
  Show,
  useBreakpointValue,
} from '@chakra-ui/react';

import { Section } from 'types';

const compactBreakpointValue = 'md';

const NavBarItem = ({
  section,
  scrollToSection,
} : {
  section: Section,
  scrollToSection: (sectionId: string) => Promise<void>,
}) => {
  const isTooltipDisabled = useBreakpointValue({
    base: true,
    [compactBreakpointValue]: false,
  });
  const { id, title, SectionIcon } = section;
  const handleSectionClick = () => scrollToSection(id);

  return (
    <Tooltip
      label={title}
      isDisabled={isTooltipDisabled}
    >
      <Button
        width="100%"
        colorScheme="teal"
        variant="ghost"
        onClick={handleSectionClick}
      >
        <Icon
          boxSize={5}
          marginRight={2}
          as={SectionIcon}
        />
        <Show below={compactBreakpointValue}>
          <Text>
            {title}
          </Text>
        </Show>
      </Button>
    </Tooltip>
  );
};

export default NavBarItem;
