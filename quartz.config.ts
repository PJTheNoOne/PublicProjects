import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Paul Jacobson",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    baseUrl: "pauljacobson.pjtheno.one",
    ignorePatterns: ["private", "templates"],
    theme: {
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#0a0113",
          darkgray: "#0a0113",
          dark: "#0a0113",
          secondary: "#640eaa",
          tertiary: "#b28bda",
          highlight: "rgba(178, 139, 218, 0.25)",
        },
        darkMode: {
          light: "#0f100f", //background
          lightgray: "#333333", // background accent
          gray: "#f5f4f5", //sub text
          darkgray: "#f5f4f5", // paragraph text
          dark: "#f5f4f5", // header text
          secondary: "#b28bda", // accent
          tertiary: "#640eaa", // hover text
          highlight: "rgba(178, 139, 218, 0.25)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
    ],
    filters: [
      Plugin.RemoveDrafts(),
      Plugin.ExplicitPublish()
    ],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
    ],
  },
}

export default config
