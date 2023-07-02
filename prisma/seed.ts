import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const initUser = async() => {
    const newUser = await prisma.users.create({
        data: {
          password: 'ijduidhgzuey',
          email: 'leo@gmail.io',
        },
      }).then((t) => console.log(t))
}

initUser()
 