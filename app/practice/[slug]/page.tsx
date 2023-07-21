import CodeEditor from "@/components/codeEditor";
import { dir } from "console";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import { useState } from "react";

export const DIR = join(process.cwd(), "questions");

export function getData(slug: string) {
  return readdirSync(DIR, { withFileTypes: true }).filter(
    (folder) => folder.name === slug
  );
}

export default function Home({ params }: { params: { slug: string } }) {
  // contains all the questions folder
  const questionFolder = readdirSync(DIR);

  // get the folder which matches to the slug
  const questionFolderName = questionFolder.filter(
    (folder) => folder === params.slug
  );

  // Read all the files from the folder

  const questionFiles = readdirSync(join(DIR, questionFolderName[0]));
  console.log(questionFiles);

  // Read all the files from the template folder

  const templateFiles = readdirSync(
    join(DIR, questionFolderName[0], "template")
  );
  console.log(templateFiles);

  return (
    <div>
      {/* <CodeEditor data={"asa"} /> */}
      <div>{params.slug}</div>
      <div>
        {templateFiles.map((file) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div>
              {readFileSync(
                join(DIR, questionFolderName[0], "template", file),
                "utf-8"
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
