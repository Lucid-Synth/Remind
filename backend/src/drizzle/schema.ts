import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";


export const user = pgTable("user",{
    id: serial('id').primaryKey(),
    name: varchar({length:255}).notNull(),
    email: varchar({length:255}).notNull().unique(),
    password: varchar({length:255}).notNull(),
    createdAt: timestamp('created at',{mode: 'date'}).notNull().defaultNow()
})
