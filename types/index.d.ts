import { ResumeFormValues } from '@/form-schemas';

export interface EditorFromProps {
  resumeData: ResumeFormValues;
  setResumeData: (data: ResumeFormValues) => void;
}
