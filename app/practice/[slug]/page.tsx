import CodeEditor from "@/components/codeEditor";
import MDX from "@/components/mdx";
import { readFromFolder } from "@/utils/readFromFolder";

export default async function Home({ params }: { params: { slug: string } }) {
  let content: any = {}; //TODO: Add type

  try {
    content = await readFromFolder(params.slug);
  } catch (e) {
    console.log(e);
    // Error Page for showing error message when the folder is not found
    return <div>Error</div>;
  }

  return (
    <div>
      <div className="prose prose-slate dark:prose-invert prose-blockquote:prose-indigo">
        <MDX content={content.question} />
      </div>
      <CodeEditor files={content.template} />
    </div>
  );
}
