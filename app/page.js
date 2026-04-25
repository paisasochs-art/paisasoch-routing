import handler from "../pages/api/handler";

export default async function Page(req, res) {
  return handler(req, res);
}
