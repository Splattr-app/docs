import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Splattr docs",
  description: "The official documentation of splattr.app",
  themeConfig: {
    logo: "/logo_compressed.png",

    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "Reference", link: "/reference/job-settings" },
      { text: "Go to Splattr", link: "https://splattr.app" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "User Guide",
          items: [
            { text: "Getting Started", link: "/guide/getting-started" },
            { text: "Capture Best Practices", link: "/guide/capture-guide" },
            { text: "Sharing & Collaboration", link: "/guide/collaboration" },
          ],
        },
      ],
      "/reference/": [
        {
          text: "Reference",
          items: [
            { text: "Job Settings Explained", link: "/reference/job-settings" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "discord", link: "https://discord.gg/5eyUW5YAeT" },
      { icon: "github", link: "https://github.com/Splattr-app/docs" },
    ],
  },
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
});
