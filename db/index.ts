import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "@/db/schema";
import "dotenv/config";
import assert from "node:assert";

assert(process.env.DATABASE_URL, "you need a DATABASE_URL");

const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql, { schema });

// Export the raw sql client in case callers need to run raw queries (e.g. adjust sequences after seeding)
export { sql };

export default db;
