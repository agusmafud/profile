import React from 'react';

export type PersonalInfoItem = {
  key: string,
  label?: string,
  value: React.ReactNode | string,
};

export type Education = {
  title: string,
  yearStart: string,
  yearEnd: string,
  establishment: string,
};

export type Skill = {
  label: string,
  Icon?: React.ReactElement,
  description: string,
};

export type DevStackItem = {
  label: string,
  skills: Skill[],
};

export type ProfessionalExperienceItem = {
  startDate: Date,
  endDate?: Date,
  companyName: string,
  companyLink?: string,
  title: string,
  experiences: string[],
  useBullets?: boolean,
};

export type NavigationSection = {
  label: string,
  url: string,
};
