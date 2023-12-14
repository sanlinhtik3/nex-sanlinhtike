import { defineDocumentType, makeSource } from "@contentlayer/source-files";
import remarkGfm from "remark-gfm";
import highlight from 'rehype-highlight'
import readingTime from 'reading-time';

export const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: `**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: { type: "string", required: true },
        date: { type: "date", required: true },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: (post) => `/posts/${post._raw.flattenedPath}`,
        },
        readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
        wordCount: {
            type: 'number',
            resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
        },
        slug: {
            type: 'string',
            resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
        },
    },
}));

export default makeSource({
    contentDirPath: "posts",
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [highlight],
    },
});
