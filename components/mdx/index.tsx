import { MDXRemote } from "next-mdx-remote/rsc";

//TODO: Fix any
export default function MDX({ content }: { content: string }) {
  return <MDXRemote source={content} />;
}
