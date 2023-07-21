import CodeEditor from "@/components/codeEditor";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";

export const DIR = join(process.cwd(), "questions");

export function getData() {
  return readdirSync(DIR, { withFileTypes: true });
}

export default function Home() {
  console.log(DIR);
  console.log(getData());
  return (
    <div>
      <CodeEditor data={"asa"} />
    </div>
  );
}
