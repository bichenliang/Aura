// functions/api/products.js
export async function onRequestGet(context) {
  const { env } = context;
  try {
    const { results } = await env.D1_DB.prepare("SELECT * FROM products").all();
    return Response.json(results);
  } catch(err) {
    console.error(err);
    return Response.json([], {status:500});
  }
}