import React from 'react';
import {
  UnorderedList,
  VStack,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { Experience } from 'types';

const DetailsList = ({
  details,
  useBullets,
} : {
  details: Experience[],
  useBullets?: boolean,
}) => {
  const ListComponent = useBullets ? UnorderedList : VStack;
  const ItemComponent = useBullets ? ListItem : Text;

  return (
    <ListComponent
      align="flex-start"
      spacing={3}
      marginTop={3}
      marginBottom={3}
    >
      {details.map((detail, index) => (
        <ItemComponent
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          textAlign="justify"
        >
          {detail}
        </ItemComponent>
      ))}
    </ListComponent>
  );
};

DetailsList.defaultProps = {
  useBullets: false,
};

export default DetailsList;
