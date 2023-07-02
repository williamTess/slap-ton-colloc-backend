import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../utils/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const users = await prisma.users.findMany()
    
    return res.status(200).json(users)

}

export default handler;