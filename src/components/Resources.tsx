import React from 'react';
import {
  Box,
  Button,
  Flex,
  Link,
  Heading,
  Divider,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { FaLinkedin } from 'react-icons/fa';
import { TbFileDownload } from 'react-icons/tb';
import { VscGithub } from 'react-icons/vsc';
import { Repository } from 'types';

const Resources = ({
  codeRepos,
  resumeUrl,
  linkedinUrl,
}: {
  codeRepos: Repository[],
  resumeUrl: string,
  linkedinUrl: string,
}) => (
  <Box
    width="100%"
    marginTop={8}
  >
    <Flex wrap="wrap">
      <Link
        href={linkedinUrl}
        isExternal
        _hover={{ textTransform: 'none' }}
        marginBottom={4}
        marginRight={4}
      >
        <Button
          colorScheme="linkedin"
          leftIcon={<FaLinkedin />}
        >
          Linkedin
        </Button>
      </Link>
      <Link
        href={resumeUrl}
        _hover={{ textTransform: 'none' }}
        marginBottom={4}
        marginRight={4}
      >
        <Button
          colorScheme="gray"
          border="1px solid rgba(0,0,0,0.3)"
          leftIcon={<TbFileDownload />}
        >
          Download resume
        </Button>
      </Link>
    </Flex>
    <Divider
      marginTop={2}
      marginBottom={4}
    />
    <Heading
      size="xs"
      textTransform="uppercase"
      color="gray.600"
    >
      Code repositories
    </Heading>
    <Flex wrap="wrap">
      {codeRepos.map((repo) => (
        <Tooltip
          key={repo.title}
          label={repo.description}
          hasArrow
        >
          <Link
            href={repo.url}
            isExternal
            marginTop={4}
            marginRight={4}
            _hover={{ textTransform: 'none' }}
          >
            <Button
              leftIcon={<VscGithub />}
              colorScheme="gray"
              border="1px solid rgba(0,0,0,0.3)"
            >
              <Text whiteSpace="normal">
                {repo.title}
              </Text>
            </Button>
          </Link>
        </Tooltip>
      ))}
    </Flex>
  </Box>
);

export default Resources;
