import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../utils/prisma";
import data from "../../../../prisma/infos.json";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const posters = await prisma.posters.findMany();
    console.log(posters);
    const posterfilters = data.filterPoster;

    return res.status(200).json({ filters: posterfilters, posters: posters });
  }
  return res.status(404).json("error: page not found");
};

export default handler;
