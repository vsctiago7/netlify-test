export const apiUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:9000"
    : "https://fercodes.netlify.com";
