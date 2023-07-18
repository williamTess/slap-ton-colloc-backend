import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../utils/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const users = await prisma.users.findMany();

    return res.status(200).json(users);
  }

  if (req.method === "POST") {
    return postUsers(req, res);
  }

  if (req.method === "DELETE") {
    return deleteUsers(req, res);
  }
};

const postUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body.data;
  const user = await prisma.users.findUnique({ where: { clerkId: data.id } });

  if (user) return res.status(401).json({ error: "User already created" });

  await prisma.users.create({
    data: {
      clerkId: data.id,
      email: data.email_addresses[0].email_address,
    },
  });

  return res.status(200).json({ message: "user Successfully created" });
};

const deleteUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body.data;
  const user = await prisma.users.findUnique({ where: { clerkId: data.id } });

  if (!user) return res.status(401).json({ error: "User doesn't exist" });

  await prisma.users.delete({ where: { clerkId: user.clerkId } });

  return res.status(200).json({ message: "user Successfully created" });
};

export default handler;
