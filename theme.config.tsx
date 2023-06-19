import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

export default {
  logo: (
    <span>
      {" "}
      <span style={{ color: "#00e626" }}>&lt;/&gt;</span> Web Dev 2
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
  primaryHue: { dark: 130, light: 130 },
};
