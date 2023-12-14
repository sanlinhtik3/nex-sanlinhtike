import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import Image from "next/image";

const mdxComponents: MDXComponents = {
    // Override the default <a> element to use the next/link component.
    // a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
    // img: ({ src, alt, width, height, ...props }) => (
    //     <Image src={src as string} alt={alt as string} width={width as number} height={height as number} {...props} />
    // )
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
    if (!post) notFound();

    const MDXContent = useMDXComponent(post.body.code);

    return (
        <article className="mx-auto max-w-screen-md py-8">
            <div className="mb-8">
                <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
                    {new Intl.DateTimeFormat("en-US").format(new Date(post.date))}
                </time>
                <h1 className="text-3xl font-bold">{post.title}</h1>
            </div>
            <div className=" prose !prose-red max-w-none">
                <MDXContent components={mdxComponents} />
            </div>
        </article>
    );
};

export default PostLayout;

export const generateStaticParams = async () =>
    allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
    if (!post) notFound();
    return { title: post.title };
};
