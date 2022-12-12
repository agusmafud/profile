import React from 'react';
import { Icon } from '@chakra-ui/react';
import { SiHtml5 } from 'react-icons/si';

import ExternalLink from 'base-components/ExternalLink';
import {
  PersonalInfoItem,
  Education,
  ProfessionalExperienceItem,
  DevStackItem,
} from 'types';

export const name = 'Agustín Mafud';
export const title = 'React Frontend Developer.';
export const tagline = 'Practical thinker.';
export const personalInfo: PersonalInfoItem[] = [
  {
    key: 'email',
    label: 'email',
    value: 'agusmafud@gmail.com',
  },
  {
    key: 'phoneNumber',
    label: 'phone number',
    value: '+(54 9 11) 3174.6328',
  },
  {
    key: 'github',
    value: (
      <ExternalLink
        href="https://github.com/agusmafud"
        label="github.com/agusmafud"
        showExternalIcon
      />
    ),
  },
];

export const education: Education = {
  title: 'Systems Engineer',
  yearStart: '2002',
  yearEnd: '2010',
  establishment: 'Universidad Tecnológica Nacional (UTN)',
};

export const summary = [
  'Developing with React and working remotely under agile methodologies since 2018.',
  'Experience in large projects with distributed teams.',
  'Former experience as Functional Analyst and Product Manager.  Specialized in UI/UX, KPIs, conversion funnel and product evolution.',
];

// Build Tools:  GIT, npm, Webpack, ESLint, Jenkins, Jira, Github.
// React and JS libraries:  Redux, Redux Saga, Redux Thunk, React Router, Axios, Storybook.
// Style:  CSS3, Flex Box, Css Grid, SASS, BEM Architecture, CSS-in-JS, Styled Components, Emotion.
// Visual Frameworks:  Chakra UI, Material UI, Bootstrap, Bulma.
// Testing libraries:  React Testing Library, Jest, Enzyme.
// Cloud:  Firebase, AWS Amplify, MS Azure.
// SiEslint

export const devStack: DevStackItem[] = [{
  label: 'Main Tools',
  skills: [{
    label: 'HTML5',
    Icon: <Icon color="#E44D26" float="left" w={8} h={8} margin="6px 8px 0 0" as={SiHtml5} />,
    description: 'HTML5 is a markup language used for structuring and presenting content on the World Wide Web.',
  }],
}, {
  label: 'Build Tools',
  skills: [{
    label: 'GIT',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'npm',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'Webpack',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'ESLint',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'Jenkins',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'Jira',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'Github',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }],
}, {
  label: 'React and JS libraries',
  skills: [{
    label: 'Redux',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'Redux Saga',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'Redux Thunk',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'React Router',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'Axios',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'Storybook',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }],
}, {
  label: 'Style',
  skills: [{
    label: 'CSS3',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'Flex Box',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'Css Grid',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'SASS',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'BEM Architecture',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'CSS-in-JS',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'Styled Components',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'Emotion',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }],
}, {
  label: 'Visual Frameworks',
  skills: [{
    label: 'Chakra UI',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'Material UI',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'Bootstrap',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'Bulma',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }],
}, {
  label: 'Testing libraries',
  skills: [{
    label: 'React Testing Library',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'Jest',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'Enzyme',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }],
}, {
  label: 'Cloud',
  skills: [{
    label: 'Firebase',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'AWS Amplify',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'MS Azure',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }],
}, {
  label: 'Internet',
  skills: [{
    label: 'HTML5',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'accessibility',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'internationalization',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'SEO',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'Google Analytics',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'Google Tag Manager',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'Google Lighthouse',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }, {
    label: 'email marketing',
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  }],
}];

export const professionalExperiences: ProfessionalExperienceItem[] = [{
  startDate: new Date('November 2021'),
  endDate: new Date('December 2022'),
  companyName: 'Nimble',
  companyLink: 'https://nimble.la',
  title: 'Frontend Developer',
  experiences: [
    'Built new React web version for ResortPass, an ecommerce that offers day access to luxury hotel amenities.',
    'Worked on the web CRM and workflow collaboration tool Alltum',
  ],
  useBullets: true,
}, {
  startDate: new Date('November 2015'),
  endDate: new Date('December 2016'),
  companyName: 'Nimble',
  companyLink: 'https://nimble.la',
  title: 'Frontend Developer',
  experiences: [
    'Built new React web version for ResortPass, an ecommerce that offers day access to luxury hotel amenities.',
    'Worked on the web CRM and workflow collaboration tool Alltum',
  ],
  useBullets: true,
}, {
  startDate: new Date('November 2021'),
  companyName: 'Nimble',
  title: 'Frontend Developer',
  experiences: [
    'Built new React web version for ResortPass, an ecommerce that offers day access to luxury hotel amenities.',
    'Worked on the web CRM and workflow collaboration tool Alltum',
  ],
}];
