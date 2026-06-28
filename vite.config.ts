import { paraglideVitePlugin } from '@inlang/paraglide-js'
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    paraglideVitePlugin({
      project: './paraglide.inlang',
      outdir: './app/i18n',
      strategy: ["url", "cookie", "preferredLanguage", "baseLocale"],
      urlPatterns: [
        {
          pattern: "http://:domain(.*)::port?/:path(.*)?",
          localized: [
            ["en", "http://:domain(.*)::port?/en/:path(.*)?"],
            ["nl", "http://:domain(.*)::port?/nl/:path(.*)?"],
          ],
        },
        {
          pattern: "https://:domain(.*)::port?/:path(.*)?",
          localized: [
            ["en", "https://:domain(.*)::port?/en/:path(.*)?"],
            ["nl", "https://:domain(.*)::port?/nl/:path(.*)?"],
          ],
        },
      ],
    }),
    tailwindcss(),
    reactRouter()
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
