CREATE TABLE "announcement" (
	"id" serial PRIMARY KEY NOT NULL,
	"date" timestamp DEFAULT now() NOT NULL,
	"title" text NOT NULL,
	"content" text NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "menu" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"price" integer NOT NULL,
	"display_order" integer DEFAULT 1 NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL
);
