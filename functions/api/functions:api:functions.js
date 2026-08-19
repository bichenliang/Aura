export async function onRequestGet(context) {
  const { env } = context;
  try {
    const result = await env.D1_DB.prepare("SELECT * FROM products").all();
    return new Response(JSON.stringify(result.results), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({error: err.message}), { status:500 });
  }
}