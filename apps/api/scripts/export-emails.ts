import { writeFileSync } from 'fs'
import { resolve } from 'path'
import { asc } from 'drizzle-orm'
import { db } from '@/db'
import { users } from '@/db/schema'

const DEFAULT_OUTPUT = 'emails.csv'
const CSV_HEADER = 'name,email'

const escapeCsv = (value: string): string => {
    if (!/[",\n\r]/.test(value)) return value
    return `"${value.replace(/"/g, '""')}"`
}

const outputPath = resolve(process.cwd(), process.argv[2] ?? DEFAULT_OUTPUT)

const rows = await db
    .select({ name: users.name, email: users.email })
    .from(users)
    .orderBy(asc(users.createdAt))

const lines = rows.map(
    (row) => `${escapeCsv(row.name ?? '')},${escapeCsv(row.email)}`
)

writeFileSync(outputPath, [CSV_HEADER, ...lines].join('\n'))
console.log(`wrote ${rows.length} users to ${outputPath}`)