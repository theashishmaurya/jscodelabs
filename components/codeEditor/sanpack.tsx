"use client";
import { Sandpack } from "@codesandbox/sandpack-react";

export default function SandPackCodeEditor() {
  return (
    <div>
      <Sandpack
        theme="dark"
        template="react"
        files={{
          "/Wrapper.js": `export default () => return "";`,

          "/Button.js": {
            code: `export default () => {
    return <button>Hello</button>
  };`,
            readOnly: true, // Set as non-editable, defaults to `false`
            active: true, // Set as main file, defaults to `false`
            hidden: false, // Tab visibility, defaults to `false`
          },
        }}
      />
    </div>
  );
}
