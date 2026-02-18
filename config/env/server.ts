import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const serverEnv = createEnv({
  server: {
    STACK_SECRET_SERVER_KEY: z.string().min(1),
  },
  experimental__runtimeEnv: process.env,
});
