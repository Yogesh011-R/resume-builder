import { relations } from 'drizzle-orm';
import {
  foreignKey,
  integer,
  pgTable,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';

export const resumeTable = pgTable('resumes', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer(),
  title: text(),
  description: text(),
  photoUrl: text(),
  colorHex: text().default('#000000'),
  borderStyle: text().default('squirecle'),
  summery: text(),
  firstName: text(),
  jobTitle: text(),
  city: text(),
  country: text(),
  phone: text(),
  email: text(),
  skills: text().array(),

  createdAt: timestamp('createdAt', {
    mode: 'date',
    precision: 3,
  }).defaultNow(),
  updatedAt: timestamp('updatedAt', {
    mode: 'date',
    precision: 3,
  }).$onUpdate(() => new Date()),
});

export const workExperienceTable = pgTable(
  'workExperience',
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    position: text(),
    company: text(),
    startDate: timestamp(),
    endDate: timestamp(),
    description: text(),
    resumeId: integer('resume_id').references(() => resumeTable.id),
  },
  (table) => ({
    resumeRelation: foreignKey({
      columns: [table.resumeId],
      foreignColumns: [resumeTable.id],
    }),
  })
);
export const educationTable = pgTable(
  'education',
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    degree: text(),
    school: text(),
    startDate: timestamp(),
    endDate: timestamp(),
    resumeId: integer('resume_id').references(() => resumeTable.id),
  },
  (table) => ({
    resumeRelation: foreignKey({
      columns: [table.resumeId],
      foreignColumns: [resumeTable.id],
    }),
  })
);

export const resumeRelations = relations(resumeTable, ({ many }) => ({
  workExperiences: many(workExperienceTable),
  educations: many(educationTable),
}));

export const workExperienceRelations = relations(
  workExperienceTable,
  ({ one }) => ({
    resume: one(resumeTable, {
      fields: [workExperienceTable.resumeId],
      references: [resumeTable.id],
    }),
  })
);
export const educationRelations = relations(educationTable, ({ one }) => ({
  resume: one(resumeTable, {
    fields: [educationTable.resumeId],
    references: [resumeTable.id],
  }),
}));
