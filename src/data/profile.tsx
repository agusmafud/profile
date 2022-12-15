import React from 'react';
import {
  SiHtml5, SiGit, SiWebpack, SiEslint, SiJenkins, SiJirasoftware, SiCss3, SiChakraui, SiMaterialui,
  SiGithub, SiRedux, SiReduxsaga, SiReactrouter, SiStorybook, SiBootstrap, SiBulma, SiJest,
  SiTypescript, SiJavascript, SiReact, SiTestinglibrary,
} from 'react-icons/si';
import { IoLogoSass } from 'react-icons/io';
import { SlGrid } from 'react-icons/sl';
import { FaNpm } from 'react-icons/fa';
import { MdHttp } from 'react-icons/md';

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
    label: 'Javascript',
    SkillIcon: SiJavascript,
    skillIconColor: '#F7DF1E',
    description: 'JavaScript is a programming language that is one of the core technologies of the World Wide Web. It allows you to add interactivity to your pages.',
    highlighted: true,
  }, {
    label: 'TypeScript',
    SkillIcon: SiTypescript,
    skillIconColor: '#3178C6',
    description: 'TypeScript is a strict syntactical superset of JavaScript and adds optional static typing to the language.',
    highlighted: true,
  }, {
    label: 'ECMAScript',
    description: 'ECMAScript provides the specification on how JavaScript programming language should work.',
    highlighted: true,
  }, {
    label: 'React',
    SkillIcon: SiReact,
    skillIconColor: '#61DAFB',
    description: 'React is the most popular front-end JavaScript library for building user interfaces. React can also render on the server using Node and power mobile apps using React Native.',
    highlighted: true,
  }, {
    description: 'Functional programming using React Hooks.',
    variant: 'bullet',
  }, {
    description: 'Experience in Create React App and Server-side Rendering Next.js projects.',
    variant: 'bullet',
  }],
}, {
  label: 'Build Tools',
  skills: [{
    label: 'GIT',
    SkillIcon: SiGit,
    skillIconColor: '#F05033',
    description: 'Git is a free and open source distributed version control system designed to SiGit everything from small to very large projects with speed and efficiency.',
  }, {
    label: 'npm',
    SkillIcon: FaNpm,
    skillIconColor: '#CB3837',
    description: 'npm is a package manager for the JavaScript programming language.',
  }, {
    label: 'Webpack',
    SkillIcon: SiWebpack,
    skillIconColor: '#1C78C0',
    description: 'Webpack main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.',
  }, {
    label: 'ESLint',
    SkillIcon: SiEslint,
    skillIconColor: '#4B32C3',
    description: 'With ESLint you can impose the coding standard using a certain set of standalone rules.',
  }, {
    label: 'Jenkins',
    SkillIcon: SiJenkins,
    skillIconColor: 'black',
    description: 'Jenkins helps automate the parts of software development related to building, testing, and deploying, facilitating continuous integration and continuous delivery.',
  }, {
    label: 'Jira',
    SkillIcon: SiJirasoftware,
    skillIconColor: '#2684FF',
    description: 'Jira is an issue tracking product that allows bug tracking and agile project management.',
  }, {
    label: 'Github',
    SkillIcon: SiGithub,
    skillIconColor: 'black',
    description: 'GitHub is a provider of internet hosting for software development and version control using Git.',
  }],
}, {
  label: 'React and JS libraries',
  skills: [{
    label: 'Redux',
    SkillIcon: SiRedux,
    skillIconColor: '#764ABC',
    description: 'Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.',
  }, {
    label: 'Redux Saga',
    SkillIcon: SiReduxsaga,
    skillIconColor: '#89D96D',
    description: 'redux-saga is a redux middleware that aims to make application asynchronous side effects easier to manage. It uses an ES6 feature called Generators to make those asynchronous flows easy to read, write and test.',
  }, {
    label: 'React Router',
    SkillIcon: SiReactrouter,
    skillIconColor: '#61DBFC',
    description: 'React router is the most famous library when it comes to implementing routing in React applications.',
  }, {
    label: 'Axios',
    SkillIcon: MdHttp,
    skillIconColor: '#005B9B',
    description: 'The most common way for frontend programs to communicate with servers is through the HTTP protocol. Axios is a client HTTP API based on the XMLHttpRequest interface provided by browsers.',
  }, {
    label: 'Storybook',
    SkillIcon: SiStorybook,
    skillIconColor: '#FF4785',
    description: 'Storybook is a frontend workshop for building UI components and pages in isolation. It is used for UI development, testing, and documentation.',
  }],
}, {
  label: 'Style',
  skills: [{
    label: 'CSS3',
    SkillIcon: SiCss3,
    skillIconColor: '#379AD6',
    description: 'CSS3 stands for Cascading Style Sheet level 3, which is the advanced version of CSS. It is used for structuring, styling, and formatting web pages.',
  }, {
    label: 'Flex Box / Css Grid',
    SkillIcon: SlGrid,
    skillIconColor: 'black',
    description: 'Float, grid, flexbox, positioning, display and box model are some of the key topics that are used for making layouts.',
  }, {
    label: 'SASS',
    SkillIcon: IoLogoSass,
    skillIconColor: '#CF649A',
    description: 'Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. It lets you write maintainable CSS and provides features like variable, nesting, mixins, extension, functions, loops, conditionals and so on.',
  }, {
    label: 'BEM Architecture',
    description: 'The Block, Element, Modifier methodology is a popular naming convention for classes in HTML and CSS. Its goal is to help developers better understand the relationship between the HTML and CSS in a given project.',
  }, {
    label: 'CSS-in-JS',
    description: 'The way we write CSS in modern front-end applications is completely different from before. CSS-in-JS libraries (like Styled Components, CSS Modules, Styled JSX, Emotion) allows you to write encapsulated and scoped CSS to style your components with the power of JS.',
  }],
}, {
  label: 'Visual Frameworks',
  skills: [{
    label: 'Chakra UI',
    SkillIcon: SiChakraui,
    skillIconColor: '#63CACF',
    description: 'Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.',
  }, {
    label: 'Material UI',
    SkillIcon: SiMaterialui,
    skillIconColor: '#007FFF',
    description: 'Material-UI is an open-source framework that features React components that implement Google’s Material Design.',
  }, {
    label: 'Bootstrap',
    SkillIcon: SiBootstrap,
    skillIconColor: '#8212FA',
    description: 'The world’s most popular front-end open source UI toolkit for building responsive mobile-first sites.',
  }, {
    label: 'Bulma',
    SkillIcon: SiBulma,
    skillIconColor: '#00D1B2',
    description: 'Bulma is simply a collection of CSS classes that provide ready-to-use frontend components that you can combine to build responsive web interfaces.',
  }],
}, {
  label: 'Testing libraries',
  skills: [{
    label: 'React Testing Library',
    SkillIcon: SiTestinglibrary,
    skillIconColor: '#E63635',
    description: 'React Testing Library is a solution for testing React components. It provides utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices.',
  }, {
    label: 'Jest',
    SkillIcon: SiJest,
    skillIconColor: '#99425B',
    description: 'Jest is a JavaScript Testing Framework with a focus on simplicity.',
  }, {
    label: 'Enzyme',
    description: 'Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components\' output',
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
    SkillIcon: SiHtml5,
    skillIconColor: '#E44D26',
    description: 'HTML5 is a markup language used for structuring and presenting content on the World Wide Web.',
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
