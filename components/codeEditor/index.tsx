"use client";
import {
  SandpackCodeEditor,
  SandpackConsole,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";

export default function CodeEditor({ files }: { files: any }) {
  //TODO: Implement the resizable panes
  return (
    <SandpackProvider template="react" theme="dark" files={files}>
      <SandpackLayout style={{ height: "100vh" }}>
        <SandpackCodeEditor style={{ height: "100vh" }} />
        <SandpackPreview
          style={{ height: "100vh" }}
          showNavigator={true}
          showOpenInCodeSandbox={false}
          showRefreshButton={true}
          showSandpackErrorOverlay={true}
        />
        <SandpackConsole />
      </SandpackLayout>
    </SandpackProvider>
  );
}
