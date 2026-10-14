import { pgTable, serial, text, timestamp, integer, boolean } from 'drizzle-orm/pg-core';
import { type InferSelectModel, type InferInsertModel } from 'drizzle-orm';

export const announcement = pgTable('announcement', {
  id: serial('id').primaryKey(),
  date: timestamp('date').defaultNow().notNull(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});

export type Announcement = InferSelectModel<typeof announcement>;
export type NewAnnouncement = InferInsertModel<typeof announcement>;

export const menu = pgTable('menu', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  price: integer('price').notNull(),
  displayOrder: integer('display_order').notNull().default(1),
  isActive: boolean('is_active').notNull().default(true),
});

export type Menu = InferSelectModel<typeof menu>;
export type NewMenu = InferInsertModel<typeof menu>;
