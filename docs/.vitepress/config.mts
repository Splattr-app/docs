import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Splattr docs",
  description: "The official documentation of splattr.app",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  sitemap: {
    hostname: "https://docs.splattr.app",
  },
  themeConfig: {
    logo: "/logo_compressed.png",

    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "Reference", link: "/reference/job-configuration" },
      { text: "Go to Splattr", link: "https://splattr.app" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "User Guide",
          items: [
            { text: "Getting Started", link: "/guide/getting-started" },
            { text: "Understanding Input Types", link: "/guide/input-types" },
            { text: "Using the Smart Setup", link: "/guide/smart-setup" },
          ],
        },
      ],
      "/reference/": [
        {
          text: "Job Configuration",
          items: [
            {
              text: "Full Settings Reference",
              link: "/reference/job-configuration",
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "discord", link: "https://discord.gg/5eyUW5YAeT" },
      { icon: "github", link: "https://github.com/Splattr-app/docs" },
    ],
  },
});
