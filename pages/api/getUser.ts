import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function getUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await unstable_getServerSession(authOptions);
  res.json(session);
}
