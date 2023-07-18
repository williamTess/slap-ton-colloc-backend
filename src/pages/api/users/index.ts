import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../utils/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const users = await prisma.users.findMany();

    return res.status(200).json(users);
  }
  if (req.method === "POST") {
    console.log(req.body, req.headers, req.query);

    return res.status(200).json({ test: "test" });
  }
};

export default handler;
