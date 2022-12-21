import React from 'react';
import {
  Box,
  VStack,
  Link,
  Text,
  StackDivider,
} from '@chakra-ui/react';

import DetailsList from 'base-components/DetailsList';
import { ProfessionalExperienceItem } from 'types';
import { dateRangeRender } from 'helpers';

const ProfessionalExperience = (
  { professionalExperiences } : { professionalExperiences: ProfessionalExperienceItem[] },
) => (
  <VStack spacing={6} divider={<StackDivider />}>
    {professionalExperiences.map((item) => {
      const {
        startDate,
        endDate,
        companyName,
        companyLink,
        title,
        experiences,
        useBullets = false,
      } = item;
      const companyNameRender = companyLink
        ? <Link href={companyLink} isExternal>{companyName}</Link>
        : companyName;
      const key = (companyName ?? '') + (title ?? '') + (startDate ?? '');

      return (
        <Box
          key={key}
          width="100%"
        >
          <Text fontSize="md" as="b">
            {companyName && (
              <>
                {companyNameRender}
                {' - '}
              </>
            )}
            {title}
          </Text>
          {startDate && (
            <Text fontSize="md" color="gray.600">
              {dateRangeRender({ start: startDate, end: endDate })}
            </Text>
          )}
          <DetailsList
            details={experiences}
            useBullets={useBullets}
          />
        </Box>
      );
    })}
  </VStack>
);

export default ProfessionalExperience;
