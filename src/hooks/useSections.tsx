import React from 'react';
import { GiSkills, GiMountainClimbing } from 'react-icons/gi';
import { ImBooks } from 'react-icons/im';
import { BsTools } from 'react-icons/bs';
import { AiOutlineCode } from 'react-icons/ai';
import { MdLanguage } from 'react-icons/md';
import { TbWorldDownload } from 'react-icons/tb';

import DevStack from 'components/DevStack';
import Education from 'components/Education';
import Hobbies from 'components/Hobbies';
import Languages from 'components/Languages';
import ProfessionalExperience from 'components/ProfessionalExperience';
import Resources from 'components/Resources';
import Summary from 'components/Summary';
import useProfile from 'hooks/useProfile';
import { Section } from 'types';

const useSections = () => {
  const {
    education,
    summary,
    devStack,
    professionalExperiences,
    languagesDetails,
    hobbiesDetails,
    codeRepos,
    resumeUrl,
    linkedinUrl,
  } = useProfile();
  const sections: Section[] = [
    {
      id: 'education',
      title: 'Education',
      SectionIcon: ImBooks,
      Component: <Education education={education} />,
    },
    {
      id: 'knowledge',
      title: 'Areas of knowledge',
      SectionIcon: GiSkills,
      Component: <Summary summary={summary} />,
    },
    {
      id: 'stack',
      title: 'Development stack',
      SectionIcon: BsTools,
      Component: <DevStack devStack={devStack} />,
    },
    {
      id: 'experience',
      title: 'Professional Experience',
      SectionIcon: AiOutlineCode,
      Component: <ProfessionalExperience professionalExperiences={professionalExperiences} />,
    },
    {
      id: 'languages',
      title: 'Languages',
      SectionIcon: MdLanguage,
      Component: <Languages details={languagesDetails} />,
    },
    {
      id: 'hobbies',
      title: 'Hobbies',
      SectionIcon: GiMountainClimbing,
      Component: <Hobbies details={hobbiesDetails} />,
    },
    {
      id: 'resources',
      title: 'Resources',
      SectionIcon: TbWorldDownload,
      Component: (
        <Resources
          codeRepos={codeRepos}
          resumeUrl={resumeUrl}
          linkedinUrl={linkedinUrl}
        />
      ),
    },
  ];

  return sections;
};

export default useSections;
