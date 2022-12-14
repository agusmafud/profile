import React, { useState } from 'react';
import {
  Fade,
  Collapse,
  Button,
  Icon,
  Stack,
  Show,
  useBreakpointValue,
  Flex,
} from '@chakra-ui/react';
import { SlMenu } from 'react-icons/sl';
import { CgClose } from 'react-icons/cg';

import { Breakpoint, Section } from 'types';
import NavBarItem from './NavBarItem';

const defaultCompactBreakpointValue = 'md';

const NavBar = ({
  sections,
  compactBreakpointValue = defaultCompactBreakpointValue,
} : {
  sections: Section[],
  compactBreakpointValue?: Breakpoint,
}) => {
  const [showMobileSections, setShowMobileSections] = useState(false);
  const toggleShowMobileSections = () => setShowMobileSections((prevState) => !prevState);
  const closeMobileSections = () => setShowMobileSections(false);

  const showSections = useBreakpointValue({
    base: showMobileSections,
    [compactBreakpointValue]: true,
  });
  const MobileMenuIcon = showMobileSections ? CgClose : SlMenu;

  const scrollToSection = async (sectionId: string) => {
    const sectionElement = document.querySelector(`#${sectionId}`);

    if (sectionElement) {
      closeMobileSections();
      setTimeout(() => sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' }), 300);
    }
  };

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
              as={MobileMenuIcon}
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
              <Fade
                key={section.title}
                in={showSections}
              >
                <NavBarItem
                  section={section}
                  scrollToSection={scrollToSection}
                />
              </Fade>
            ))}
          </Flex>
        </Collapse>
      </Stack>
    </Flex>
  );
};

NavBar.defaultProps = {
  compactBreakpointValue: defaultCompactBreakpointValue,
};

export default NavBar;
