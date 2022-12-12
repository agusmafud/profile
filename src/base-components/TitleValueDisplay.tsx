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
  <Flex>
    {title && <Text fontSize="md" as="b" color="gray.600">{`${title}: `}</Text>}
    &nbsp;
    <Text fontSize="md">{value}</Text>
  </Flex>
);

export default TitleValueDisplay;
