export async function onRequestGet(context) {
  return new Response("pages function ok",{headers:{"Content-Type":"text/plain"}})
}