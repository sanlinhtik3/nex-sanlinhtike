import { domain } from "@/app/domain";

async function getData() {
  const res = await fetch(`${domain}/api/notion`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// const data = await getData()
