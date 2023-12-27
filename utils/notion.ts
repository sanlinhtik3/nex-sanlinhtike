import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
export async function getBlogPosts() {
  const databaseId: any = process.env.NOTION_DATABASE_ID;
  // if (databaseId === undefined) {
  //     throw new Error("Database ID is undefined");
  // }
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return response.results.map((page: any) => ({
    id: page.id,
    name: page.properties["Name"].title[0].text.content,
    number: page.properties["Number"].number,
    // title: page.properties['Title'].title[0].text.content,
    // date: page.properties['Date'].date.start,
    tags: page.properties["Tags"].multi_select.map((tag: any) => tag.name),
    // content: page.properties['Content'].rich_text[0].text.content,
    // page
  }));
}
