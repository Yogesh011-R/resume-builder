CREATE TABLE IF NOT EXISTS "resumes" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "resumes_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"userId" integer,
	"title" text,
	"description" text,
	"photoUrl" text,
	"colorHex" text DEFAULT '#000000',
	"borderStyle" text DEFAULT 'squirecle',
	"summery" text,
	"firstName" text,
	"jobTitle" text,
	"city" text,
	"country" text,
	"phone" text,
	"email" text,
	"skills" text[],
	"createdAt" timestamp (3) DEFAULT now(),
	"updatedAt" timestamp (3)
);
