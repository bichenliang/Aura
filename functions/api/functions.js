// functions/img/[[path]].js
export async function onRequestGet(context) {
  const { env, params } = context;
  const key = params.path.join("/");
  const obj = await env.R2_BUCKET.get(key);
  if (!obj) return new Response("图片不存在", { status: 404 });
  return new Response(obj.body, {
    headers: { "Content‑Type": obj.httpMetadata.contentType || "image/jpeg" }
  });
}