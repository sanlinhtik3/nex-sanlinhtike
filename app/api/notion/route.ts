import { getBlogPosts } from "@/utils/notion";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const posts = await getBlogPosts();
    return Response.json(posts);
}