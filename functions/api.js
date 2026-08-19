export async function onRequestGet(context) {
  return new Response(JSON.stringify({status:"ok","msg":"hello test"}),{
    headers:{"Content-Type":"application/json"}
  })
}