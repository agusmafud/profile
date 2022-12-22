import React from 'react';
import {
  SiHtml5, SiGit, SiWebpack, SiEslint, SiJenkins, SiJirasoftware, SiCss3, SiChakraui, SiMaterialui,
  SiGithub, SiRedux, SiReduxsaga, SiReactrouter, SiStorybook, SiBootstrap, SiBulma, SiJest,
  SiTypescript, SiJavascript, SiReact, SiTestinglibrary, SiFirebase, SiAwsamplify, SiMicrosoftazure,
  SiGoogleanalytics, SiGoogletagmanager,
} from 'react-icons/si';
import { HiOutlineDocumentSearch } from 'react-icons/hi';
import { TiLocationOutline } from 'react-icons/ti';
import { IoLogoSass } from 'react-icons/io';
import { SlGrid } from 'react-icons/sl';
import { FaNpm } from 'react-icons/fa';
import { MdHttp, MdOutlineMarkEmailRead } from 'react-icons/md';
import { RxAccessibility } from 'react-icons/rx';

import ExternalLink from 'base-components/ExternalLink';
import {
  PersonalInfoItem,
  Education,
  ProfessionalExperienceItem,
  DevStackItem,
  Repository,
} from 'types';

const useProfile = () => {
  const name = 'Agustín Mafud';
  const title = 'React Frontend Developer.';
  const tagline = 'Practical thinker.';
  const personalInfo: PersonalInfoItem[] = [
    {
      key: 'email',
      label: 'email',
      value: 'agusmafud@gmail.com',
    },
    {
      key: 'github',
      value: (
        <ExternalLink
          href="https://www.linkedin.com/in/agustinmafud"
          label="Linkedin"
          showExternalIcon
        />
      ),
    },
  ];

  const education: Education = {
    title: 'Systems Engineer',
    yearStart: '2002',
    yearEnd: '2010',
    establishment: 'Universidad Tecnológica Nacional (UTN)',
  };

  const summary = [
    'Developing with React and working remotely under agile methodologies since 2018.',
    'Experience in large projects with distributed teams.',
    'Former experience as Functional Analyst and Product Manager.  Specialized in UI/UX, KPIs, conversion funnel and product evolution.',
  ];

  const devStack: DevStackItem[] = [{
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
      SkillIcon: SiFirebase,
      skillIconColor: '#FFCB2B',
      description: 'Firebase provides a cross-platform SDKs to help you build and ship apps on the web.',
    }, {
      label: 'AWS Amplify',
      SkillIcon: SiAwsamplify,
      skillIconColor: '#FF9900',
      description: 'AWS amplify let developers of both web and mobile applications convert their static applications to scalable full-stack applications.',
    }, {
      label: 'MS Azure',
      SkillIcon: SiMicrosoftazure,
      skillIconColor: '#2573BE',
      description: 'Microsoft Azure is a cloud computing platform for application management via around the world-distributed data centers.',
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
      SkillIcon: RxAccessibility,
      description: 'Web accessibility means that websites, tools, and technologies are designed and developed in such a way that people with disabilities can use them easily.',
    }, {
      label: 'internationalization',
      SkillIcon: TiLocationOutline,
      description: 'Internationalization ("I18N") is the process of planning and implementing products and services so that they can easily be adapted to specific local languages and cultures, a process called localization',
    }, {
      label: 'SEO',
      SkillIcon: HiOutlineDocumentSearch,
      description: 'Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic rather than direct traffic or paid traffic.',
    }, {
      label: 'Google Analytics',
      SkillIcon: SiGoogleanalytics,
      skillIconColor: '#E37400',
      description: 'Google Analytics is a platform that collects data from your websites and apps to create reports that provide insights into your business.',
    }, {
      label: 'Google Tag Manager',
      SkillIcon: SiGoogletagmanager,
      skillIconColor: '#4FC3F7',
      description: 'Google Tag Manager is a tag management system that allows you to easily update measurement codes and related code fragments collectively known as tags on your website or mobile app.',
    }, {
      label: 'Google Lighthouse',
      description: 'Google Lighthouse is an automated tool for measuring the quality of web pages. It audits performance, accessibility and search engine optimization of web pages.',
    }, {
      label: 'email marketing',
      SkillIcon: MdOutlineMarkEmailRead,
      description: 'Email marketing is the act of sending a commercial message using email. HTML emails can be built for sending visual dynamic contents.',
    }],
  }];

  const professionalExperiences: ProfessionalExperienceItem[] = [{
    startDate: new Date('1 November 2021 9:00:00 UTC-03:00'),
    endDate: new Date('1 December 2022 9:00:00 UTC-03:00'),
    companyName: 'Nimble',
    companyLink: 'https://nimble.la',
    title: 'Frontend Developer',
    experiences: [
      <>
        Built new React web version for ResortPass, an ecommerce that
        offers day access to luxury hotel amenities
        {' '}
        <ExternalLink
          href="https://www.resortpass.com"
          label="(https://www.resortpass.com)"
        />
        .
      </>,
      <>
        Worked on the web CRM and workflow collaboration tool Alltum
        {' '}
        <ExternalLink
          href="https://alltum.io"
          label="(https://alltum.io)"
        />
        .
      </>,
    ],
    useBullets: true,
  }, {
    startDate: new Date('1 November 2020 9:00:00 UTC-03:00'),
    endDate: new Date('1 November 2021 9:00:00 UTC-03:00'),
    companyName: 'Arzion',
    companyLink: 'https://www.arzion.com/',
    title: 'Frontend Developer',
    experiences: [
      <>
        Frontend Developer for Kognitiv&apos;s multilingual hotel booking tool
        {' '}
        <ExternalLink
          href="https://kognitiv.com/hoteltechnology"
          label="(https://kognitiv.com/hoteltechnology)"
        />
        .
      </>,
      'The solution supports extensive marketing features such as promotions, offers, vouchers, price alerts, and corporate branding, under an optimized usability and conversion focused UX.',
    ],
  }, {
    startDate: new Date('1 January 2019 9:00:00 UTC-03:00'),
    endDate: new Date('1 November 2020 9:00:00 UTC-03:00'),
    companyName: 'Globant',
    companyLink: 'https://www.globant.com/',
    title: 'Web UI Developer',
    experiences: [
      'Within Telecom\'s digital transformation project, built the web version of “Mi Personal” where users can manage all their products, buy new ones, and view segmented cross-sell offers.',
    ],
  }, {
    startDate: new Date('1 May 2018 9:00:00 UTC-03:00'),
    endDate: new Date('1 December 2018 9:00:00 UTC-03:00'),
    title: 'Freelance React Developer',
    experiences: [
      'Developed progressive web apps and landing pages using React.js, Redux, and Material UI.',
    ],
  }, {
    title: 'Former experience',
    experiences: [
      '5 years as Product Analyst and Product Manager in LA Nación media group (Club LA Nación, Dridco and BonVivir).',
      <>
        4 years of entrepreneurial experience as a cofounder of a startup.
        Obtained financing from Argentine Technological Fund (FONTAR) for
        developing a mobile web portal for events and conferences
        {' '}
        <ExternalLink
          href="https://www.guivent.com"
          label="(https://www.guivent.com)"
        />
        .
      </>,
      '2 years as Game Analyst in Vostu.  Vostu was the largest social games developer in Latin America in the early 2010s with more than 20 million active users at its peak.',
    ],
    useBullets: true,
  }];

  const languagesDetails = [
    'English (advanced - First Certificate level), Spanish (native).',
  ];

  const hobbiesDetails = [
    'Rock climber.  Amateur sommelier.  Improvised botanist.  Crypto enthusiast.',
    'Fan of endless talks on theoretical physics and consciousness.',
  ];

  const codeRepos: Repository[] = [{
    title: "This page's code",
    description: 'Profile Page made with React',
    url: 'https://github.com/agusmafud/profile',
  }, {
    title: 'Battleship game',
    description: 'Simplified React version of the battleship game, player vs CPU.',
    url: 'https://github.com/agusmafud/battleship',
  }, {
    title: 'Todo web app',
    description: 'Simple todo progressive web app using React',
    url: 'https://github.com/agusmafud/todoapp',
  }];
  const resumeUrl = `${process.env.PUBLIC_URL}/Agustín Mafud.pdf`;
  const linkedinUrl = 'https://www.linkedin.com/in/agustinmafud';

  return {
    name,
    title,
    tagline,
    personalInfo,
    education,
    summary,
    devStack,
    professionalExperiences,
    languagesDetails,
    hobbiesDetails,
    codeRepos,
    resumeUrl,
    linkedinUrl,
  };
};

export default useProfile;
