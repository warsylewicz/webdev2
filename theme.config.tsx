import { useRouter } from "next/router";

export default {
  logo: (
    <span>
      {" "}
      <span style={{ color: "#00e626" }}>&lt;/&gt;</span> Web Dev 2
    </span>
  ),
  project: {
    link: "https://github.com/warsylewicz/webdev2",
  },
  chat: {
    link: process.env.NEXT_PUBLIC_INSTRUCTOR_TEAMS_CHAT,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M22 2H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6l2 3 2-3h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM8 14H6v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"
        />
      </svg>
    ),
  },
  search: {
    placeholder: "Search content...",
  },

  docsRepositoryBase: "https://github.com/warsylewicz/webdev2/tree/main",
  footer: {
    text: "Programming is best learned by solving problems. If you want to learn more, create more problems.",
  },
  primaryHue: { dark: 130, light: 130 },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Web Dev 2",
      };
    }
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
};
