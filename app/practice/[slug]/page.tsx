import SandPackCodeEditor from "@/components/codeEditor/sanpack";
import { readFromFolder } from "@/utils/readFromFolder";

export default async function Home({ params }: { params: { slug: string } }) {
  let content = {};

  try {
    content = await readFromFolder(params.slug);
  } catch (e) {
    console.log(e);
  }

  return (
    <div>
      <SandPackCodeEditor result={content} />
    </div>
  );
}
