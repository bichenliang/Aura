export async function onRequestGet(context) {
  const db = context.env.D1_DB;
  try {
    const res = await db.prepare("SELECT * FROM products").all();
    return new Response(JSON.stringify(res.results), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({
      errMsg: err.message
    }), {
      status:500,
      headers: { "Content-Type": "application/json" }
    });
  }
}