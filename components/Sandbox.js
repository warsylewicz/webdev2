import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { neoCyan } from "@codesandbox/sandpack-themes";

const App = `import Page from "./page";

export default function App() {
  return <Page />;
}
`;

const Sandbox = ({ template, dependencies = {}, files }) => (
  <>
    <br />
    <Sandpack
      theme={neoCyan}
      template={template}
      customSetup={{
        dependencies,
      }}
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
