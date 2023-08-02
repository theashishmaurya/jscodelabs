import CodeEditor from "@/components/codeEditor";
import Hello from "./hello.mdx";

export default function Page() {
  return (
    <div className="prose prose-slate dark:prose-invert prose-blockquote:prose-indigo">
      <Hello />
    </div>
  );
}
