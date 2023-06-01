import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { neoCyan } from "@codesandbox/sandpack-themes";

const Sandbox = ({ template, dependencies = {}, files }) => (
  <Sandpack
    theme={neoCyan}
    template={template}
    customSetup={{
      dependencies,
    }}
    files={files}
  />
);

export default Sandbox;
