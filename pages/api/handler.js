import { resolveRequest } from "../../src/governance/engine";

export default async function handler(req, res) {
  try {
    const path = req.url.split("?")[0];

    const result = resolveRequest(path);

    // ✅ 301 REDIRECT
    if (result.kind === "redirect") {
      res.writeHead(301, {
        Location: result.redirectTo,
      });
      return res.end();
    }

    // ✅ 404 NOT FOUND
    if (result.kind === "notfound") {
      res.writeHead(404, {
        "Content-Type": "text/html",
        "X-Robots-Tag": "noindex, nofollow",
      });

      return res.end(`
        <html>
          <head><title>404 Not Found</title></head>
          <body><h1>404 Not Found</h1></body>
        </html>
      `);
    }

    // ✅ 200 VALID ROUTE → FETCH LOVABLE
    const origin = await fetch(
      "https://paisa-soch-pro.lovable.app" + path
    );

    const html = await origin.text();

    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    return res.end(html);

  } catch (e) {
    res.writeHead(500);
    return res.end("Internal Server Error");
  }
}
