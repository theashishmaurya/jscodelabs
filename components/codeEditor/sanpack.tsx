"use client";
import { Sandpack } from "@codesandbox/sandpack-react";

export default function SandPackCodeEditor({ result }: { result: any }) {
  return (
    <div>
      <Sandpack theme="dark" template="static" files={result} />
    </div>
  );
}
