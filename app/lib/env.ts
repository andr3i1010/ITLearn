import { createEnv } from "@t3-oss/env-core";
import * as z from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production", "test"]),
    DATABASE_URL: z.url(),
    SECRET: z.string(),
    APP_BASE: z.url(),
  },
  clientPrefix: "VITE_",

  client: {
    // none yet idk
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
