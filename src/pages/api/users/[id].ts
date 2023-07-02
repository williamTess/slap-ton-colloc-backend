import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../utils/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id: idNotChecked } = req.query;
  const id = Array.isArray(idNotChecked) ? idNotChecked[0] : idNotChecked;

  if (!id) {
    return res.status(400).json({ err: "Not a valid ID" });
  }

  const user = await prisma.users.findUnique({ where: { id: id } });
  if (!user) return res.status(404).json({ err: "User not found" });

  return res.status(200).json(user);
};

export default handler;
