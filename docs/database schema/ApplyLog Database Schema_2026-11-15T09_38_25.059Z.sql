CREATE TYPE "employment_type" AS ENUM (
	'Full-Time',
	'Part-Time',
	'Contract',
	'Internship',
	'Freelance'
);

CREATE TYPE "application_statuses" AS ENUM (
	'Wishlist',
	'Applied',
	'Under Review',
	'Assessment',
	'Interview',
	'Offer Received',
	'Hired',
	'Rejected',
	'Withdrawn',
	'Ghosted',
	'Expired'
);

CREATE TABLE IF NOT EXISTS "users" (
	"id" UUID NOT NULL,
	"email" VARCHAR(255) NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	"full_name" VARCHAR(50) NOT NULL,
	"nickname" VARCHAR(20),
	-- NanoID(21).image_extension(.jpg, .jpeg, .png)
	"image" VARCHAR(26),
	"created_at" TIMESTAMPTZ NOT NULL,
	"updated_at" TIMESTAMPTZ NOT NULL,
	PRIMARY KEY("id")
);

COMMENT ON COLUMN "users"."image" IS 'NanoID(21).image_extension(.jpg, .jpeg, .png)';

CREATE TABLE IF NOT EXISTS "companies" (
	"id" UUID NOT NULL,
	"name" VARCHAR(255) NOT NULL UNIQUE,
	"website" TEXT,
	"industry" VARCHAR(255),
	"location" VARCHAR(255),
	-- NanoID(21).image_extension(.jpg, .jpeg, .png)
	"image" VARCHAR(26),
	"created_at" TIMESTAMPTZ NOT NULL,
	"updated_at" TIMESTAMPTZ NOT NULL,
	PRIMARY KEY("id")
);

COMMENT ON COLUMN "companies"."image" IS 'NanoID(21).image_extension(.jpg, .jpeg, .png)';

CREATE TABLE IF NOT EXISTS "job_applications" (
	"id" UUID NOT NULL,
	"user_id" UUID NOT NULL,
	"company_id" UUID NOT NULL,
	"job_title" VARCHAR(255) NOT NULL,
	"employment_type" EMPLOYMENT_TYPE NOT NULL,
	"location" VARCHAR(255),
	"job_url" TEXT,
	"salary_min" INTEGER NOT NULL,
	"salary_max" INTEGER NOT NULL,
	"currency" CHAR(3) NOT NULL,
	"status" APPLICATION_STATUSES NOT NULL,
	"applied_at" DATE NOT NULL,
	"deadline" DATE NOT NULL,
	"description" TEXT,
	-- NanoID(21).file_extension(.pdf, .docx)
	"cv" VARCHAR(26),
	-- NanoID(21).file_extension(.pdf, .docx)
	"resume" VARCHAR(26),
	"created_at" TIMESTAMPTZ NOT NULL,
	"updated_at" TIMESTAMPTZ NOT NULL,
	PRIMARY KEY("id")
);

COMMENT ON COLUMN "job_applications"."cv" IS 'NanoID(21).file_extension(.pdf, .docx)';
COMMENT ON COLUMN "job_applications"."resume" IS 'NanoID(21).file_extension(.pdf, .docx)';

CREATE TABLE IF NOT EXISTS "application_status_history" (
	"id" UUID NOT NULL,
	"application_id" UUID NOT NULL,
	"previous_status" APPLICATION_STATUSES NOT NULL,
	"new_status" APPLICATION_STATUSES NOT NULL,
	"created_at" TIMESTAMPTZ NOT NULL,
	PRIMARY KEY("id")
);

CREATE TABLE IF NOT EXISTS "sessions" (
	"id" UUID NOT NULL,
	"user_id" UUID NOT NULL,
	"token" TEXT NOT NULL,
	"created_at" TIMESTAMPTZ NOT NULL,
	"expires_at" TIMESTAMPTZ NOT NULL,
	"last_used_at" TIMESTAMPTZ NOT NULL,
	PRIMARY KEY("id")
);

ALTER TABLE "sessions"
ADD FOREIGN KEY("user_id") REFERENCES "users"("id")
ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "job_applications"
ADD FOREIGN KEY("company_id") REFERENCES "companies"("id")
ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "job_applications"
ADD FOREIGN KEY("user_id") REFERENCES "users"("id")
ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "application_status_history"
ADD FOREIGN KEY("application_id") REFERENCES "job_applications"("id")
ON UPDATE NO ACTION ON DELETE NO ACTION;