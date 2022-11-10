// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../lib/db";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //   const session = await getSession();

  if (req.method === "GET") {
    try {
      const posts = await db.post.findMany();

      return res.json(posts);
    } catch (error) {
      return res.status(500).end();
    }
  }
}
