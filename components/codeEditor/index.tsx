"use client";
import {
  SandpackCodeEditor,
  SandpackConsole,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";

export default function CodeEditor({ data }: { data: any }) {
  return (
    <SandpackProvider
      template="static"
      theme="dark"
      files={{
        "/index.js": `console.log("Hello world")`,
      }}
    >
      <SandpackLayout>
        <SandpackFileExplorer />
        <SandpackCodeEditor />
        <SandpackPreview />
        {/* <SandpackConsole /> */} {/* Console not working fine */}
      </SandpackLayout>
    </SandpackProvider>
  );
}
