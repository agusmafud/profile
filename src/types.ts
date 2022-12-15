import React from 'react';
import { IconType } from 'react-icons/lib';

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
  label?: string,
  SkillIcon?: IconType,
  skillIconColor?: string,
  description: string,
  highlighted?: boolean,
  variant?: 'bullet' | 'badge',
};

export type DevStackItem = {
  label: string,
  skills: Skill[],
};

export type ProfessionalExperienceItem = {
  startDate?: Date,
  endDate?: Date,
  companyName?: string,
  companyLink?: string,
  title: string,
  experiences: string[],
  useBullets?: boolean,
};

export type NavigationSection = {
  label: string,
  url: string,
};

export type Toast = {
  description: string,
  ToastIcon?: IconType,
  iconColor?: string,
};
