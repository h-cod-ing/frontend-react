import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "./CodeBlock.jsx";
export default function MarkdownRenderer({markdown}) {
    return (
        <ReactMarkdown renderers={{code: CodeBlock,}} remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    )
}