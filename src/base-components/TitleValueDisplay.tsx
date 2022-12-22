import React from 'react';
import {
  Flex,
  Text,
} from '@chakra-ui/react';

const TitleValueDisplay = ({
  title,
  value,
} : {
  title: string | undefined,
  value: React.ReactNode | string,
}) => (
  <Flex direction="column">
    {title && <Text fontSize="md" as="b" color="gray.600">{title}</Text>}
    <Text fontSize="md">{value}</Text>
  </Flex>
);

TitleValueDisplay.defaultProps = {
};

export default TitleValueDisplay;
