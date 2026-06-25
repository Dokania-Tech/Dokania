export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/login"],
      },
      {
        userAgent: "Slurp", // Yahoo's bot
        allow: "/",
        disallow: ["/admin/", "/api/", "/login"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/admin/", "/api/", "/login"],
      },
    ],
    sitemap: "https://www.dokaniatech.com/sitemap.xml",
    host: "https://www.dokaniatech.com",
  };
}
