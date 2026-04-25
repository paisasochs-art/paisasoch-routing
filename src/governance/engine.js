export function resolveRequest(path) {
  // 🔁 Normalize
  const cleanPath = path.replace(/\/+$/, "");

  // ✅ VALID ROUTES (example)
  if (cleanPath === "" || cleanPath === "/") {
    return { kind: "ok" };
  }

  if (cleanPath.includes("gold-rate-today")) {
    return { kind: "ok" };
  }

  // 🔁 LEGACY REDIRECT EXAMPLE
  if (cleanPath === "/gold-price-mumbai") {
    return {
      kind: "redirect",
      redirectTo: "/gold-rate-today/mumbai",
    };
  }

  // ❌ EVERYTHING ELSE = 404
  return {
    kind: "notfound",
  };
}
