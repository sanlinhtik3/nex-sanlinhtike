import { getNextJSPosts } from "@/utils/notion";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const posts = await getNextJSPosts();
  return NextResponse.json(posts);
}
