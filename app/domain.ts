export const domain =
  process.env.NEXT_ENV === "production"
    ? "sanlinhtike.vercel.app"
    : "http://localhost:3000";
