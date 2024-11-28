import { z } from 'zod';

export const optionalString = z.string().trim().optional().or(z.literal(''));

export const generalInfoFormSchema = z.object({
  title: optionalString,
  description: optionalString,
});

export type GeneralInfoFormValues = z.infer<typeof generalInfoFormSchema>;

export const personalInfoSchema = z.object({
  photo: z
    .array(
      z.instanceof(File).refine((file) => file.size < 4 * 1024 * 1024, {
        message: 'File size must be less than 4MB',
      })
    )
    .max(1, {
      message: 'Maximum 1 files are allowed',
    })
    .nullable(),
  firstName: optionalString,
  lastName: optionalString,
  jobTitle: optionalString,
  city: optionalString,
  country: optionalString,
  email: optionalString,
  phone: optionalString,
});

export type PersonalInfoFormValues = z.infer<typeof personalInfoSchema>;

export const workExperienceSchema = z.object({
  workExperiences: z
    .array(
      z.object({
        position: optionalString,
        company: optionalString,
        startDate: optionalString,
        endDate: optionalString,
        description: optionalString,
      })
    )
    .optional(),
});

export type WorkExperienceValues = z.infer<typeof workExperienceSchema>;

export const generateWorkExperienceSchema = z.object({
  description: z
    .string()
    .trim()
    .min(1, 'Required')
    .min(20, 'Must be at least 20 characters'),
});

export type GenerateWorkExperienceInput = z.infer<
  typeof generateWorkExperienceSchema
>;

export type WorkExperience = NonNullable<
  z.infer<typeof workExperienceSchema>['workExperiences']
>[number];

export const educationSchema = z.object({
  educations: z
    .array(
      z.object({
        degree: optionalString,
        school: optionalString,
        startDate: optionalString,
        endDate: optionalString,
      })
    )
    .optional(),
});

export type EducationValues = z.infer<typeof educationSchema>;

export const resumeSchema = z.object({
  ...generalInfoFormSchema.shape,
  ...personalInfoSchema.shape,
  ...workExperienceSchema.shape,
  ...educationSchema.shape,
});

export type ResumeFormValues = Omit<z.infer<typeof resumeSchema>, 'photo'> & {
  id?: string;
  photo?: File | string | null;
};
