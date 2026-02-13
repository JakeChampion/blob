import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/edge-functions";

export default async (req: Request, context: Context) => {

  const uploads = getStore("file-uploads");

  await uploads.set('meow', 'meow')

  await uploads.delete('meow');

  return new Response("Blob has been deleted");
};

export const config = {
  path: '/*'
}