/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  IconButton,
  Link,
} from '@chakra-ui/react';
import { FaLinkedin } from 'react-icons/fa';
import { TbFileDownload } from 'react-icons/tb';

import { PersonalInfoItem } from 'types';
import avatar from 'assets/avatar.jpg';
import profileBackground from 'assets/profile-background.jpg';

export type PageHeaderProps = {
  name: string,
  title: string,
  tagline: string,
  resumeUrl: string,
  linkedinUrl: string,
};

function PageHeader({
  name,
  title,
  tagline,
  resumeUrl,
  linkedinUrl,
} : PageHeaderProps) {
  return (
    <Center py={6}>
      <Box
        maxW="320px"
        w="full"
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow="2xl"
        rounded="md"
        overflow="hidden"
      >
        <Image
          h="120px"
          w="full"
          src={profileBackground}
          objectFit="cover"
          alt="#"
        />
        <Flex justify="center" mt={-12}>
          <Avatar
            size="xl"
            src={avatar}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align="center" mb={5}>
            <Heading fontSize="2xl" fontWeight={500} fontFamily="body">
              {name}
            </Heading>
            <Text color="gray.600">{title}</Text>
            <Text color="gray.500">{tagline}</Text>
          </Stack>

          <Stack direction="row" justify="center" spacing={2}>
            <Link
              href={linkedinUrl}
              isExternal
              _hover={{ textTransform: 'none' }}
            >
              <IconButton
                colorScheme="linkedin"
                aria-label="Linkedin"
                icon={<FaLinkedin />}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
              />
            </Link>
            <Link
              href={resumeUrl}
              _hover={{ textTransform: 'none' }}
            >
              <Button
                colorScheme="gray"
                border="1px solid rgba(0,0,0,0.3)"
                leftIcon={<TbFileDownload />}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
              >
                Resume
              </Button>
            </Link>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}

export default PageHeader;
