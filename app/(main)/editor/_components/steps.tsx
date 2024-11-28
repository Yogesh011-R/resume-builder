import { EditorFromProps } from '@/types';

import EducationForm from './forms/education-info-form';
import { GeneralInfoForm } from './forms/general-info-form';
import { PersonalInfoForm } from './forms/personal-info-forn';
import { WorkExperienceForm } from './forms/work-experience-form';

export const steps: {
  title: string;
  component: React.ComponentType<EditorFromProps>;
  key: string;
}[] = [
  {
    title: 'General info',
    component: GeneralInfoForm,
    key: 'general-info',
  },
  { title: 'Personal info', component: PersonalInfoForm, key: 'personal-info' },
  {
    title: 'Work experience',
    component: WorkExperienceForm,
    key: 'work-experience',
  },
  { title: 'Education', component: EducationForm, key: 'education' },
  // { title: 'Skills', component: <></>, key: 'skills' },
  // {
  //   title: 'Summary',
  //   component: <></>,
  //   key: 'summary',
  // },
];
