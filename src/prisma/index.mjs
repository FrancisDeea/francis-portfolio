import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // const response = await
    //     prisma.category.create({
    //         data: {
    //             name: "html",
    //             title: "Aprende HTML - Lenguaje de Marcado - Curso desde cero",
    //             description: "Esto es una descripción test",
    //             posts: {
    //                 create: {
    //                     title: 'title',
    //                     description: 'description',
    //                     hashtags: ['si'],
    //                     content: "content",
    //                     image: "/images/test.jpg"
    //                 }
    //             }
    //         }
    //     })

    // console.log(response)

    const response = await prisma.category.findFirst({
        where: {
            id: 3
        },
        include: {
            posts: true
        }
    })

    console.log(response)
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })