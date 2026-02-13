import { integer, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";


export const user = pgTable("user",{
    id: serial('id').primaryKey(),
    name: varchar({length:255}).notNull(),
    email: varchar({length:255}).notNull().unique(),
    password: varchar({length:255}).notNull(),
    createdAt: timestamp({mode: 'date'}).notNull().defaultNow(),
    
})

export const yt = pgTable("yt",{
    id: serial('id').primaryKey(),
    title: varchar({length:255}).notNull(),
    url: varchar({length:255}).notNull(),
    createdAt: timestamp({mode:'date'}).notNull().defaultNow(),
    createdBy: integer('created_by')
    .notNull()
    .references(() => user.id)
})

export const notes = pgTable("notes",{
    id: serial('id').primaryKey(),
    title: varchar({length:255}).notNull(),
    notes: varchar({length:255}).notNull(),
    createdAt: timestamp({mode: 'date'}).notNull().defaultNow(),
    createdBy: integer('created_by')
    .notNull()
    .references(() => user.id)
})