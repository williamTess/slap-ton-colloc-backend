import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../utils/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const users = await prisma.users.findMany();

    return res.status(200).json(users);
  }
  if (req.method === "POST") {
    console.log(req.body, req.headers, req.query);
    const data = req.body.data;
    const user = await prisma.users.findUnique({ where: { id: data.id } });

    if (user) return res.status(401).json({ error: "User already created" });

    const newUser = await prisma.users
      .create({
        data: {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
        },
      })
      .then((t) => console.log(t));

    return res.status(200).json({ message: "user Successfully created" });
  }
};

export default handler;
