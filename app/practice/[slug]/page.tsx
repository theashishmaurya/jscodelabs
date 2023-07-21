import CodeEditor from "@/components/codeEditor";
import { dir } from "console";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";

export const DIR = join(process.cwd(), "questions");

export function getData(slug: string) {
  return readdirSync(DIR, { withFileTypes: true }).filter(
    (folder) => folder.name === slug
  );
}

export default function Home({ params }: { params: { slug: string } }) {
  console.log(DIR);
  console.log(getData(params.slug));
  // contains all the questions folder
  const questionFolder = readdirSync(DIR);

  // get the folder which matches to the slug
  const questionFolderName = questionFolder.filter(
    (folder) => folder === params.slug
  );

  // Read all the files from the folder

  const questionFiles = readdirSync(join(DIR, questionFolderName[0]));
  console.log(questionFiles);

  // Read the file content from the folder
  const questionFileContent = readFileSync(
    join(DIR, questionFolderName[0], questionFiles[0]),
    "utf-8"
  );

  // Read all the files from the template folder

  const templateFiles = readdirSync(
    join(DIR, questionFolderName[0], "template")
  );
  console.log(templateFiles);
  templateFiles.forEach((file) => {
    console.log(
      readFileSync(join(DIR, questionFolderName[0], "template", file), "utf-8")
    );
  });
  return (
    <div>
      <CodeEditor data={"asa"} />
      <div>{params.slug}</div>
    </div>
  );
}
