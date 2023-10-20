import { Prisma, PrismaClient } from "@prisma/client";
import data from "./infos.json";

const prisma = new PrismaClient();

const initPoster = async () => {
  data.posters.forEach(async (poster) => {
    await prisma.posters.create({ data: poster }).then((t) => console.log(t));
  });
};

initPoster();
