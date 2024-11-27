import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const resumeTable = pgTable("resumes", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer(),
  title: text(),
  description: text(),
  photoUrl: text(),
  colorHex: text().default("#000000"),
  borderStyle: text().default("squirecle"),
  summery: text(),
  firstName: text(),
  jobTitle: text(),
  city: text(),
  country: text(),
  phone: text(),
  email: text(),
  skills: text().array(),

  createdAt: timestamp("createdAt", {
    mode: "date",
    precision: 3,
  }).defaultNow(),
  updatedAt: timestamp("updatedAt", {
    mode: "date",
    precision: 3,
  }).$onUpdate(() => new Date()),
});
