import { betterAuth } from "better-auth";
import { env } from "../env";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "../db";
import { emailOTP, magicLink, twoFactor, username } from "better-auth/plugins";
import { passkey } from "@better-auth/passkey";

export const auth = betterAuth({
  secret: env.SECRET,
  baseUrl: env.APP_BASE,
  allowedOrigins: env.NODE_ENV === "production" ? [env.APP_BASE] : ["*"],
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    twoFactor(),
    username(),
    magicLink({
      sendMagicLink: async ({ email, token, url, metadata }, ctx) => {
        // implementeer
        // https://better-auth.com/docs/plugins/magic-link
      },
    }),
    emailOTP({
      async sendVerificationOTP({ email, otp, type }) {
        // https://better-auth.com/docs/plugins/email-otp
      },
    }),
    passkey()
  ],
});