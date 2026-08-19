export async function onRequestGet(context) {
  return new Response(JSON.stringify({
    envKeys: Object.keys(context.env),
    hasD1: !!context.env.D1_DB
  }),{
    headers:{"Content-Type":"application/json"}
  })
}