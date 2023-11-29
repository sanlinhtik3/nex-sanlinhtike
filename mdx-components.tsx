import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        pre: (props) => (
            <pre {...props} className="rounded-xl border-2 border-sky-600" style={{ backgroundColor: '#007bff', padding: '0rem' }} />
        ),
        ...components,
    }
}