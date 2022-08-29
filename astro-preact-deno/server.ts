import { serve } from "https://deno.land/std@0.132.0/http/server.ts";
import { handle } from "./dist/server/entry.mjs";

serve((req: Request) => {
  // Check the request, maybe do static file handling here.

  return handle(req);
});
