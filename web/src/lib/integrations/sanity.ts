import { createClient } from "next-sanity";

import { env } from "@/lib/env";

export const sanityClient = createClient({
  projectId: env.server.SANITY_PROJECT_ID,
  dataset: env.server.SANITY_DATASET,
  apiVersion: env.server.SANITY_API_VERSION,
  useCdn: false,
  token: process.env.SANITY_READ_TOKEN,
});
