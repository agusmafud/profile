/* eslint-disable */
import React from 'react';
import { Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { NavigationSection } from 'types';

const NavigationBar = ({
  sections,
  featuredSection,
} : {
  sections: NavigationSection[],
  featuredSection: NavigationSection | undefined,
}) => (
  {/* <Link
    href={href}
    isExternal
    color="teal.500"
  >
    {label}
    {showExternalIcon && ' '}
    {showExternalIcon && <ExternalLinkIcon mx="2px" />}
  </Link> */}
);

export default NavigationBar;
