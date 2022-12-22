import React from 'react';
import { Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const ExternalLink = ({
  href,
  label,
  showExternalIcon,
} : {
  href: string,
  label: string,
  showExternalIcon?: boolean,
}) => (
  <Link
    href={href}
    isExternal
    color="teal.500"
  >
    {label}
    {showExternalIcon && ' '}
    {showExternalIcon && (
      <ExternalLinkIcon
        marginTop="-4px"
        alignSelf="center"
      />
    )}
  </Link>
);

ExternalLink.defaultProps = {
  showExternalIcon: false,
};

export default ExternalLink;
