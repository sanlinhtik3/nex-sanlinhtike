import { getBlogPosts } from "@/utils/notion";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    const posts = await getBlogPosts();
    return NextResponse.json(posts);
}