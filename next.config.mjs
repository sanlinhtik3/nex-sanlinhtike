import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypePrism from '@mapbox/rehype-prism'
import rehypeHighlight from 'rehype-highlight'
// import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import createMDX from '@next/mdx'
import { withContentlayer } from 'next-contentlayer'


/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions`` to include MDX files
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    reactStrictMode: true,
    swcMinify: true,
    // Optionally, add any other Next.js config below
}

const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
        remarkPlugins: [remarkGfm, remarkParse, remarkRehype],
        rehypePlugins: [rehypeStringify, rehypePrism, rehypeHighlight],
    },
    // experimental: {
    //     mdxRs: true,
    // },
})

// Merge MDX config with Next.js config
// export default withMDX(nextConfig)
export default withContentlayer(nextConfig)