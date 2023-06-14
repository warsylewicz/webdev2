import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <span>
      {" "}
      <span style={{ color: "#E67300" }}>&lt;/&gt;</span> Web Dev 2
    </span>
  ),
  // project: {
  //   link: "https://github.com/warsylewicz/webdev2",
  // },
  // chat: {
  //   link: "https://discord.com",
  // },
  search: {
    placeholder: "Search content...",
  },

  docsRepositoryBase: "https://github.com/warsylewicz/webdev2/tree/main",
  footer: {
    text: "Programming is best learned by solving problems. If you want to learn more, create more problems.",
  },
  primaryHue: { dark: 30, light: 245 },
};

export default config;
