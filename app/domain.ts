export const domain =
  process.env.NEXT_ENV === "production"
    ? "https://sanlinhtike.vercel.app"
    : "http://localhost:3000";
