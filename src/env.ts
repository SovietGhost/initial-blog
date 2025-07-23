import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		NODE_ENV: z
			.enum(["development", "production", "test"])
			.default("development"),
        DATABASE_URL: z.url(),
        PAYLOAD_SECRET: z.string().min(32)
	},
	experimental__runtimeEnv: {},
});
