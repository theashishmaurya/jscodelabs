import CodeEditor from "@/components/codeEditor";
import { readdirSync, readFileSync } from "fs";
import path, { join } from "path";

const DIR = join(process.cwd(), "/questions");

export default function Home({ params }: { params: { slug: string } }) {
  // contains all the questions folder
  const questionFolder = readdirSync(DIR);

  // get the folder which matches to the slug
  const questionFolderName = questionFolder.filter(
    (folder) => folder === params.slug
  );

  // Read all the files from the folder

  const questionFiles = readdirSync(join(DIR, questionFolderName[0]));

  // Read all the files from the template folder

  const templateFiles = readdirSync(
    join(DIR, questionFolderName[0], "/template")
  );
  console.log(templateFiles, "This is where it fails");

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
                join(DIR, questionFolderName[0], "/template", file),
                "utf-8"
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
