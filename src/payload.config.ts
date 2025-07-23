import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";
import { env } from "@/env";
import { Users } from "@/collections/Users";
import { Media } from "@/collections/Media";

export default buildConfig({
	editor: lexicalEditor(),
	collections: [Users, Media],
	secret: env.PAYLOAD_SECRET,
	db: postgresAdapter({
		pool: {
			connectionString: env.DATABASE_URL,
		},
	}),
	sharp,
	plugins: [
		
	]
});
