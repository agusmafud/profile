import React from 'react';
import {
  Icon as ChakraIcon,
  Text,
} from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

const IconTextDisplay = ({
  text,
  Icon,
  iconColor,
} : {
  text: string,
  Icon: IconType | undefined,
  iconColor: string,
}) => (
  <>
    {Icon && (
      <ChakraIcon
        float="left"
        w={8}
        h={8}
        margin="6px 12px 0 0"
        color={iconColor}
        as={Icon}
      />
    )}
    <Text textAlign="justify">{text}</Text>
  </>
);

export default IconTextDisplay;
