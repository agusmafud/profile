import React from 'react';
import {
  Box,
  VStack,
  Link,
  Text,
  UnorderedList,
  ListItem,
  StackDivider,
} from '@chakra-ui/react';
import { AiOutlineCode } from 'react-icons/ai';

import SectionTitle from 'base-components/SectionTitle';
import { ProfessionalExperienceItem } from 'types';

const ProfessionalExperience = (
  { professionalExperiences } : { professionalExperiences: ProfessionalExperienceItem[] },
) => (
  <Box width="100%">
    <SectionTitle
      title="Professional Experience"
      SectionIcon={AiOutlineCode}
    />
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

        // TODO: move to helpers
        const dateRender = (date: Date) => (
          `${date.toLocaleString('en-US', { month: 'long' })} ${date.getFullYear()}`
        );
        const dateRangeRender = ({ start, end } : { start: Date, end?: Date }) => (
          end
            ? `(${dateRender(start)} - ${dateRender(end)})`
            : `(${dateRender(start)} - Present)`
        );
        const ListComponent = useBullets ? UnorderedList : VStack;
        const ItemComponent = useBullets ? ListItem : Text;
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
            <ListComponent
              align="flex-start"
              spacing={3}
              marginTop={3}
              marginBottom={3}
            >
              {experiences.map((experience) => (
                <ItemComponent
                  key={experience}
                  textAlign="justify"
                >
                  {experience}
                </ItemComponent>
              ))}
            </ListComponent>
          </Box>
        );
      })}
    </VStack>
  </Box>
);

export default ProfessionalExperience;
