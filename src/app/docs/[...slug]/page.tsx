// app/docs/[...slug]/page.tsx
import fs from "fs";
import path from "path";
import React from "react";
import Markdoc from "@markdoc/markdoc";
// (optional) your custom markdoc schema/config
// import markdocConfig from "@/markdoc/config";

// 1. Generate all the possible slugs at build time
export async function generateStaticParams() {
  const docsDir = path.join(process.cwd(), "src", "app", "docs");
  function walk(dir: string): string[] {
    return fs.readdirSync(dir).flatMap((name) => {
      const full = path.join(dir, name);
      return fs.statSync(full).isDirectory()
        ? walk(full)
        : full.endsWith(".md")
        ? [full]
        : [];
    });
  }
  const files = walk(docsDir);
  return files.map((file) => {
    const rel = path.relative(docsDir, file).replace(/\.md$/, "");
    return { slug: rel.split(path.sep) };
  });
}

// 2. Pull frontmatter into Next’s metadata API
export async function generateMetadata({ params }: { params: { slug: string[] } }) {
  const filePath = path.join(process.cwd(), "src", "app", "docs", ...params.slug) + ".md";
  const source = fs.readFileSync(filePath, "utf-8");
  const ast = Markdoc.parse(source);
  return {
    title: ast.attributes.title,
    description: ast.attributes.description,
  };
}

// 3. Render the page
export default async function DocPage({ params }: { params: { slug: string[] } }) {
  const filePath = path.join(process.cwd(), "src", "app", "docs", ...params.slug) + ".md";
  const source = fs.readFileSync(filePath, "utf-8");
  const ast = Markdoc.parse(source);
//   const content = Markdoc.transform(ast, markdocConfig);
  const content = Markdoc.transform(ast);
  const reactTree = Markdoc.renderers.react(content, React, {
    // optionally pass your custom components here
  });
  return <article>{reactTree}</article>;
}
