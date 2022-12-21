import React, { useState } from 'react';
import {
  Fade,
  Collapse,
  Button,
  Icon,
  Stack,
  Tooltip,
  Text,
  Show,
  useBreakpointValue,
  Flex,
} from '@chakra-ui/react';
import { SlMenu } from 'react-icons/sl';
import { CgClose } from 'react-icons/cg';

import { Section } from 'types';

const compactBreakpointValue = 'md';

const NavBarItem = ({
  section,
  closeMobileSections,
} : {
  section: Section,
  closeMobileSections: () => void,
}) => {
  const isTooltipDisabled = useBreakpointValue({
    base: true,
    [compactBreakpointValue]: false,
  });
  const { id, title, SectionIcon } = section;
  const scrollToSection = () => {
    const sectionElement = document.querySelector(`#${id}`);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        closeMobileSections();
      }, 800);
    }
  };

  return (
    <Tooltip
      label={title}
      isDisabled={isTooltipDisabled}
    >
      <Button
        width="100%"
        colorScheme="teal"
        variant="ghost"
        onClick={scrollToSection}
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

const NavBar = ({ sections } : { sections: Section[] }) => {
  const [showMobileSections, setShowMobileSections] = useState(false);
  const toggleShowMobileSections = () => setShowMobileSections((prevState) => !prevState);
  const closeMobileSections = () => setShowMobileSections(false);

  const showSections = useBreakpointValue({
    base: showMobileSections,
    [compactBreakpointValue]: true,
  });

  const MobileIcon = showMobileSections ? CgClose : SlMenu;

  return (
    <Flex
      justifyContent={{
        base: 'flex-end',
        [compactBreakpointValue]: 'center',
      }}
    >
      <Stack
        width={{
          base: showMobileSections ? '100%' : '60px',
          [compactBreakpointValue]: 'fit-content',
        }}
        direction={{ base: 'column', [compactBreakpointValue]: 'row' }}
        padding={2}
        background="white"
        borderRadius="lg"
        boxShadow="md"
      >
        <Show below={compactBreakpointValue}>
          <Button
            width={5}
            colorScheme="teal"
            variant="ghost"
            alignSelf={showMobileSections ? 'flex-end' : 'center'}
            onClick={toggleShowMobileSections}
          >
            <Icon
              boxSize={5}
              as={MobileIcon}
            />
          </Button>
        </Show>
        <Collapse
          in={showSections}
          animateOpacity
        >
          <Flex
            direction={{ base: 'column', [compactBreakpointValue]: 'row' }}
            gap={{ base: 3, md: 0 }}
          >
            {sections.map((section) => (
              <Fade in={showSections}>
                <NavBarItem
                  key={section.title}
                  section={section}
                  closeMobileSections={closeMobileSections}
                />
              </Fade>
            ))}
          </Flex>
        </Collapse>
      </Stack>
    </Flex>
  );
};

export default NavBar;
