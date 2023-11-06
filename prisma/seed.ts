import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const initUser = async () => {
  const newUser = await prisma.users
    .create({
      data: {
        clerkId: "fbhjrbfjeh",
        email: "leo@gmail.io",
        historique: "",
        shoppingList: "",
      },
    })
    .then((t) => console.log(t));
};

initUser();
