import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { neoCyan } from "@codesandbox/sandpack-themes";

/* Solve the problem that the code editor defaults to App.js, but the
  App router uses page.js */
const App = `import Page from "./page";

export default function App() {
  return <Page />;
}
`;

const Sandbox = ({ files }) => (
  <>
    <br />
    <Sandpack
      theme={neoCyan}
      template="react"
      files={{
        ...files,
        "/App.js": {
          code: App,
          hidden: true,
        },
      }}
    />
  </>
);

export default Sandbox;
